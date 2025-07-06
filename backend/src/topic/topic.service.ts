import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common'
import { DatabaseService } from 'src/database/database.service'
import { CreateTopicDto } from './dto/createTopicDto'
import { UpdateTopicDto } from './dto/UpdateTopicDto'

@Injectable()
export class TopicService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getAllTopics() {
        try {
            return await this.databaseService.topic.findMany({
                include: {
                    admin: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                        },
                    },
                    subTopics: true,
                },
            })
        } catch (error) {
            console.error('Failed to get topics:', error)
            throw new InternalServerErrorException('Failed to get topics')
        }
    }

    async getAllTopicsBySubject(subject: string) {
        try {
            return await this.databaseService.topic.findMany({
                where: { subjectType: subject },
            })
        } catch (error) {
            throw new InternalServerErrorException('Failed to get topics')
        }
    }

    async createTopic(createTopicDto: CreateTopicDto) {
        try {
            const existAdmin = await this.databaseService.admin.findUnique({
                where: { id: createTopicDto.adminId },
            })

            if (!existAdmin) {
                throw new NotFoundException('Admin not found')
            }

            return await this.databaseService.topic.create({
                data: {
                    name: createTopicDto.name,
                    adminId: createTopicDto.adminId,
                    number: createTopicDto.number,
                    subjectType: createTopicDto.subjectType,
                },
                include: {
                    admin: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            })
        } catch (error) {
            console.error('Failed to create Topic:', error)
            if (error instanceof NotFoundException) {
                throw error
            }
            throw new InternalServerErrorException('Failed to create Topic')
        }
    }

    async updateTopic(updateTopicDto: UpdateTopicDto, id: string) {
        try {
            const topic = await this.databaseService.topic.findUnique({
                where: { id },
            })

            if (!topic) {
                throw new NotFoundException('Topic not found')
            }

            if (updateTopicDto.adminId) {
                const adminExist = await this.databaseService.admin.findUnique({
                    where: { id: updateTopicDto.adminId },
                })

                if (!adminExist) {
                    throw new NotFoundException('Admin not found')
                }
            }

            return await this.databaseService.topic.update({
                where: { id },
                data: updateTopicDto,
                include: {
                    admin: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            })
        } catch (error) {
            console.error('Failed to update topic:', error)
            if (error instanceof NotFoundException) {
                throw error
            }
            throw new InternalServerErrorException('Failed to update topic')
        }
    }
}
