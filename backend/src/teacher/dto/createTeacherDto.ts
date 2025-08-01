import {
    IsEmail,
    IsOptional,
    IsPhoneNumber,
    IsString,
    MinLength,
} from 'class-validator'

export class createTeacherDto {
    @IsEmail({}, { message: 'Invalid Email format' })
    email: string

    @IsPhoneNumber()
    phone: string

    @IsString()
    @IsOptional()
    name: string

    @IsOptional()
    plan: string

    @IsOptional()
    subscriptionTime: string

    @IsOptional()
    subject: any

    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters' })
    password: string
}
