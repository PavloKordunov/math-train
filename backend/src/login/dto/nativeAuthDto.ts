import { IsEmail, IsString, MinLength } from "class-validator";

export class NativeAuthDto {
    @IsEmail({}, {message: "Invalid Email format"})
    email: string;

    @IsString()
    @MinLength(6, {message: "Password must be at least 6 characters"})
    password: string
}