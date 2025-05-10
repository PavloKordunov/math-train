import { Body, Controller, Delete, Get, Param, Post, } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { createTeacherDto } from './dto/createTeacherDto';

@Controller('teacher')
export class TeacherController {
    constructor(private readonly teacherServise: TeacherService) {}

    @Get()
    getAllTeachers(){
        return this.teacherServise.getAllTeachers()
    }

    @Post('register')
    register(@Body() createTeacherDto: createTeacherDto) {
        return this.teacherServise.register(createTeacherDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.teacherServise.delete(id)
    }
}
