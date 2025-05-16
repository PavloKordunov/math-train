import { Controller, Delete, Get, Param } from '@nestjs/common';
import { PerfomenceService } from './perfomence.service';

@Controller('perfomence')
export class PerfomenceController {
    constructor(private readonly perfomenceService: PerfomenceService) {}

    @Get('student')
    getAllStudentPerfomence() {
        return this.perfomenceService.getAllStudentPerfomence()
    }

    @Get('student/:id')
    getTestReview(@Param('id') id: string){
        return this.perfomenceService.getTestReview(id)
    }

    @Delete(':id')
    deletePerfomence(@Param('id') id: string){
        return this.perfomenceService.deletePerfomence(id)
    }
}
