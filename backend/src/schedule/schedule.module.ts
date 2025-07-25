import { Module } from '@nestjs/common'
import { ScheduleService } from './schedule.service'
import { ScheduleController } from './schedule.controller'
import { DatabaseService } from 'src/database/database.service'

@Module({
    providers: [ScheduleService, DatabaseService],
    controllers: [ScheduleController],
})
export class ScheduleModule {}
