import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { OAuthDto } from './dto/OAuthDto';
import { NativeAuthDto } from './dto/nativeAuthDto';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Post('oauth')
    oauth(@Body() oAuthDto: OAuthDto){
        return this.loginService.oauth(oAuthDto.email)
    }

    @Post('native')
    native(@Body() nativeAuthDto: NativeAuthDto){
        return this.loginService.native(nativeAuthDto)
    }
}
