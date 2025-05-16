import { Module } from '@nestjs/common';
import { PerfomenceService } from './perfomence.service';
import { PerfomenceController } from './perfomence.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  providers: [PerfomenceService, DatabaseService],
  controllers: [PerfomenceController]
})
export class PerfomenceModule {}
