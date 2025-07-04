import { PartialType } from '@nestjs/mapped-types'
import { CreateTopicDto } from './createTopicDto'

export class UpdateTopicDto extends PartialType(CreateTopicDto) {}
