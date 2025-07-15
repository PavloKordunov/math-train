import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { StudentService } from './student.service'
import { createStudentDto } from './dto/CreateStudentDto'

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    findAllStudents() {
        return this.studentService.findAllStudents()
    }

    @Get(':id')
    findStudentById(@Param('id') id: string) {
        return this.studentService.findStudentById(id)
    }

    @Get('teacher/:id')
    getStudentByTeacherId(@Param('id') id: string) {
        return this.studentService.getStudentByTeacherId(id)
    }

    @Post('access/:id')
    giveStudentFullAccess(@Param('id') id: string) {
        return this.studentService.giveStudentFullAccess(id)
    }

    @Post('register')
    create(@Body() createStudentDto: createStudentDto) {
        return this.studentService.create(createStudentDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.studentService.delete(id)
    }
}
