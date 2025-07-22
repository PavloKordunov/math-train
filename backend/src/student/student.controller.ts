import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Query,
    Patch,
} from '@nestjs/common'
import { StudentService } from './student.service'
import { createStudentDto } from './dto/CreateStudentDto'
import { UpdateStudentDto } from './dto/UpdateStudentDto'
import { TestService } from 'src/test/test.service'
import { PerfomenceService } from 'src/perfomence/perfomence.service'

@Controller('student')
export class StudentController {
    constructor(
        private readonly studentService: StudentService,
        private readonly testService: TestService,
        private readonly perfomenceService: PerfomenceService
    ) {}

    @Get()
    findAllStudents(@Query('page') page: string = '1') {
        return this.studentService.findAllStudents(Number(page))
    }

    @Get(':id')
    findStudentById(@Param('id') id: string) {
        return this.studentService.findStudentById(id)
    }

    @Get('teacher/:id')
    getStudentByTeacherId(
        @Param('id') id: string,
        @Query('page') page: string = '1'
    ) {
        return this.studentService.getStudentByTeacherId(id, Number(page))
    }

    @Get(':id/status')
    async getStatus(@Param('id') id: string) {
        const isOnline = await this.studentService.isUserOnline(id)
        const lastActivity = await this.studentService.getLastActivity(id)

        return { isOnline, lastActivity }
    }

    @Get('card/:id')
    async getStudentCard(@Param('id') id: string){
        const studentPerfomence = await this.perfomenceService.getAllStudentPerfomenceById(id)
        const isOnline = await this.studentService.isUserOnline(id)
        const lastActivity = await this.studentService.getLastActivity(id)
        const assignedTest = await this.testService.getAssignedTestByStudent(id)

        return {
            isOnline,
            lastActivity,
            studentPerfomence,
            assignedTest
        }

    }

    @Post(':id/ping')
    async ping(@Param('id') id: string) {
        await this.studentService.updateLastActivity(id)
        return { success: true }
    }

    @Post('access/:id')
    giveStudentFullAccess(@Param('id') id: string) {
        return this.studentService.giveStudentFullAccess(id)
    }

    @Post('register')
    create(@Body() createStudentDto: createStudentDto) {
        return this.studentService.create(createStudentDto)
    }

    @Patch(':id')
    updateStudent(
        @Param('id') id: string,
        @Body() updateStudentDto: UpdateStudentDto
    ) {
        return this.studentService.updateStudent(id, updateStudentDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.studentService.delete(id)
    }
}
