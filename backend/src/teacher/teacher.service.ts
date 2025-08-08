import {
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

@Injectable()
export class TeacherService {
    constructor(
        private readonly databaseServise: DatabaseService,
        private jwtService: JwtService
    ) {}

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
            const [students, assignedTestCount, tests] = await Promise.all([
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
                }),
            ])

            return {
                students,
                assignedTestCount,
                tests,
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
}
