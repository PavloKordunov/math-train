import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator'

export class createStudentDto {
    @IsEmail({}, { message: 'Invalid Email format' })
    email: string

    @IsString()
    @IsOptional()
    name: string

    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters' })
    password: string

    @IsString()
    teacherId: string
}
