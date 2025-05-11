import { IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  answers?: string[];

  @IsOptional()
  pairs?: string[];

  @IsOptional()
  @IsString()
  number?: string;
}
