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
import { TeacherService } from './teacher.service'
import { createTeacherDto } from './dto/createTeacherDto'
import { UpdateTeacherDto } from './dto/updateTeacherDto'

@Controller('teacher')
export class TeacherController {
    constructor(private readonly teacherServise: TeacherService) {}

    @Get()
    getAllTeachers(@Query('page') page: string) {
        return this.teacherServise.getAllTeachers(Number(page))
    }

    @Get(':id')
    getTeacherById(@Param('id') id: string) {
        return this.teacherServise.getTeacherById(id)
    }

    @Get('main/:id')
    getTeacherMainById(@Param('id') id: string) {
        return this.teacherServise.getTeacherMainById(id)
    }

    @Post('register')
    register(@Body() createTeacherDto: createTeacherDto) {
        return this.teacherServise.register(createTeacherDto)
    }

    @Patch(':email')
    updateTeacher(
        @Body() updateTeacherDto: UpdateTeacherDto,
        @Param('email') email: string
    ) {
        return this.teacherServise.updateTeacher(updateTeacherDto, email)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.teacherServise.delete(id)
    }
}
