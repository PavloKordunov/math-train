import { Module } from '@nestjs/common';
import { LiqpayService } from './liqpay.service';
import { LiqpayController } from './liqpay.controller';

@Module({
  providers: [LiqpayService],
  controllers: [LiqpayController]
})
export class LiqpayModule {}
