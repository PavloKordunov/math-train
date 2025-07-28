import {
    Controller,
    Get,
    Post,
    Patch,
    Param,
    Body,
    Delete,
} from '@nestjs/common'
import { ScheduleService } from './schedule.service'
import { CreateScheduleDto } from './dto/CreateScheduleDto'
import { UpdateScheduleExceptionDto } from './dto/UpdateScheduleExceptionDto'
import { UpdateScheduleDto } from './dto/UpdateScheduleDto'

@Controller('schedule')
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService) {}

    @Get()
    getAll() {
        return this.scheduleService.getAll()
    }

    @Get(':id')
    getScheduleByTeacherId(@Param('id') id: string) {
        return this.scheduleService.getScheduleByTeacherId(id)
    }

    @Post()
    createSchedule(@Body() createScheduleDto: CreateScheduleDto) {
        return this.scheduleService.createSchedule(createScheduleDto)
    }

    @Patch(':id')
    updateSchedule(
        @Param('id') id: string,
        @Body() updateScheduleDto: UpdateScheduleDto
    ) {
        return this.scheduleService.updateSchedule(id, updateScheduleDto)
    }

    @Patch(':id/exception')
    addException(
        @Param('id') id: string,
        @Body() exceptionDto: UpdateScheduleExceptionDto
    ) {
        return this.scheduleService.addException(id, exceptionDto)
    }

    @Delete(':id')
    deleteSchedule(@Param('id') id: string) {
        return this.scheduleService.deleteSchedule(id)
    }
}
