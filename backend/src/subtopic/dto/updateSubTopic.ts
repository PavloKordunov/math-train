import { PartialType } from '@nestjs/mapped-types'
import { CreateSubtopicDto } from './subtopicDto'

export class UpdateSubTopicDto extends PartialType(CreateSubtopicDto) {}
