import {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    DeleteObjectCommand,
} from '@aws-sdk/client-s3'
import { Injectable, UploadedFile } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as crypto from 'crypto'
const sharp = require('sharp')

@Injectable()
export class S3Service {
    private s3: S3Client
    private bucketName: string

    constructor(private configService: ConfigService) {
        const bucketName = this.configService.get<string>('AWS_BUCKET_NAME')
        const region = this.configService.get<string>('AWS_BUCKET_REGION')
        const accessKeyId = this.configService.get<string>('AWS_ACCESS_KEY')
        const secretAccessKey = this.configService.get<string>(
            'AWS_SECRET_ACCESS_KEY'
        )

        if (!bucketName || !region || !accessKeyId || !secretAccessKey) {
            throw new Error('Missing AWS S3 configuration')
        }

        this.bucketName = bucketName
        this.s3 = new S3Client({
            region,
            credentials: {
                accessKeyId,
                secretAccessKey,
            },
        })
    }

    private generateFileName(bytes = 32): string {
        return crypto.randomBytes(bytes).toString('hex')
    }

    async uploadFile(file: Express.Multer.File) {
        try {
            const buffer = await sharp(file.buffer)
                .resize({ width: 1080, height: 1920, fit: 'contain' })
                .toBuffer()

            const fileName = this.generateFileName()

            const uploadParams = {
                Bucket: this.bucketName,
                Body: buffer,
                Key: fileName,
                ContentType: file.mimetype,
            }

            await this.s3.send(new PutObjectCommand(uploadParams))

            const command = new GetObjectCommand({
                Bucket: this.bucketName,
                Key: fileName,
            })

            const publicUrl = `https://${this.bucketName}.s3.${this.configService.get(
                'AWS_BUCKET_REGION'
            )}.amazonaws.com/${fileName}`

            return {
                fileName,
                publicUrl,
            }
        } catch (error) {
            console.error('[Upload Error]', error)
            throw error
        }
    }

    async deleteFileByUrl(url: string) {
        try {
            const key = this.extractKeyFromUrl(url)

            await this.s3.send(
                new DeleteObjectCommand({
                    Bucket: this.bucketName,
                    Key: key,
                })
            )

            return { message: 'Deleted successfully', key }
        } catch (error) {
            console.error('[Delete Error]', error)
            throw error
        }
    }

    private extractKeyFromUrl(url: string): string {
        const urlObj = new URL(url)
        return decodeURIComponent(
            urlObj.pathname
                .replace(/^\/+/, '')
                .replace(`${this.bucketName}/`, '')
        )
    }
}
