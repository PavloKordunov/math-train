import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from 'src/database/database.service';
import { createStudentDto } from './dto/CreateStudentDto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class StudentService {
    constructor(private readonly databaseService: DatabaseService, private jwtService: JwtService) {}

    async findAllStudents() {
        return this.databaseService.student.findMany()
    }

    async findStudentById(id: string){
        try {
            const student = await this.databaseService.student.findUnique({
                where: {id}
            })   

            if(!student){
                throw new NotFoundException('Student not found')
            }

            return student
        } catch (error) {
            throw new InternalServerErrorException(`${error.message}`);
        }
    }

    async create(createStudentDto: createStudentDto) {
        try {
            const existingUser = await this.databaseService.student.findUnique({
                where: {email: createStudentDto.email}
            })   

            if(existingUser){
                throw new ConflictException('Email is already in use')
            }

            const hashedPassword = await bcrypt.hash(createStudentDto.password, 10)

            const user = await this.databaseService.student.create({
                data: {... createStudentDto, password: hashedPassword}
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

        } catch (error) {
            throw new InternalServerErrorException(`Failed to create user: ${error.message}`);
        }
    }

    async generateToken(user: any) {
        return {access_token : this.jwtService.sign({ id: user.id, email: user.email})}
    }
}
