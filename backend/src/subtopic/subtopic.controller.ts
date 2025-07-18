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
import { SubtopicService } from './subtopic.service'
import { CreateSubtopicDto } from './dto/subtopicDto'
import { UpdateSubTopicDto } from './dto/updateSubTopic'

@Controller('subtopic')
export class SubtopicController {
    constructor(private readonly subtopicService: SubtopicService) {}

    @Get(':topicId')
    getSubTopicByTopicId(
        @Param('topicId') topicId: string,
        @Query('page') page: string
    ) {
        return this.subtopicService.getSubTopicByTopicId(topicId, Number(page))
    }

    @Post()
    createSubtopic(@Body() createSubtopicDto: CreateSubtopicDto) {
        return this.subtopicService.createSubtopic(createSubtopicDto)
    }

    @Patch(':id')
    updateSubTOpic(
        @Param('id') id: string,
        @Body() updateSubTopicDto: UpdateSubTopicDto
    ) {
        return this.subtopicService.updateSubTopic(id, updateSubTopicDto)
    }

    @Delete(':id')
    deleteSubTopic(@Param('id') id: string) {
        return this.subtopicService.deleteSubTopic(id)
    }
}
