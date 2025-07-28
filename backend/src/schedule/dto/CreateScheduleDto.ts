import { IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateScheduleDto {
    @IsString()
    title: string

    @IsString()
    teacherId: string

    @IsNumber()
    dayOfWeek: number

    @IsNumber()
    hours: number

    @IsNumber()
    minutes: number

    @IsNumber()
    duration: number

    @IsOptional()
    weeks: number
}
