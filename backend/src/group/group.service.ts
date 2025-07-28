import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common'
import { DatabaseService } from 'src/database/database.service'
import { CreateGroupDto } from './dto/CreateGroupDto'
import { UpdateGroupDto } from './dto/UpdateGroupDto'

@Injectable()
export class GroupService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getAll(page: number = 1) {
        const pageSize = 10
        const skip = (page - 1) * pageSize

        try {
            const [items, total] = await Promise.all([
                this.databaseService.group.findMany(),
                this.databaseService.group.count(),
            ])

            return {
                data: items,
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total / pageSize),
            }
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async getGroupByTeacherId(id: string, page: number = 1) {
        const pageSize = 10
        const skip = (page - 1) * pageSize

        try {
            const [items, total] = await Promise.all([
                this.databaseService.group.findMany({
                    skip: skip,
                    where: { teacherId: id },
                    include: {
                        students: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                            },
                        },
                    },
                }),
                this.databaseService.group.count(),
            ])

            return {
                data: items,
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total / pageSize),
            }
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async getGroupById(id: string) {
        try {
            return await this.databaseService.group.findUnique({
                where: { id },
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async createGroup(createGroupDto: CreateGroupDto) {
        try {
            const teacher = await this.databaseService.teacher.findUnique({
                where: { id: createGroupDto.teacherId },
            })

            if (!teacher) {
                throw new NotFoundException('Teacher not found')
            }

            const data: any = {
                title: createGroupDto.title,
                teacher: {
                    connect: { id: createGroupDto.teacherId },
                },
            }

            if (createGroupDto.students && createGroupDto.students.length > 0) {
                data.students = {
                    connect: createGroupDto.students.map((id) => ({ id })),
                }
            }

            return await this.databaseService.group.create({
                data,
                include: {
                    students: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                        },
                    },
                },
            })
        } catch (error) {
            console.error('Error creating group:', error)
            throw new InternalServerErrorException(
                error.message || 'Failed to create group'
            )
        }
    }

    async updateGroup(updateGroupDto: UpdateGroupDto, id: string) {
        try {
            const group = await this.databaseService.group.findUnique({
                where: { id },
                include: { students: true },
            })

            if (!group) {
                throw new NotFoundException('Group not found')
            }

            const { teacherId, students, ...rest } = updateGroupDto
            const data: any = { ...rest }

            if (teacherId) {
                data.teacher = { connect: { id: teacherId } }
            }

            if (students) {
                const disconnectOperations = group.students.map((student) => ({
                    id: student.id,
                }))

                data.students = {
                    disconnect: disconnectOperations,
                    connect: students.map((id) => ({ id })),
                }
            }

            return await this.databaseService.group.update({
                where: { id },
                data,
                include: {
                    students: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                        },
                    },
                },
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async deleteGroup(id: string) {
        try {
            const group = await this.databaseService.group.findUnique({
                where: { id },
            })

            if (!group) {
                throw new NotFoundException('Group not found')
            }

            return await this.databaseService.group.delete({
                where: { id },
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }
}
