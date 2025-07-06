import { IsString, IsNotEmpty, Length } from 'class-validator'

export class CreateTopicDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    name: string

    @IsString()
    @IsNotEmpty()
    adminId

    @IsString()
    @IsNotEmpty()
    number

    @IsString()
    @IsNotEmpty()
    subjectType
}
