import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { TopicService } from './topic.service'
import { CreateTopicDto } from './dto/createTopicDto'
import { UpdateTopicDto } from './dto/UpdateTopicDto'

@Controller('topic')
export class TopicController {
    constructor(private readonly topicService: TopicService) {}

    @Get()
    detAAllTopics() {
        return this.topicService.getAllTopics()
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
}
