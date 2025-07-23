import { Injectable } from '@nestjs/common'
import * as crypto from 'crypto'

@Injectable()
export class LiqpayService {
    private publicKey = process.env.LIQPAY_PUBLIC_KEY
    private privateKey = process.env.LIQPAY_PRIVATE_KEY

    private base64(input: string) {
        return Buffer.from(input).toString('base64')
    }

    private sha1(input: string) {
        return crypto.createHash('sha1').update(input).digest('base64')
    }

    private strToSign(str: string) {
        return this.sha1(str)
    }

    generatePaymentForm(orderId: string, amount: number, description: string) {
        const jsonData = {
            public_key: this.publicKey,
            version: '3',
            action: 'pay',
            amount,
            currency: 'UAH',
            description,
            order_id: orderId,
            sandbox: 1,
        }

        const data = this.base64(JSON.stringify(jsonData))
        const signature = this.strToSign(
            this.privateKey + data + this.privateKey
        )

        return `
      <form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">
        <input type="hidden" name="data" value="${data}" />
        <input type="hidden" name="signature" value="${signature}" />
        <input type="submit" value="Оплатити LiqPay" />
      </form>
    `
    }

    verifyCallback(data: string, signature: string) {
        const validSignature = this.strToSign(
            this.privateKey + data + this.privateKey
        )
        return validSignature === signature
    }

    decodeData(data: string) {
        return JSON.parse(Buffer.from(data, 'base64').toString())
    }
}
