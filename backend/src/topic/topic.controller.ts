import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common'
import { TopicService } from './topic.service'
import { CreateTopicDto } from './dto/createTopicDto'
import { UpdateTopicDto } from './dto/UpdateTopicDto'

@Controller('topic')
export class TopicController {
    constructor(private readonly topicService: TopicService) {}

    @Get()
    getAllTopics() {
        return this.topicService.getAllTopics()
    }

    @Get(':subject')
    getAllTopicsBySubject(@Param('subject') subject: string) {
        return this.topicService.getAllTopicsBySubject(subject)
    }

    @Post()
    createTopic(@Body() createTopicDto: CreateTopicDto) {
        return this.topicService.createTopic(createTopicDto)
    }

    @Patch(':id')
    updateTopic(
        @Param('id') id: string,
        @Body() updateTopicDto: UpdateTopicDto
    ) {
        return this.topicService.updateTopic(updateTopicDto, id)
    }

    @Delete(':id')
    deleteTopic(@Param('id') id: string) {
        return this.topicService.deleteTopic(id)
    }
}
