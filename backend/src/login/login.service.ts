import {
    Injectable,
    InternalServerErrorException,
    UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { DatabaseService } from 'src/database/database.service'
import { NativeAuthDto } from './dto/nativeAuthDto'
import { Teacher, Student, Admin } from 'generated/prisma'

@Injectable()
export class LoginService {
    constructor(
        private readonly databaseService: DatabaseService,
        private jwtService: JwtService
    ) {}

    async oauth(email: string) {
        try {
            let user: Teacher | Student | Admin | null = null
            let role: 'teacher' | 'student' | 'admin' | null = null

            user = await this.databaseService.teacher.findUnique({
                where: { email },
            })
            if (user) {
                role = 'teacher'
            } else {
                user = await this.databaseService.student.findUnique({
                    where: { email },
                })
                if (user) {
                    role = 'student'
                } else {
                    user = await this.databaseService.admin.findUnique({
                        where: { email },
                    })
                    if (user) {
                        role = 'admin'
                    }
                }
            }

            if (!user) {
                throw new UnauthorizedException('User not found')
            }

            if (
                role === 'teacher' &&
                'subscriptionTime' in user &&
                user.subscriptionTime === null
            ) {
                throw new UnauthorizedException('User not have permission')
            }

            if (
                role === 'teacher' &&
                'isEmailVerified' in user &&
                !user.isEmailVerified
            ) {
                throw new UnauthorizedException('Email not verified')
            }

            const token = await this.generateToken(user)

            return {
                accessToken: token,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    status: user.status,
                    ...('subject' in user && { subject: user.subject }),
                    ...('plan' in user && { plan: user.plan }),
                    ...('subscriptionTime' in user && {
                        subscriptionTime: user.subscriptionTime,
                    }),
                },
            }
        } catch (error) {
            throw new InternalServerErrorException(
                `Failed to login: ${error.message}`
            )
        }
    }

    async native(nativeAuthDto: NativeAuthDto) {
        try {
            let user: Teacher | Student | Admin | null = null
            let role: 'teacher' | 'student' | 'admin' | null = null

            user = await this.databaseService.teacher.findUnique({
                where: { email: nativeAuthDto.email },
            })
            if (user) {
                role = 'teacher'
            } else {
                user = await this.databaseService.student.findUnique({
                    where: { email: nativeAuthDto.email },
                })
                if (user) {
                    role = 'student'
                } else {
                    user = await this.databaseService.admin.findUnique({
                        where: { email: nativeAuthDto.email },
                    })
                    if (user) {
                        role = 'admin'
                    }
                }
            }

            if (!user) {
                throw new UnauthorizedException('User not found')
            }

            if (
                role === 'teacher' &&
                'subscriptionTime' in user &&
                user.subscriptionTime === null
            ) {
                throw new UnauthorizedException('User not have permission')
            }

            const isValidPassword = await bcrypt.compare(
                nativeAuthDto.password,
                user?.password
            )

            if (!isValidPassword) {
                throw new UnauthorizedException('Invalid credentials')
            }

            const token = await this.generateToken(user)

            return {
                accessToken: token,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    status: user.status,
                    ...('subject' in user && { subject: user.subject }),
                    ...('plan' in user && { plan: user.plan }),
                    ...('subscriptionTime' in user && {
                        subscriptionTime: user.subscriptionTime,
                    }),
                },
            }
        } catch (error) {
            throw new InternalServerErrorException(`${error.message}`)
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
