import { PartialType } from '@nestjs/mapped-types'
import { createStudentDto } from './CreateStudentDto'

export class UpdateStudentDto extends PartialType(createStudentDto) {}
