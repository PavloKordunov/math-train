import { PartialType } from '@nestjs/mapped-types'

import { CreateScheduleDto } from './CreateScheduleDto'

export class UpdateScheduleDto extends PartialType(CreateScheduleDto) {}
