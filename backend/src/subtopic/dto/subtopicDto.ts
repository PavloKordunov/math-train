import { IsString, IsNotEmpty, IsUUID } from 'class-validator'

export class CreateSubtopicDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsUUID()
    @IsNotEmpty()
    topicId: string

    @IsString()
    @IsNotEmpty()
    number: string
}
