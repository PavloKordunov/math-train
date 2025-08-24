import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common'
import { DatabaseService } from 'src/database/database.service'

@Injectable()
export class PerfomenceService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getAllStudentPerfomence(page: number = 1) {
        const pageSize = 10
        const skip = (page - 1) * pageSize

        try {
            const [items, total] = await Promise.all([
                this.databaseService.studentScore.findMany({
                    skip,
                    take: pageSize,
                    orderBy: {
                        id: 'asc',
                    },
                }),
                this.databaseService.studentScore.count(),
            ])
            return {
                data: items,
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total / pageSize),
            }
        } catch (error) {
            throw new InternalServerErrorException(
                'Failed to get perfomences all students'
            )
        }
    }

    async getAllStudentPerfomenceById(id: string, page: number = 1) {
        const pageSize = 10
        const skip = (page - 1) * pageSize

        try {
            const [items, total] = await Promise.all([
                this.databaseService.studentScore.findMany({
                    skip,
                    take: pageSize,
                    where: { studentId: id },
                    orderBy: {
                        id: 'asc',
                    },
                }),
                this.databaseService.studentScore.count({
                    where: { studentId: id },
                }),
            ])
            return {
                data: items,
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total / pageSize),
            }
        } catch (error) {
            throw new InternalServerErrorException('Failed to get test review')
        }
    }

    async getAllStudentPerfomenceByGroup(id: string, page: number = 1) {
        const pageSize = 10
        const skip = (page - 1) * pageSize

        try {
            const [items, total] = await Promise.all([
                this.databaseService.studentScore.findMany({
                    skip,
                    take: pageSize,
                    where: {
                        student: {
                            groupId: id,
                        },
                    },
                    orderBy: {
                        id: 'asc',
                    },
                }),
                this.databaseService.studentScore.count({
                    where: {
                        student: {
                            groupId: id,
                        },
                    },
                }),
            ])
            return {
                data: items,
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total / pageSize),
            }
        } catch (error) {
            throw new InternalServerErrorException('Failed to get test review')
        }
    }

    async getTestReview(id: string) {
        try {
            const testResult =
                await this.databaseService.studentScore.findUnique({
                    where: { id },
                    include: {
                        test: {
                            include: { tasks: true },
                        },
                    },
                })

            if (!testResult) {
                throw new NotFoundException('Test result not found')
            }

            const userAnswers = testResult?.studentTest
                ? JSON.parse(testResult.studentTest as string)
                : []
            const testTasks: any = testResult.test.tasks

            // Створюємо масив у порядку завдань з тесту
            const answersInOrder: any = []

            for (const task of testTasks) {
                const userAnswer: any = userAnswers.find(
                    (ua) => ua.taskId === task.id
                )

                if (!userAnswer) {
                    // Якщо відповіді немає, все одно додаємо завдання
                    answersInOrder.push({
                        type: task.type,
                        title: task.title,
                        taskId: task.id,
                        isAnswered: false,
                    })
                    continue
                }

                switch (task.type) {
                    case 'multiple': {
                        const selectedAnswer: any =
                            userAnswer.answer !== null
                                ? task.answers.find(
                                      (a) => a.id === userAnswer.answer
                                  )
                                : null
                        const correctAnswer: any = task.answers.find(
                            (a) => a.isCorrect
                        )

                        answersInOrder.push({
                            type: 'multiple',
                            title: task.title,
                            taskId: userAnswer.taskId,
                            isCorrect: selectedAnswer?.isCorrect || false,
                            userAnswer: selectedAnswer
                                ? {
                                      answer: selectedAnswer.text,
                                      id: selectedAnswer.id,
                                  }
                                : null,
                            correctAnswer: correctAnswer
                                ? {
                                      answer: correctAnswer.text,
                                      id: correctAnswer.id,
                                  }
                                : null,
                        })
                        break
                    }

                    case 'matching': {
                        const userAnswerArray =
                            userAnswer.answer !== null &&
                            Array.isArray(userAnswer.answer)
                                ? userAnswer.answer
                                : []

                        const pairs: any = []
                        let allCorrect = true

                        task.answers.forEach((taskAnswer, index) => {
                            const userPair = userAnswerArray[index]
                            const isCorrect =
                                taskAnswer?.left?.rightId ===
                                userPair?.left?.rightId

                            if (!isCorrect) allCorrect = false

                            pairs.push({
                                userAnswer: {
                                    left: {
                                        text: userPair?.left?.leftText || '',
                                        id: userPair?.left?.leftId || '',
                                    },
                                    right: {
                                        text: userPair?.left?.rightText || '',
                                        id: userPair?.left?.rightId || '',
                                    },
                                },
                                correctAnswer: {
                                    left: {
                                        text: taskAnswer?.left?.leftText || '',
                                        id: taskAnswer?.left?.leftId || '',
                                    },
                                    right: {
                                        text: taskAnswer?.left?.rightText || '',
                                        id: taskAnswer?.left?.rightId || '',
                                    },
                                },
                                isCorrect,
                            })
                        })

                        answersInOrder.push({
                            type: 'matching',
                            title: task.title,
                            taskId: userAnswer.taskId,
                            isCorrect: allCorrect,
                            pairs: pairs,
                        })
                        break
                    }

                    case 'written': {
                        const userAnswerText =
                            userAnswer.answer !== null &&
                            typeof userAnswer.answer === 'string'
                                ? userAnswer.answer
                                : ''

                        const correctAnswer = task.answers[0]
                        const isCorrect =
                            correctAnswer?.text?.toLowerCase().trim() ===
                            userAnswerText.toLowerCase().trim()

                        answersInOrder.push({
                            type: 'written',
                            title: task.title,
                            taskId: userAnswer.taskId,
                            isCorrect,
                            userAnswer: {
                                answer: userAnswerText,
                                id: userAnswer.taskId,
                            },
                            correctAnswer: correctAnswer
                                ? {
                                      answer: correctAnswer.text,
                                      id: correctAnswer.id,
                                  }
                                : null,
                        })
                        break
                    }
                }
            }

            return {
                testId: testResult.testId,
                testName: testResult.testName,
                studentScore: testResult.score,
                maxScore: testResult.maxScore,
                answers: answersInOrder, // Повертаємо масив у порядку завдань
            }
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error
            }
            throw new InternalServerErrorException('Failed to get test review')
        }
    }
    async deletePerfomence(id: string) {
        try {
            const testResult =
                await this.databaseService.studentScore.findUnique({
                    where: { id },
                })

            if (!testResult) {
                throw new NotFoundException('Failed testResult not found')
            }

            return this.databaseService.studentScore.delete({
                where: { id },
            })
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error
            }
            throw new InternalServerErrorException('Failed to evaluate answers')
        }
    }
}
