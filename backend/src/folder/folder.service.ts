import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common'
import { DatabaseService } from 'src/database/database.service'

@Injectable()
export class FolderService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getAllFolders() {
        try {
            return await this.databaseService.folder.findMany()
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async getFolderById(id: string) {
        try {
            const folder = await this.databaseService.folder.findUnique({
                where: { id },
            })

            if (!folder) {
                throw new NotFoundException('Folder not found')
            }

            return folder
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async getAllFoldersByTeacherId(id: string) {
        try {
            const teacher = await this.databaseService.teacher.findUnique({
                where: { id },
            })

            if (!teacher) {
                throw new NotFoundException('Teacher not found')
            }

            return await this.databaseService.folder.findMany({
                where: { teacherId: id },
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async getAllTestsFromFolder(name: string, teacherId: string) {
        try {
            const folder = await this.databaseService.folder.findUnique({
                where: {
                    folder_name_teacher_unique: {
                        name,
                        teacherId,
                    },
                },
                include: { tests: true },
            })

            if (!folder) {
                throw new NotFoundException('Folder not found')
            }

            return folder
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async createFolder(name: string, teacherId: string) {
        try {
            const folder = await this.databaseService.folder.findUnique({
                where: {
                    folder_name_teacher_unique: {
                        name: name,
                        teacherId: teacherId,
                    },
                },
            })

            if (folder) {
                throw new ConflictException(
                    'Folder with this name already exists for this teacher'
                )
            }

            return await this.databaseService.folder.create({
                data: {
                    name: name,
                    teacherId: teacherId,
                },
                include: { tests: true },
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async addTestToFolder(folderId: string, testId: string) {
        try {
            const folder = await this.databaseService.folder.findUnique({
                where: { id: folderId },
            })

            if (!folder) {
                throw new NotFoundException('Folder not found')
            }

            const test = await this.databaseService.test.findUnique({
                where: { id: testId },
            })

            if (!test) {
                throw new NotFoundException('Test not found')
            }

            return await this.databaseService.test.update({
                where: { id: testId },
                data: { folderId },
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async updateFolder(id: string, name: string) {
        try {
            const folder = await this.databaseService.folder.findUnique({
                where: { id },
            })
            if (!folder) throw new NotFoundException('Folder not found')

            return this.databaseService.folder.update({
                where: { id },
                data: { name },
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async deleteFolder(id: string) {
        try {
            const folder = await this.databaseService.folder.findUnique({
                where: { id },
            })

            if (!folder) {
                throw new NotFoundException('Folder not found')
            }

            return await this.databaseService.folder.delete({
                where: { id },
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }
}
