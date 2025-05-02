import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TeacherModule } from './teacher/teacher.module';
import { LoginModule } from './login/login.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [DatabaseModule, TeacherModule, LoginModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
