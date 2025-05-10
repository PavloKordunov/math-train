import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  providers: [TestService, DatabaseService],
  controllers: [TestController]
})
export class TestModule {}
