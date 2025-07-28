import { Module } from '@nestjs/common'
import { GroupService } from './group.service'
import { GroupController } from './group.controller'
import { DatabaseService } from 'src/database/database.service'
import { TestService } from 'src/test/test.service'
import { PerfomenceService } from 'src/perfomence/perfomence.service'

@Module({
    providers: [GroupService, DatabaseService, TestService, PerfomenceService],
    controllers: [GroupController],
})
export class GroupModule {}
