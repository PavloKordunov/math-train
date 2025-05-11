import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateTestDto } from './dto/createTestDto';
import { CompareAnswersDto } from './dto/compareAnswerc';
import { UpdateTestDto } from './dto/updateTestDto';

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
            return this.databaseService.test.findUnique({
                where: {id},
                include: {tasks: true}
            })     
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async getAssignedTest(id: string){
        return this.databaseService.assignedTest.findMany({
            where: {studentId: id},
            include: {test: true}
        })
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
                        create: tasks.map((t, index) => ({
                          title: t.title ?? 'Untitled Task',
                          type: t.type ?? '',
                          answers: t.answers ?? [],
                          pairs: t.pairs ?? [],
                          image: t.image ?? '',
                          number: (index + 1).toString(),
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

    async compareAnswers(id: string, userId: string, compareAnswersDtos: CompareAnswersDto[]) {
        try {
            const test = await this.databaseService.test.findUnique({
                where: { id },
                include: { 
                    tasks: {
                        select: {
                            id: true,
                            answers: true,
                            type: true
                        }
                    }
                }
            });
    
            if (!test) {
                throw new NotFoundException('Test not found');
            }
    
            let totalScore = 0;
            let maxScore = 0
    
            for (const dto of compareAnswersDtos) {
                if (!dto?.taskId) continue;
    
                const task: any = test.tasks.find(t => t.id === dto.taskId);
                if (!task) continue;
    
                if (dto.type !== task.type) continue;
    
                switch (task.type) {
                    case 'multiple': {
                        if (typeof dto.answer !== 'string') continue;
                        const selectedAnswer = task.answers.find(a => a.id === dto.answer);
                        if (selectedAnswer?.isCorrect) {
                            totalScore += 1;
                        }
                        maxScore += 1
                        break;
                    }
    
                    case 'matching': {
                        if (!Array.isArray(dto.answer)) continue;
                        let correctPairs = 0;
                        dto.answer.forEach((userPair, index) => {
                            const taskAnswer = task.answers[index];
                            if (taskAnswer?.left?.rightId === userPair?.left?.rightId) {
                                correctPairs++;
                            }
                            maxScore += 1
                        });
                        totalScore += correctPairs;
                        break;
                    }
    
                    case 'written': {
                        if (typeof dto.answer !== 'string') continue;
                        const correctText = task.answers[0]?.text;
                        if (
                            correctText &&
                            correctText.toLowerCase().trim() === dto.answer.toLowerCase().trim()
                        ) {
                            totalScore += 2;
                        }
                        maxScore += 2
                        break;
                    }
    
                    default:
                        continue; 
                }
            }

            await this.databaseService.assignedTest.deleteMany({
                where: {studentId: userId, testId: test.id}
            })
    
            return { totalScore, maxScore };
    
        } catch (error) {
            console.error('Answer comparison failed:', error.message);
            if (error instanceof NotFoundException || error instanceof BadRequestException) {
                throw error;
            }
            throw new InternalServerErrorException('Failed to evaluate answers');
        }
    }

    async updateTest(id: string, updateTestDto: UpdateTestDto) {
        try {
            const { tasks, ...testData } = updateTestDto;
    
            const currentTest = await this.databaseService.test.findUnique({
                where: { id },
                include: { tasks: true }
            });
    
            const currentTaskIds = currentTest?.tasks.map(task => task.id) || [];
            const incomingTaskIds = tasks?.filter(t => !!t.id).map(t => t.id) || [];
            
            const tasksToDelete = currentTaskIds.filter(id => !incomingTaskIds.includes(id));
    
            return this.databaseService.test.update({
                where: { id },
                data: {
                    ...testData,
                    tasks: {
                        deleteMany: tasksToDelete.length > 0 ? tasksToDelete.map(id => ({ id })) : undefined,
                        update: tasks
                            ?.filter(t => !!t.id)
                            .map((t, index) => ({
                                where: { id: t.id },
                                data: {
                                    title: t.title,
                                    type: t.type ?? '',
                                    answers: t.answers ?? [],
                                    pairs: t.pairs ?? [],
                                    image: t.image ?? '',
                                    number: (index + 1).toString(),
                                },
                            })),
                        create: tasks
                            ?.filter(t => !t.id)
                            .map((t, index) => ({
                                title: t.title ?? 'Untitled Task',
                                type: t.type ?? '',
                                answers: t.answers ?? [],
                                pairs: t.pairs ?? [],
                                image: t.image ?? '',
                                number: (index + 1).toString(),
                            })),
                    }
                },
                include: { tasks: true },
            });
        } catch (error) {
            throw new InternalServerErrorException('Failed to update test');
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
