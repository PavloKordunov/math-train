import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { DatabaseService } from 'src/database/database.service';
import { OAuthDto } from './dto/OAuthDto';
import { NativeAuthDto } from './dto/nativeAuthDto';

@Injectable()
export class LoginService {
    constructor(private readonly databaseService: DatabaseService, private jwtService: JwtService ) {}

    async oauth(email: string) {
        try {
            let user = await this.databaseService.teacher.findUnique({
                where: { email }
            });
            let role: 'teacher' | 'student' | null = null;
        
            if (user) {
                role = 'teacher';
            } else {
                user = await this.databaseService.student.findUnique({
                    where: { email }
                });
                if (user) {
                    role = 'student';
                }
            }
        
            if (!user) {
                throw new UnauthorizedException('User not found');
            }

            const token = await this.generateToken(user)

            return {
                accessToken: token,
                user: {
                  id: user.id,
                  email: user.email,
                  status: user.status,
                  name: user.name,
                }
            }

        } catch (error) {
            throw new InternalServerErrorException(`Failed to login: ${error.message}`);
        }
    }

    async native(nativeAuthDto: NativeAuthDto){
        try {
            let user = await this.databaseService.teacher.findUnique({
                where: { email: nativeAuthDto.email }
            });
            let role: 'teacher' | 'student' | null = null;
        
            if (user) {
                role = 'teacher';
            } else {
                user = await this.databaseService.student.findUnique({
                    where: { email: nativeAuthDto.email }
                });
                if (user) {
                    role = 'student';
                }
            }
    
            if (!user) {
                throw new UnauthorizedException('User not found');
            }
    
            const isValidPassword = await bcrypt.compare(nativeAuthDto.password, user?.password)
    
            if(!isValidPassword){
                throw new UnauthorizedException('Invalid credentials');
            }
        
            const token = await this.generateToken(user)
    
            return {
                accessToken: token,
                user: {
                  id: user.id,
                  email: user.email,
                  name: user.name,
                  status: user.status,
                }
            }
        } catch (error) {
            throw new InternalServerErrorException(`Failed to login: ${error.message}`);
        }
    }

    async generateToken(user: any) {
        return {access_token : this.jwtService.sign({ id: user.id, email: user.email})}
    }
}
