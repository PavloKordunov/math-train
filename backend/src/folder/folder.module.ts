import { Module } from '@nestjs/common'
import { FolderService } from './folder.service'
import { FolderController } from './folder.controller'
import { DatabaseService } from 'src/database/database.service'

@Module({
    providers: [FolderService, DatabaseService],
    controllers: [FolderController],
})
export class FolderModule {}
