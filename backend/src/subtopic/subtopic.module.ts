import { Module } from '@nestjs/common'
import { SubtopicService } from './subtopic.service'
import { SubtopicController } from './subtopic.controller'
import { DatabaseService } from 'src/database/database.service'

@Module({
    providers: [SubtopicService, DatabaseService],
    controllers: [SubtopicController],
})
export class SubtopicModule {}
