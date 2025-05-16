import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PerfomenceService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getAllStudentPerfomence(){
        return this.databaseService.studentScore.findMany()
    }

    async getTestReview(id: string) {
        try {
            const testResult = await this.databaseService.studentScore.findUnique({
                where: { id },
                include: { 
                    test: {
                        include: { tasks: true }
                    }
                }
            });
    
            if (!testResult) {
                throw new NotFoundException('Test result not found'); 
            }
    
            const userAnswers = testResult?.studentTest ? JSON.parse(testResult.studentTest as string) : [];
            const testTasks = testResult.test.tasks;
    
            const sortedAnswers: any = {
                multiple: [],
                matching: [],
                written: []
            };
    
            for (const userAnswer of userAnswers) {
                const task: any = testTasks.find(t => t.id === userAnswer.taskId);
                if (!task) continue;
    
                switch (task.type) {
                    case 'multiple': {
                        const selectedAnswer = task.answers.find(a => a.id === userAnswer.answer);
                        const correctAnswer = task.answers.find(a => a.isCorrect);
                        
                        sortedAnswers.multiple.push({
                            title: task.title,
                            taskId: userAnswer.taskId,
                            isCorrect: selectedAnswer?.isCorrect || false,
                            userAnswer: selectedAnswer ? {
                                answer: selectedAnswer.text,
                                id: selectedAnswer.id
                            } : null,
                            correctAnswer: correctAnswer ? {
                                answer: correctAnswer.text,
                                id: correctAnswer.id
                            } : null
                        });
                        break;
                    }
    
                    case 'matching': {
                        if (!Array.isArray(userAnswer.answer)) continue;
                        
                        const pairs: any = [];
                        let allCorrect = true;
                        
                        userAnswer.answer.forEach((userPair, index) => {
                            const taskAnswer = task.answers[index];
                            const taskPair = task.pairs.find((p: any) => p.left.id === userPair.left.id);
                            const isCorrect = taskAnswer?.left?.rightId === userPair?.left?.rightId;
                            
                            if (!isCorrect) allCorrect = false;
                            
                            let correctRightText = '';
                            if (taskAnswer?.left?.rightId) {
                                const correctRightPair = task.pairs.find(p => 
                                    p.right?.id === taskAnswer.left.rightId
                                );
                                correctRightText = correctRightPair?.right?.text || '';
                            }
                            
                            pairs.push({
                                userAnswer: {
                                    left: {
                                        text: taskPair?.left?.text || '', 
                                        id: userPair.left.id
                                    },
                                    right: {
                                        text: userPair.right?.text || '',
                                        id: userPair.right?.id || ''
                                    }
                                },
                                correctAnswer: {
                                    left: {
                                        text: taskPair?.left?.text || '', 
                                        id: taskPair?.left?.id || ''
                                    },
                                    right: {
                                        text: correctRightText, 
                                        id: taskAnswer?.left?.rightId || ''
                                    }
                                },
                                isCorrect
                            });
                        });
                        
                        sortedAnswers.matching.push({
                            title: task.title,
                            taskId: userAnswer.taskId,
                            isCorrect: allCorrect,
                            pairs: pairs
                        });
                        break;
                    }
    
                    case 'written': {
                        if (typeof userAnswer.answer !== 'string') continue;
                        
                        const correctAnswer = task.answers[0];
                        const isCorrect = correctAnswer?.text?.toLowerCase().trim() === 
                                          userAnswer.answer.toLowerCase().trim();
                        
                        sortedAnswers.written.push({
                            title: task.title,
                            taskId: userAnswer.taskId,
                            isCorrect,
                            userAnswer: {
                                answer: userAnswer.answer,
                                id: userAnswer.taskId
                            },
                            correctAnswer: correctAnswer ? {
                                answer: correctAnswer.text,
                                id: correctAnswer.id
                            } : null
                        });
                        break;
                    }
    
                    default:
                        continue;
                }
            }
    
            return {
                testId: testResult.testId,
                testName: testResult.testName,
                studentScore: testResult.score,
                maxScore: testResult.maxScore,
                answers: sortedAnswers
            };
    
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new InternalServerErrorException('Failed to get test review'); 
        }   
    }

    async deletePerfomence(id: string){
        try {
            const testResult = await this.databaseService.studentScore.findUnique({
                where: {id}
            })

            if(!testResult){
                throw new NotFoundException('Failed testResult not found'); 
            }

            return this.databaseService.studentScore.delete({
                where: {id}
            })
        } catch (error) {
            if (error instanceof NotFoundException ) {
                throw error;
            }
            throw new InternalServerErrorException('Failed to evaluate answers'); 
        }
    }
}
