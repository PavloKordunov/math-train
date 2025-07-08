import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common'
import { DatabaseService } from 'src/database/database.service'
import { CreateSubtopicDto } from './dto/subtopicDto'
import { UpdateSubTopicDto } from './dto/updateSubTopic'

@Injectable()
export class SubtopicService {
    constructor(private readonly databaseService: DatabaseService) {}

    async createSubtopic(createSubtopicDto: CreateSubtopicDto) {
        try {
            const topicExists = await this.databaseService.topic.findUnique({
                where: { id: createSubtopicDto.topicId },
            })

            if (!topicExists) {
                throw new NotFoundException('Topic not found')
            }

            return await this.databaseService.subTopic.create({
                data: {
                    name: createSubtopicDto.name,
                    topicId: createSubtopicDto.topicId,
                    number: createSubtopicDto.number,
                },
            })
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error
            }
            console.error('Failed to create SubTopic:', error)
            throw new InternalServerErrorException('Failed to create SubTopic')
        }
    }

    async getSubTopicByTopicId(topicId: string) {
        try {
            return await this.databaseService.subTopic.findMany({
                where: { topicId },
            })
        } catch (error) {
            throw new InternalServerErrorException('Failed to get SubTopic')
        }
    }

    async updateSubTopic(id: string, updateSubTopicDto: UpdateSubTopicDto) {
        try {
            const subtopic = await this.databaseService.subTopic.findUnique({
                where: { id },
            })

            if (!subtopic) {
                throw new NotFoundException('Topic not found')
            }

            return await this.databaseService.subTopic.update({
                where: { id },
                data: updateSubTopicDto,
            })
        } catch (error) {
            throw new InternalServerErrorException('Failed to update SubTopic')
        }
    }

    async deleteSubTopic(id: string) {
        try {
            const subtopic = await this.databaseService.subTopic.findUnique({
                where: { id },
            })

            if (!subtopic) {
                throw new NotFoundException('Topic not found')
            }

            await this.databaseService.test.deleteMany({
                where: { subTopicId: id },
            })

            return await this.databaseService.subTopic.delete({
                where: { id },
            })
        } catch (error) {
            throw new InternalServerErrorException('Failed to update SubTopic')
        }
    }
}
