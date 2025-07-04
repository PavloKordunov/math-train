import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common'
import { DatabaseService } from 'src/database/database.service'
import { CreateSubtopicDto } from './dto/subtopicDto'

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
}
