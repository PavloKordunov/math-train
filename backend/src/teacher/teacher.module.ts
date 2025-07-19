import { Module } from '@nestjs/common'
import { TeacherService } from './teacher.service'
import { TeacherController } from './teacher.controller'
import { DatabaseService } from 'src/database/database.service'
import { JwtModule } from '@nestjs/jwt'

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { algorithm: 'HS256', expiresIn: '1d' },
        }),
    ],
    providers: [TeacherService, DatabaseService],
    controllers: [TeacherController],
})
export class TeacherModule {}
