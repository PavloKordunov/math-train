import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common'
import { TestService } from './test.service'
import { CreateTestDto } from './dto/createTestDto'
import { CompareAnswersDto } from './dto/compareAnswerc'
import { UpdateTestDto } from './dto/updateTestDto'

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) {}

    @Get()
    getAllTests() {
        return this.testService.getAllTests()
    }

    @Get('topic/:topicId')
    getTopicTest(@Param('topicId') topicId: string) {
        return this.testService.getTopicTest(topicId)
    }

    @Get('task/:id')
    getTestTask(@Param('id') id: string) {
        return this.testService.getTestTask(id)
    }

    @Get('teacher/:id')
    getAllTestByTeacher(@Param('id') id: string) {
        return this.testService.getAllTestByTeacher(id)
    }

    @Get('assign/:id')
    getAssignedTest(@Param('id') id: string) {
        return this.testService.getAssignedTest(id)
    }

    @Post()
    createTest(@Body() createTestDto: CreateTestDto) {
        return this.testService.createTest(createTestDto)
    }

    @Post(':id/assign')
    assignTest(
        @Param('id') id: string,
        @Body() dto: { studentId: string; endTime: string }
    ) {
        return this.testService.assign(id, dto.studentId, dto.endTime)
    }

    @Post(':id/check/:userId')
    compareAnswers(
        @Param('id') id: string,
        @Param('userId') userId: string,
        @Body() comapareAnswersDto: CompareAnswersDto[]
    ) {
        return this.testService.compareAnswers(id, userId, comapareAnswersDto)
    }

    @Patch(':id')
    updateTest(@Param('id') id: string, @Body() updaeteTestDto: UpdateTestDto) {
        return this.testService.updateTest(id, updaeteTestDto)
    }

    @Delete(':id')
    deleteTest(@Param('id') id: string) {
        return this.testService.deleteTest(id)
    }

    @Get(':id')
    getTestId(@Param('id') id: string) {
        return this.testService.getTestId(id)
    }
}
