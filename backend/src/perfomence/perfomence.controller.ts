import { Controller, Delete, Get, Param, Query } from '@nestjs/common'
import { PerfomenceService } from './perfomence.service'

@Controller('perfomence')
export class PerfomenceController {
    constructor(private readonly perfomenceService: PerfomenceService) {}

    @Get('student')
    getAllStudentPerfomence(@Query('page') page: string = '1') {
        return this.perfomenceService.getAllStudentPerfomence(Number(page))
    }

    @Get('one/student/:id')
    getAllStudentPerfomenceById(
        @Param('id') id: string,
        @Query('page') page: string = '1'
    ) {
        return this.perfomenceService.getAllStudentPerfomenceById(
            id,
            Number(page)
        )
    }

    @Get('group/:id')
    getAllStudentPerfomenceByGroup(
        @Param('id') id: string,
        @Query('page') page: string = '1'
    ) {
        return this.perfomenceService.getAllStudentPerfomenceByGroup(
            id,
            Number(page)
        )
    }

    @Get('student/:id')
    getTestReview(@Param('id') id: string) {
        return this.perfomenceService.getTestReview(id)
    }

    @Delete(':id')
    deletePerfomence(@Param('id') id: string) {
        return this.perfomenceService.deletePerfomence(id)
    }
}
