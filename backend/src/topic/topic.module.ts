import { Module } from '@nestjs/common'
import { TopicService } from './topic.service'
import { TopicController } from './topic.controller'
import { DatabaseService } from 'src/database/database.service'

@Module({
    providers: [TopicService, DatabaseService],
    controllers: [TopicController],
})
export class TopicModule {}
