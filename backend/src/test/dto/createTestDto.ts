import {
    IsArray,
    IsDateString,
    IsInt,
    IsOptional,
    IsString,
} from 'class-validator'
import { CreateTaskDto } from './createTaskDto'

export class CreateTestDto {
    @IsString()
    title: string

    @IsInt()
    timeLimit: number

    @IsString()
    description: string

    @IsDateString()
    startTime: string

    @IsDateString()
    endTime: string

    @IsString()
    teacherId: string

    @IsString()
    adminID: string

    @IsOptional()
    @IsString()
    subTopicId?: string

    @IsArray()
    tasks: CreateTaskDto[]
}
