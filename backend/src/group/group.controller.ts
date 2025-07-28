import {
    Body,
    Controller,
    Delete,
    Get,
    InternalServerErrorException,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common'
import { GroupService } from './group.service'
import { CreateGroupDto } from './dto/CreateGroupDto'
import { UpdateGroupDto } from './dto/UpdateGroupDto'
import { TestService } from 'src/test/test.service'
import { PerfomenceService } from 'src/perfomence/perfomence.service'

@Controller('group')
export class GroupController {
    constructor(
        private readonly groupService: GroupService,
        private readonly testService: TestService,
        private readonly perfomenceService: PerfomenceService
    ) {}

    @Get()
    getAll(@Query('page') page: string = '1') {
        return this.groupService.getAll(+page)
    }

    @Get('card/:id')
    async getStudentCard(@Param('id') id: string) {
        try {
            const [groupPerfomence, assignedTest] = await Promise.all([
                this.perfomenceService.getAllStudentPerfomenceByGroup(id),
                this.testService.getAssignedTestByGroup(id),
            ])

            return {
                groupPerfomence,
                assignedTest,
            }
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    @Get(':id')
    getGroupById(@Param('id') id: string) {
        return this.groupService.getGroupById(id)
    }

    @Get('teacher/:id')
    getGroupByTeacherId(
        @Param('id') id: string,
        @Query('page') page: string = '1'
    ) {
        return this.groupService.getGroupByTeacherId(id, +page)
    }

    @Post()
    createGroup(@Body() createGroupDto: CreateGroupDto) {
        return this.groupService.createGroup(createGroupDto)
    }

    @Patch(':id')
    updateGroup(
        @Body() updateGroupDto: UpdateGroupDto,
        @Param('id') id: string
    ) {
        return this.groupService.updateGroup(updateGroupDto, id)
    }

    @Delete(':id')
    deleteGroup(@Param('id') id: string) {
        return this.groupService.deleteGroup(id)
    }
}
