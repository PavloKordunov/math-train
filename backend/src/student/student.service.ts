import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { DatabaseService } from 'src/database/database.service'
import { createStudentDto } from './dto/CreateStudentDto'
import * as bcrypt from 'bcrypt'
import { UpdateStudentDto } from './dto/UpdateStudentDto'

@Injectable()
export class StudentService {
    constructor(
        private readonly databaseService: DatabaseService,
        private jwtService: JwtService
    ) {}

    async findAllStudents(page: number = 1) {
        const pageSize = 10
        const skip = (page - 1) * pageSize

        try {
            const [items, total] = await Promise.all([
                this.databaseService.student.findMany({
                    skip,
                    take: pageSize,
                    orderBy: {
                        id: 'asc',
                    },
                }),
                this.databaseService.student.count(),
            ])
            return {
                data: items,
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total / pageSize),
            }
        } catch (error) {
            throw new InternalServerErrorException('Failed to get students')
        }
    }

    async findStudentById(id: string) {
        try {
            const student = await this.databaseService.student.findUnique({
                where: { id },
            })

            if (!student) {
                throw new NotFoundException('Student not found')
            }

            return student
        } catch (error) {
            throw new InternalServerErrorException(`${error.message}`)
        }
    }

    async getStudentByTeacherId(id: string, page: number = 1) {
        const pageSize = 10
        const skip = (page - 1) * pageSize

        try {
            const [items, total] = await Promise.all([
                this.databaseService.student.findMany({
                    skip,
                    take: pageSize,
                    where: { teacherId: id },
                    orderBy: {
                        id: 'asc',
                    },
                }),
                this.databaseService.student.count(),
            ])
            if (!items) {
                throw new NotFoundException('Students not found')
            }
            return {
                data: items,
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total / pageSize),
            }
        } catch (error) {
            throw new InternalServerErrorException(`${error.message}`)
        }
    }

    async giveStudentFullAccess(id: string) {
        try {
            const student = await this.databaseService.student.findUnique({
                where: { id },
            })

            if (!student) {
                throw new NotFoundException('student not found')
            }

            const viewAccess = student?.viewAccess

            const updateStudent = await this.databaseService.student.update({
                where: { id },
                data: {
                    viewAccess: !viewAccess,
                },
            })

            return updateStudent
        } catch (error) {
            throw new InternalServerErrorException(`${error.message}`)
        }
    }

    async create(createStudentDto: createStudentDto) {
        try {
            const existTeacher = await this.databaseService.teacher.findUnique({
                where: { id: createStudentDto.teacherId },
            })

            if (!existTeacher) {
                throw new NotFoundException('teacher not found')
            }

            const hashedPassword = await bcrypt.hash(
                createStudentDto.password,
                10
            )

            const user = await this.databaseService.student.create({
                data: {
                    ...createStudentDto,
                    password: hashedPassword,
                    subject: existTeacher.subject,
                },
            })

            const token = await this.generateToken(user)

            return {
                accessToken: token,
                user: {
                    id: user.id,
                    email: user.email,
                    status: user.status,
                    subject: user.subject,
                },
            }
        } catch (error) {
            throw new InternalServerErrorException(
                `Failed to create user: ${error.message}`
            )
        }
    }

    async generateToken(user: any) {
        return {
            access_token: this.jwtService.sign({
                id: user.id,
                email: user.email,
            }),
        }
    }

    async updateStudent(id: string, updateStudentDto: UpdateStudentDto) {
        try {
            const user = await this.databaseService.student.findUnique({
                where: { id },
            })

            if (!user) {
                throw new NotFoundException('Student not found')
            }

            return await this.databaseService.student.update({
                where: { id },
                data: updateStudentDto,
            })
        } catch (error) {
            throw new InternalServerErrorException(
                `Failed to update user: ${error.message}`
            )
        }
    }

    async delete(id: string) {
        try {
            const user = await this.databaseService.student.findUnique({
                where: { id },
            })

            if (!user) {
                throw new NotFoundException('Student not found')
            }

            return await this.databaseService.student.delete({
                where: { id },
            })
        } catch (error) {
            throw new InternalServerErrorException(
                `Failed to delete user: ${error.message}`
            )
        }
    }
}
