import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateTaskDto } from './createTaskDto';

export class CreateTestDto {
  @IsString()
  title: string;

  @IsInt()
  timeLimit: number;

  @IsString()
  description: string; 

  @IsDateString()
  startTime: string; 

  @IsDateString()
  endTime: string;

  @IsString()
  teacherId: string;

  @IsArray()
//   @ValidateNested({ each: true })
//   @Type(() => CreateTaskDto)
  tasks: CreateTaskDto[];
}
