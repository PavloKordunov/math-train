import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common'
import { DatabaseService } from 'src/database/database.service'
import { CreateScheduleDto } from './dto/CreateScheduleDto'
import { UpdateScheduleExceptionDto } from './dto/UpdateScheduleExceptionDto'
import { UpdateScheduleDto } from './dto/UpdateScheduleDto'

@Injectable()
export class ScheduleService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getAll() {
        try {
            return await this.databaseService.schedule.findMany()
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async getScheduleByTeacherId(id: string) {
        try {
            return await this.databaseService.schedule.findMany({
                where: { teacherId: id },
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async createSchedule(createScheduleDto: CreateScheduleDto) {
        try {
            const teacher = await this.databaseService.teacher.findUnique({
                where: { id: createScheduleDto.teacherId },
            })

            if (!teacher) {
                throw new NotFoundException('Teacher not found')
            }

            return this.databaseService.schedule.create({
                data: {
                    ...createScheduleDto,
                    exceptions: {},
                },
            })
        } catch (error) {
            throw new InternalServerErrorException('Server error')
        }
    }
    async updateSchedule(id: string, updateScheduleDto: UpdateScheduleDto) {
        try {
            const existingSchedule =
                await this.databaseService.schedule.findUnique({
                    where: { id },
                })

            if (!existingSchedule) {
                throw new NotFoundException('Schedule not found')
            }

            console.log('Updating schedule with data:', {
                id,
                updateData: updateScheduleDto,
            })

            const updatedSchedule = await this.databaseService.schedule.update({
                where: { id },
                data: updateScheduleDto,
            })

            return updatedSchedule
        } catch (error) {
            console.error('Error updating schedule:', error)
            throw new InternalServerErrorException(
                error.message || 'Failed to update schedule'
            )
        }
    }

    async addException(id: string, exceptionDto: UpdateScheduleExceptionDto) {
        try {
            const schedule = await this.databaseService.schedule.findUnique({
                where: { id },
            })

            if (!schedule) {
                throw new NotFoundException('Schedule not found')
            }

            const exceptions = (schedule.exceptions || {}) as {
                [key: string]: any
            }

            exceptions[exceptionDto.date] = {
                status: exceptionDto.status,
                ...(exceptionDto.newDate && { newDate: exceptionDto.newDate }),
                ...(exceptionDto.note && { note: exceptionDto.note }),
            }

            return this.databaseService.schedule.update({
                where: { id },
                data: { exceptions },
            })
        } catch (error) {
            console.error('Error adding exception:', error)
            throw new InternalServerErrorException(error.message)
        }
    }

    async deleteSchedule(id: string) {
        try {
            const schedule = await this.databaseService.schedule.findUnique({
                where: { id },
            })

            if (!schedule) {
                throw new NotFoundException('Schedule not found')
            }

            return this.databaseService.schedule.delete({
                where: { id },
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }
}
