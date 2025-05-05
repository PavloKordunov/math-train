import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/createTestDto';

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) {}

    @Get()
    getAllTests() {
        return this.testService.getAllTests();
    }

    @Get('task/:id') 
    getTestTask(@Param('id') id: string) {
        return this.testService.getTestTask(id);
    }

    @Get('teacher/:id')
    getAllTestByTeacher(@Param('id') id: string) {
        return this.testService.getAllTestByTeacher(id);
    }

    @Post()
    createTest(@Body() createTestDto: CreateTestDto) {
        return this.testService.createTest(createTestDto);
    }

    @Post(':id/assign')
    assignTest(@Param('id') id: string, @Body() dto: { studentId: string }) {
        return this.testService.assign(id, dto.studentId);
    }

    @Get(':id')
    getTestId(@Param('id') id: string) {
        return this.testService.getTestId(id);
    }

    @Delete(':id')
    deleteTest(@Param('id') id: string) {
        return this.testService.deleteTest(id);
    }
}
