import { IsArray, IsOptional, IsString } from 'class-validator'

export class GenerateTestDto {
    @IsString()
    title: string

    @IsString()
    subject: string

    @IsString()
    dificulty: string

    @IsOptional()
    additional?: string
}
