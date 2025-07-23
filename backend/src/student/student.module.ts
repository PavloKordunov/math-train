import { Module } from '@nestjs/common'
import { StudentService } from './student.service'
import { StudentController } from './student.controller'
import { DatabaseService } from 'src/database/database.service'
import { JwtModule } from '@nestjs/jwt'
import { PerfomenceService } from 'src/perfomence/perfomence.service'
import { TestService } from 'src/test/test.service'

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { algorithm: 'HS256', expiresIn: '1d' },
        }),
    ],
    providers: [StudentService, DatabaseService, TestService, PerfomenceService],
    controllers: [StudentController],
})
export class StudentModule {}
