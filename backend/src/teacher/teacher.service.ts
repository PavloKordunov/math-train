import {
    BadRequestException,
    ConflictException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common'
import { DatabaseService } from 'src/database/database.service'
import { createTeacherDto } from './dto/createTeacherDto'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { Subject } from 'generated/prisma'
import { UpdateTeacherDto } from './dto/updateTeacherDto'
import * as SibApiV3Sdk from 'sib-api-v3-sdk'
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class TeacherService {
    private apiInstance: SibApiV3Sdk.TransactionalEmailsApi
    constructor(
        private readonly databaseServise: DatabaseService,
        private jwtService: JwtService
    ) {
        const defaultClient = SibApiV3Sdk.ApiClient.instance
        const apiKey = defaultClient.authentications['api-key']
        apiKey.apiKey = process.env.BREVO_API_KEY
        this.apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
    }

    async getAllTeachers(page: number = 1) {
        const pageSize = 10
        const skip = (page - 1) * pageSize

        try {
            return await this.databaseServise.teacher.findMany()
        } catch (error) {
            throw new InternalServerErrorException('Failed to get teachers')
        }
    }

    async register(createTeacherDto: createTeacherDto) {
        const existingByEmail = await this.databaseServise.teacher.findUnique({
            where: { email: createTeacherDto.email },
        })

        if (existingByEmail) {
            throw new ConflictException('Цей email вже використовується')
        }

        const existingByPhone = await this.databaseServise.teacher.findUnique({
            where: { phone: createTeacherDto.phone },
        })

        if (existingByPhone) {
            throw new ConflictException(
                'Цей номер телефону вже використовується'
            )
        }
        const hashedPassword = await bcrypt.hash(createTeacherDto.password, 10)

        const user = await this.databaseServise.teacher.create({
            data: {
                email: createTeacherDto.email,
                phone: createTeacherDto.phone,
                name: createTeacherDto.name,
                subject:
                    Subject[createTeacherDto.subject as keyof typeof Subject],
                password: hashedPassword,
                isEmailVerified: false,
            },
        })

        const token = await this.generateToken(user)

        return {
            accessToken: token,
            user: {
                id: user.id,
                email: user.email,
                status: user.status,
                Subject: user.subject,
            },
        }
    }

    async verifyEmail(code: string) {
        if (!code) {
            throw new BadRequestException('Verification code is missing')
        }
        try {
            const verificationEntry =
                await this.databaseServise.emailVerificationCode.findUnique({
                    where: { code: code },
                })
            if (!verificationEntry) {
                throw new BadRequestException('Invalid verification code.')
            }
            if (new Date() > verificationEntry.expiresAt) {
                await this.databaseServise.emailVerificationCode.delete({
                    where: { id: verificationEntry.id },
                })
                throw new BadRequestException('Verification code has expired.')
            }
            await this.databaseServise.teacher.update({
                where: { email: verificationEntry.email },
                data: { isEmailVerified: true },
            })
            await this.databaseServise.emailVerificationCode.deleteMany({
                where: { id: verificationEntry.id },
            })
            return { isVerified: true }
        } catch (e) {
            console.error('An error occurred during email verification:', e)
            throw new BadRequestException('Invalid or expired token')
        }
    }

    async getTeacherById(id: string) {
        try {
            const teacher = await this.databaseServise.teacher.findUnique({
                where: { id },
            })

            if (!teacher) {
                throw new NotFoundException('User not found')
            }

            return teacher
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async getTeacherMainById(id: string) {
        try {
            const [students, assignedTestCount, tests, folders] =
                await Promise.all([
                    this.databaseServise.student.findMany({
                        where: { teacherId: id },
                    }),
                    this.databaseServise.assignedTest.count({
                        where: {
                            student: {
                                teacherId: id,
                            },
                        },
                    }),
                    this.databaseServise.test.findMany({
                        where: { teacherId: id },
                        include: { tasks: true },
                        orderBy: {
                            id: 'desc',
                        },
                    }),
                    this.databaseServise.folder.findMany({
                        where: { teacherId: id },
                        orderBy: {
                            id: 'desc',
                        },
                    }),
                ])

            return {
                students,
                assignedTestCount,
                tests,
                folders,
            }
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async updateTeacher(updateTeacherDto: UpdateTeacherDto, email: string) {
        try {
            const teacher = await this.databaseServise.teacher.findUnique({
                where: { email },
            })

            if (!teacher) {
                throw new NotFoundException('teacher not found')
            }

            return await this.databaseServise.teacher.update({
                where: { email },
                data: updateTeacherDto,
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    async delete(id: string) {
        try {
            const user = await this.databaseServise.teacher.findUnique({
                where: { id },
            })

            if (!user) {
                throw new NotFoundException('User not found')
            }

            return await this.databaseServise.teacher.delete({
                where: { id },
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async generateToken(user: any) {
        return {
            access_token: this.jwtService.sign({
                id: user.id,
                email: user.email,
                role: user.status,
            }),
        }
    }

    async sendVerificationEmail(email: string) {
        try {
            const verificationCode = uuidv4()

            const expiresAt = new Date(Date.now() + 15 * 60 * 1000)

            // await this.databaseServise.emailVerificationCode.deleteMany({
            //     where: { email },
            // })

            await this.databaseServise.emailVerificationCode.create({
                data: {
                    email,
                    code: verificationCode,
                    expiresAt,
                },
            })
            const verificationUrl = `${process.env.FRONTEND_URL}/verify?code=${verificationCode}`
            const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()
            sendSmtpEmail.to = [{ email: email }]
            sendSmtpEmail.sender = {
                email: process.env.EMAIL_FROM!,
                name: 'PointUp',
            }
            sendSmtpEmail.subject = 'Підтвердження пошти'
            sendSmtpEmail.htmlContent = `
        <div style="background-color: #ffffff; margin: 20px auto; padding: 40px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 600px; border-top: 5px solid #007bff;">
        
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://example.com/logo.png" alt="PointUp Logo" style="max-width: 150px; height: auto;">
        </div>

        <h1 style="color: #1a1a1a; font-size: 24px; text-align: center; margin-bottom: 20px;">
            Ласкаво просимо до PointUp!
        </h1>
        
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Привіт!
        </p>

        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            Дякуємо за реєстрацію на нашій платформі. Щоб почати користуватися усіма можливостями вашого облікового запису, вам потрібно підтвердити свою електронну пошту. Цей крок необхідний для забезпечення безпеки та уникнення спаму.
        </p>

        <div style="text-align: center; margin-bottom: 30px;">
            <a href="${verificationUrl}" style="background-color: #007bff; color: #ffffff; padding: 15px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; font-size: 18px; display: inline-block;">
                Підтвердити пошту
            </a>
        </div>

        <p style="font-size: 14px; line-height: 1.5; color: #888888; text-align: center;">
            Посилання для підтвердження буде активним до ${expiresAt}.
        </p>

        <hr style="border: 0; border-top: 1px solid #dddddd; margin: 30px 0;">

        <div style="background-color: #fff3cd; color: #856404; padding: 15px; border-radius: 5px; border-left: 5px solid #ffeeba;">
            <p style="margin: 0; font-size: 15px; line-height: 1.5;">
                ⚠️ **Важливо: Якщо ви не реєструвалися на PointUp, будь ласка, негайно видаліть цей лист і нікому не передавайте це посилання.** Можливо, хтось випадково ввів вашу адресу.
            </p>
        </div>

        <p style="font-size: 14px; line-height: 1.5; color: #555555; text-align: center; margin-top: 20px;">
            Якщо у вас виникли питання, зв'яжіться з нашою службою підтримки.
        </p>

    </div>

    <div style="text-align: center; font-size: 12px; color: #999999; margin-top: 20px;">
        <p style="margin: 0;">PointUp © 2025. Всі права захищені.</p>
        <p style="margin: 0;"><a href="#" style="color: #999999; text-decoration: none;">Умови використання</a> | <a href="#" style="color: #999999; text-decoration: none;">Політика конфіденційності</a></p>
    </div>
      `
            await this.apiInstance.sendTransacEmail(sendSmtpEmail)
        } catch (error) {
            throw new InternalServerErrorException(
                'Failed to send verification email'
            )
        }
    }
}
