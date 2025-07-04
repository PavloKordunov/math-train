import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { AdminService } from './admin.service'
import { CreateAdminDto } from './dto/CteateAdminDto'

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Get()
    getAll() {
        return this.adminService.getAll()
    }

    @Post('register')
    register(@Body() createAdminDto: CreateAdminDto) {
        return this.adminService.register(createAdminDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.adminService.delete(id)
    }
}
