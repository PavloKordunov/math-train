import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { createTeacherDto } from './dto/createTeacherDto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class TeacherService {
    constructor(private readonly databaseServise: DatabaseService, private jwtService: JwtService) {}

    async register(createTeacherDto: createTeacherDto) {
        const existingUser = await this.databaseServise.teacher.findUnique({
            where: {email: createTeacherDto.email}
        })

        if(existingUser){
            throw new ConflictException('Email is already in use')
        }

        const hashedPassword = await bcrypt.hash(createTeacherDto.password, 10)

        const user = await this.databaseServise.teacher.create({
            data: {... createTeacherDto, password: hashedPassword}
        })

        const token = await this.generateToken(user)

        return {
            accessToken: token, 
            user: {
                id: user.id,
                email: user.email,
                status: user.status,
              }
        } 
    }

    async delete(id: string) {
        try {
            const user = await this.databaseServise.teacher.findUnique({
                where: { id }
            })

            if (!user) {
                throw new NotFoundException("User not found");
            }

            return await this.databaseServise.teacher.delete({
                where: { id }
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async generateToken(user: any) {
        return {access_token : this.jwtService.sign({ id: user.id, email: user.email})}
    }
}
