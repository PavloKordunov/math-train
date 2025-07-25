import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './database/database.module'
import { TeacherModule } from './teacher/teacher.module'
import { LoginModule } from './login/login.module'
import { StudentModule } from './student/student.module'
import { TestModule } from './test/test.module'
import { PerfomenceModule } from './perfomence/perfomence.module'
import { AdminModule } from './admin/admin.module'
import { TopicModule } from './topic/topic.module'
import { SubtopicModule } from './subtopic/subtopic.module'
import { S3Module } from './s3/s3.module'
import { LiqpayModule } from './liqpay/liqpay.module'
import { ScheduleModule } from './schedule/schedule.module'

@Module({
    imports: [
        DatabaseModule,
        TeacherModule,
        LoginModule,
        StudentModule,
        TestModule,
        PerfomenceModule,
        AdminModule,
        TopicModule,
        SubtopicModule,
        S3Module,
        LiqpayModule,
        ScheduleModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
