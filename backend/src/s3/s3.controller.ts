import {
    Body,
    Controller,
    Delete,
    Post,
    Query,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common'
import { S3Service } from './s3.service'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('upload')
export class S3Controller {
    constructor(private readonly s3Service: S3Service) {}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadfile(@UploadedFile() file: Express.Multer.File) {
        return this.s3Service.uploadFile(file)
    }

    @Delete('url')
    async deleteByUrl(@Query('url') url: string) {
        return this.s3Service.deleteFileByUrl(url)
    }

    @Delete('urls')
    async deleteManyUrls(@Body('urls') urls: string[]) {
        return this.s3Service.deleteManyUrls(urls)
    }
}
