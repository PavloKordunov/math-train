import { IsArray, IsOptional, IsString } from 'class-validator'

export class CreateGroupDto {
    @IsString()
    title: string

    @IsString()
    teacherId: string

    @IsOptional()
    @IsArray()
    students?: string[]
}
