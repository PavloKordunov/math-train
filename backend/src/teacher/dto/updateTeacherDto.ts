import { PartialType } from '@nestjs/mapped-types'
import { createTeacherDto } from './createTeacherDto'

export class UpdateTeacherDto extends PartialType(createTeacherDto) {}
