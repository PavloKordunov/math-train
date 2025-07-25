export class UpdateScheduleExceptionDto {
    date: string
    status: 'COMPLETED' | 'CANCELLED' | 'POSTPONED'
    newDate?: string
    note?: string
}
