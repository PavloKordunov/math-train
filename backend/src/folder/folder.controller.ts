import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common'
import { FolderService } from './folder.service'

@Controller('folder')
export class FolderController {
    constructor(private readonly folderService: FolderService) {}

    @Get()
    getAllFolders() {
        return this.folderService.getAllFolders()
    }

    @Get(':id')
    getFolderById(@Param('id') id: string) {
        return this.folderService.getFolderById(id)
    }

    @Get('/teacher/:id')
    getAllFoldersByTeacherId(@Param('id') id: string) {
        return this.folderService.getAllFoldersByTeacherId(id)
    }

    @Get('tests/:name/:teacherId')
    getAllTestsFromFolder(
        @Param('name') name: string,
        @Param('teacherId') teacherId: string
    ) {
        return this.folderService.getAllTestsFromFolder(name, teacherId)
    }

    @Post()
    createFolder(@Body() body: { name: string; teacherId: string }) {
        return this.folderService.createFolder(body.name, body.teacherId)
    }

    @Patch(':folderId/test/:testId')
    addTestToFolder(
        @Param('folderId') folderId: string,
        @Param('testId') testId: string
    ) {
        return this.folderService.addTestToFolder(folderId, testId)
    }

    @Patch(':id')
    updateFolder(@Param('id') id: string, @Body('name') name: string) {
        return this.folderService.updateFolder(id, name)
    }

    @Delete(':id')
    deleteFolder(@Param('id') id: string) {
        return this.folderService.deleteFolder(id)
    }
}
