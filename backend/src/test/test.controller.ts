import { Body, Controller, Get, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/createTestDto';

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) {}

    @Get()
    getAllTests(){
        return this.testService.getAllTests()
    }

    @Post() 
    createTest(@Body() createTestDto: CreateTestDto) {
        return this.testService.createTest(createTestDto)
    }
}
