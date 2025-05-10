import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { createStudentDto } from './dto/CreateStudentDto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService ) {}

    @Get()
    findAllStudents() {
        return this.studentService.findAllStudents()
    }

    @Post('register')
    create(@Body() createStudentDto: createStudentDto) {
        return this.studentService.create(createStudentDto)
    }
}
