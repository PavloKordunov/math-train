import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common'
import { TopicService } from './topic.service'
import { CreateTopicDto } from './dto/createTopicDto'
import { UpdateTopicDto } from './dto/UpdateTopicDto'

@Controller('topic')
export class TopicController {
    constructor(private readonly topicService: TopicService) {}

    @Get()
    getAllTopics(
        @Query('page') page: string
    ) {
        return this.topicService.getAllTopics(Number(page))
    }

    @Get(':subject')
    getAllTopicsBySubject(
        @Param('subject') subject: string,
        @Query('page') page: string
    ) {
        return this.topicService.getAllTopicsBySubject(subject, Number(page))
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
