import { IsEmail } from "class-validator";

export class OAuthDto {
    @IsEmail({}, {message: "Invalid Email format"})
    email: string;
}