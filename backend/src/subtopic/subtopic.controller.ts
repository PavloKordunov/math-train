import { Body, Controller, Post } from '@nestjs/common'
import { SubtopicService } from './subtopic.service'
import { CreateSubtopicDto } from './dto/subtopicDto'

@Controller('subtopic')
export class SubtopicController {
    constructor(private readonly subtopicService: SubtopicService) {}

    @Post()
    createSubtopic(@Body() createSubtopicDto: CreateSubtopicDto) {
        return this.subtopicService.createSubtopic(createSubtopicDto)
    }
}
