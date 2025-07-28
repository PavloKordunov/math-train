import {
    Body,
    Controller,
    DefaultValuePipe,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
} from '@nestjs/common'
import { TestService } from './test.service'
import { CreateTestDto } from './dto/createTestDto'
import { CompareAnswersDto } from './dto/compareAnswerc'
import { UpdateTestDto } from './dto/updateTestDto'

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) {}

    @Get()
    getAllTests(@Query('page') page: string) {
        return this.testService.getAllTests(Number(page))
    }

    @Get('topic')
    getAllTopicTest(@Query('page') page: string) {
        return this.testService.getAllTopicTests(Number(page))
    }

    @Get('topic/:topicId')
    getTopicTest(
        @Param('topicId') topicId: string,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: string
    ) {
        return this.testService.getTopicTest(topicId, Number(page))
    }

    @Get('task/:id')
    getTestTask(@Param('id') id: string, @Query('page') page: string) {
        return this.testService.getTestTask(id, Number(page))
    }

    @Get('teacher/:id')
    getAllTestByTeacher(@Param('id') id: string, @Query('page') page: string) {
        return this.testService.getAllTestByTeacher(id, Number(page))
    }

    @Get('assign/student/:id')
    getAssignedTestByStudent(
        @Param('id') id: string,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: string
    ) {
        return this.testService.getAssignedTestByStudent(id, Number(page))
    }

    @Get('assign/group/:id')
    getAssignedTestByGroup(
        @Param('id') id: string,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: string
    ) {
        return this.testService.getAssignedTestByGroup(id, Number(page))
    }

    @Get('assign/teacher/:id')
    getAssignedTestByTeacher(
        @Param('id') id: string,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: string
    ) {
        return this.testService.getAssignedTestByTeacher(id, Number(page))
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

    @Post(':id/group/assign')
    assignGroupTests(
        @Param('id') id: string,
        @Body() dto: { students: any[]; endTime: string }
    ) {
        return this.testService.assignGroupTests(id, dto.students, dto.endTime)
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
