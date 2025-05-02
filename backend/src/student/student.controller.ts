import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { createStudentDto } from './dto/CreateStudentDto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService ) {}

    @Post('register')
    create(@Body() createStudentDto: createStudentDto) {
        return this.studentService.create(createStudentDto)
    }
}
