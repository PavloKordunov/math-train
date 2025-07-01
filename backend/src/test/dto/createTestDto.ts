import { IsArray, IsDateString, IsInt, IsString } from 'class-validator';
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
  tasks: CreateTaskDto[];
}
