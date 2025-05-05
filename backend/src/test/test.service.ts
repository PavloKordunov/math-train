import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateTestDto } from './dto/createTestDto';

@Injectable()
export class TestService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getAllTests() {
        try {
            return this.databaseService.test.findMany({
                include: {tasks: true}
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async getTestId(id: string) {
        try {
            return this.databaseService.test.findMany({
                where: {id}
            })     
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async getTestTask(id: string) {
        try {
            return this.databaseService.test.findMany({
                where: {id},
                include: {tasks: true}
            })       
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async getAllTestByTeacher(id: string) {
        try {
            return this.databaseService.test.findMany({
                where: {teacherId: id}
            })   
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async createTest(createTestDto: CreateTestDto) {
        try {
            const {tasks, ...testData} = createTestDto
    
            return this.databaseService.test.create({
                data: {
                    ...testData,
                    tasks: {
                        create: tasks.map((t) => ({
                          title: t.title,
                          type: t.type ?? '',
                          answers: t.answers ?? [],
                          pairs: t.pairs ?? [],
                          image: t.image ?? '', 
                        })),
                    },
                },
                include: {tasks: true}
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async assign (id: string, studentId: string) {
        try {
            return await this.databaseService.assignedTest.create({
                data : {
                    testId: id,
                    studentId,
                }
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async deleteTest(id: string) {
        console.log('ID:', id, typeof id)
        try{
            const test = await this.databaseService.test.findUnique({
                where: {id}
            })

            if(!test) {
                throw new NotFoundException('test not found')
            }
            await this.databaseService.task.deleteMany({ where: { testId: id } });
            await this.databaseService.assignedTest.deleteMany({ where: { testId: id } });
            await this.databaseService.studentScore.deleteMany({ where: { testId: id } });

            return await this.databaseService.test.delete({
                where: {id}
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
