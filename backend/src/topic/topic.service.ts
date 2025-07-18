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

    async getAllTopics(page: number) {
        const pageSize = 10;
        const skip = (page - 1) * pageSize;

        try {
            const [items, total] = await Promise.all([
                this.databaseService.topic.findMany({
                    skip,
                    take: pageSize,
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
                    orderBy:{
                        id: "asc",
                    },
                }),
                this.databaseService.topic.count()
            ]);
            
            return {
                data: items,
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total / pageSize),
            };
        } catch (error) {
            console.error('Failed to get topics:', error)
            throw new InternalServerErrorException('Failed to get topics')
        }
    }

    async getAllTopicsBySubject(subject: string, page: number) {
        const pageSize = 10;
        const skip = (page - 1) * pageSize;
        
        try {
            const [items, total] = await Promise.all([
                this.databaseService.topic.findMany({
                    skip,
                    take: pageSize,
                    where: { subjectType: subject },
                    include: { subTopics: true },
                    orderBy:{
                        id: "asc",
                    },
                }),
                this.databaseService.topic.count({where: { subjectType: subject },})
            ]);
            
            return {
                data: items,
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total / pageSize),
            };
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

    async deleteTopic(id: string) {
        try {
            await this.databaseService.subTopic.deleteMany({
                where: { topicId: id },
            })

            await this.databaseService.test.deleteMany({
                where: { adminID: id },
            })

            const deletedTopic = await this.databaseService.topic.delete({
                where: { id },
            })

            return deletedTopic
        } catch (error) {
            console.error(error)
            throw new InternalServerErrorException('Failed to delete topic')
        }
    }
}
