import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { DatabaseService } from 'src/database/database.service'
import { CreateAdminDto } from './dto/CteateAdminDto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AdminService {
    constructor(
        private readonly databaseService: DatabaseService,
        private jwtService: JwtService
    ) {}

    async getAll() {
        try {
            return this.databaseService.admin.findMany()
        } catch (error) {
            throw new InternalServerErrorException('Failed to get users')
        }
    }

    async register(createAdminDto: CreateAdminDto) {
        try {
            const existUser = await this.databaseService.admin.findUnique({
                where: { email: createAdminDto.email },
            })

            if (existUser) {
                throw new ConflictException('Email is already in use')
            }

            const hashedPassword = await bcrypt.hash(
                createAdminDto.password,
                10
            )

            const user = await this.databaseService.admin.create({
                data: {
                    ...createAdminDto,
                    password: hashedPassword,
                },
            })

            const token = this.jwtService.sign({
                id: user.id,
                email: user.email,
            })

            return {
                access_token: token,
                user: {
                    id: user.id,
                    email: user.email,
                    status: user.status,
                },
            }
        } catch (error) {
            if (error instanceof ConflictException) {
                throw error
            }
            console.error('Registration error:', error)
            throw new InternalServerErrorException('Failed to create user')
        }
    }

    async delete(id: string) {
        try {
            const user = await this.databaseService.admin.findUnique({
                where: { id },
            })

            if (!user) {
                throw new NotFoundException('User not found')
            }

            await this.databaseService.admin.delete({
                where: { id },
            })
        } catch (error) {
            throw new InternalServerErrorException('Failed to delete user')
        }
    }
}
