import { Controller, Get, Query, Res, Post, Body } from '@nestjs/common'
import { LiqpayService } from './liqpay.service'

@Controller('liqpay')
export class LiqpayController {
    constructor(private readonly liqpayService: LiqpayService) {}

    @Get('pay')
    pay(
        @Res() res,
        @Query('orderId') orderId: string,
        @Query('amount') amount: string,
        @Query('description') description: string
    ) {
        if (!orderId || !amount || !description) {
            return res.status(400).send('Missing required parameters')
        }

        const html = this.liqpayService.generatePaymentForm(
            orderId,
            Number(amount),
            description
        )
        res.type('html').send(html)
    }

    @Post('callback')
    callback(@Body() body, @Res() res) {
        const { data, signature } = body
        const isValid = this.liqpayService.verifyCallback(data, signature)

        if (isValid) {
            const decoded = this.liqpayService.decodeData(data)
            console.log('Статус платежу:', decoded.status)

            // Тут оновлюй статус замовлення/підписки в базі
            // наприклад:
            // if (decoded.status === 'success') { ... }
        } else {
            console.warn('Некоректний підпис LiqPay')
        }

        res.sendStatus(200)
    }
}
