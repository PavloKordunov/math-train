import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    Logger,
    NotFoundException,
} from '@nestjs/common'
import { DatabaseService } from 'src/database/database.service'
import { CreateTestDto } from './dto/createTestDto'
import { CompareAnswersDto } from './dto/compareAnswerc'
import { UpdateTestDto } from './dto/updateTestDto'
import { Prisma } from 'generated/prisma'

@Injectable()
export class TestService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getAllTests(page: number) {
        const pageSize = 10
        const skip = (page - 1) * pageSize

        try {
            const [items, total] = await Promise.all([
                this.databaseService.test.findMany({
                    skip,
                    take: pageSize,
                    orderBy: {
                        id: 'asc',
                    },
                    include: {
                        tasks: true,
                        _count: {
                            select: { tasks: true },
                        },
                    },
                }),
                this.databaseService.test.count(),
            ])
            return {
                data: items,
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total / pageSize),
            }
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async getAllTopicTests(page: number = 1) {
        const DEFAULT_PAGE_SIZE = 10
        const validatedPage = Math.max(1, isNaN(page) ? 1 : page)
        const skip = (validatedPage - 1) * DEFAULT_PAGE_SIZE

        try {
            const [items, total] = await Promise.all([
                this.databaseService.test.findMany({
                    skip,
                    take: DEFAULT_PAGE_SIZE,
                    where: {
                        adminID: { not: null },
                    },
                    include: {
                        tasks: true,
                    },
                    orderBy: { id: 'asc' },
                }),
                this.databaseService.test.count({
                    where: {
                        adminID: { not: null },
                    },
                }),
            ])

            if (!items || items.length === 0) {
                return {
                    data: [],
                    total: 0,
                    page: validatedPage,
                    pageSize: DEFAULT_PAGE_SIZE,
                    totalPages: 0,
                }
            }

            return {
                data: items,
                total,
                page: validatedPage,
                pageSize: DEFAULT_PAGE_SIZE,
                totalPages: Math.ceil(total / DEFAULT_PAGE_SIZE),
            }
        } catch (error) {
            console.error('Failed to fetch topic tests:', error)
            throw new InternalServerErrorException(
                'Failed to fetch topic tests'
            )
        }
    }

    async getTopicTest(topicId: string, page: number = 1) {
        const pageSize = 10
        const skip = (page - 1) * pageSize

        try {
            const [items, total] = await Promise.all([
                this.databaseService.test.findMany({
                    skip: skip,
                    take: pageSize,
                    where: {
                        adminID: {
                            not: null,
                        },
                        subTopicId: topicId,
                    },
                    include: { tasks: true },
                    orderBy: {
                        id: 'asc',
                    },
                }),
                this.databaseService.test.count({
                    where: {
                        adminID: {
                            not: null,
                        },
                        subTopicId: topicId,
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
            throw new InternalServerErrorException(error.message)
        }
    }

    async getTestId(id: string) {
        try {
            const test: any = await this.databaseService.test.findUnique({
                where: { id },
                include: { tasks: true },
            })

            test.tasks.sort(
                (a, b) => parseInt(a.number || '0') - parseInt(b.number || '0')
            )

            return test
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async getAssignedTestByStudent(id: string, page: number = 1) {
        const pageSize = 10
        const skip = (page - 1) * pageSize

        try {
            const [items, total] = await Promise.all([
                this.databaseService.assignedTest.findMany({
                    skip: skip,
                    take: pageSize,
                    where: { studentId: id },
                    include: { test: true },
                    orderBy: {
                        id: 'asc',
                    },
                }),
                this.databaseService.assignedTest.count({
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
            throw new InternalServerErrorException('Failed to get tests')
        }
    }

    async getAssignedTestByGroup(id: string, page: number = 1) {
        try {
            const pageSize = 10
            const skip = (page - 1) * pageSize

            const [items, total] = await Promise.all([
                this.databaseService.assignedTest.findMany({
                    skip: skip,
                    take: pageSize,
                    where: {
                        student: {
                            groupId: id,
                        },
                    },
                    include: {
                        test: {
                            select: { title: true },
                        },
                    },
                    orderBy: {
                        assignedAt: 'asc',
                    },
                }),
                this.databaseService.assignedTest.count({
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
            throw new InternalServerErrorException(error.message)
        }
    }

    async getAssignedTestByTeacher(id: string, page: number = 1) {
        const pageSize = 10
        const skip = (page - 1) * pageSize

        try {
            const [items, total] = await Promise.all([
                this.databaseService.assignedTest.findMany({
                    skip: skip,
                    take: pageSize,
                    where: {
                        student: {
                            teacherId: id,
                        },
                    },
                    include: { test: true },
                    orderBy: {
                        id: 'asc',
                    },
                }),
                this.databaseService.assignedTest.count({
                    where: {
                        student: {
                            teacherId: id,
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
            throw new InternalServerErrorException('Failed to get tests')
        }
    }

    async getTestTask(id: string, page: number) {
        const pageSize = 10
        const skip = (page - 1) * pageSize

        try {
            const [items, total] = await Promise.all([
                this.databaseService.test.findMany({
                    skip,
                    take: pageSize,
                    where: { id },
                    include: { tasks: true },
                    orderBy: {
                        id: 'asc',
                    },
                }),
                this.databaseService.test.count({
                    where: { id },
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
            throw new InternalServerErrorException(error.message)
        }
    }

    async getAllTestByTeacher(id: string, page: any = 1) {
        const pageSize = 10
        const validatedPage = Math.max(1, Number(page) || 1)
        const skip = (validatedPage - 1) * pageSize

        try {
            if (!id) {
                throw new BadRequestException('Teacher ID is required')
            }

            const [items, total] = await Promise.all([
                this.databaseService.test.findMany({
                    skip,
                    take: pageSize,
                    where: { teacherId: id },
                    include: { tasks: true },
                    orderBy: {
                        id: 'asc',
                    },
                }),
                this.databaseService.test.count({
                    where: { teacherId: id },
                }),
            ])

            return {
                data: items,
                total,
                page: validatedPage,
                pageSize,
                totalPages: Math.ceil(total / pageSize),
            }
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async createTest(createTestDto: CreateTestDto) {
        try {
            const { tasks, teacherId, endTime, ...rest } = createTestDto

            let adminID: string | null = null

            if (teacherId) {
                const teacher = await this.databaseService.teacher.findUnique({
                    where: { id: teacherId },
                })
                if (!teacher) throw new NotFoundException('Teacher not found')
            } else if (rest.adminID) {
                const admin = await this.databaseService.admin.findUnique({
                    where: { id: rest.adminID },
                })
                if (!admin) throw new NotFoundException('Admin not found')
                adminID = admin.id
            } else {
                throw new BadRequestException(
                    'Either teacherId or adminID must be provided'
                )
            }

            return this.databaseService.test.create({
                data: {
                    ...rest,
                    ...(teacherId ? { teacherId } : {}),
                    ...(endTime ? { endTime: new Date(endTime) } : {}),
                    adminID,
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
                include: { tasks: true },
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async assign(id: string, studentId: string, endTime: string) {
        try {
            return await this.databaseService.assignedTest.create({
                data: {
                    testId: id,
                    studentId,
                    endTime,
                },
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async assignGroupTests(id: string, students: any[], endTime: string) {
        try {
            const assigned = await Promise.all(
                students.map((student) => this.assign(id, student.id, endTime))
            )

            return assigned
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async compareAnswers(
        id: string,
        userId: string,
        compareAnswersDtos: CompareAnswersDto[]
    ) {
        try {
            const test = await this.databaseService.test.findUnique({
                where: { id },
                include: {
                    tasks: {
                        select: {
                            id: true,
                            answers: true,
                            type: true,
                            title: true,
                        },
                    },
                },
            })

            if (!test) {
                throw new NotFoundException('Test not found')
            }

            let totalScore = 0
            let maxScore = 0
            for (const task of test.tasks) {
                if (task.type === 'multiple') {
                    maxScore += 1
                } else if (task.type === 'matching') {
                    if (Array.isArray(task.answers)) {
                        maxScore += task.answers.length
                    }
                } else if (task.type === 'written') {
                    maxScore += 2
                }
            }

            const normalizedForSave: Array<any> = []

            for (const task of test.tasks) {
                const dto = compareAnswersDtos.find(
                    (d) => d?.taskId === task.id
                )

                const saveEntry: any = {
                    taskId: task.id,
                    type: task.type,
                    answer: dto?.answer ?? null,
                    awarded: 0,
                }

                if (!dto) {
                    normalizedForSave.push(saveEntry)
                    continue
                }

                if (dto.type !== task.type) {
                    normalizedForSave.push(saveEntry)
                    continue
                }

                switch (task.type) {
                    case 'multiple': {
                        if (typeof dto.answer === 'string') {
                            const selectedAnswer: any = Array.isArray(
                                task.answers
                            )
                                ? task.answers.find(
                                      (a: any) => a?.id === dto.answer
                                  )
                                : undefined
                            if (selectedAnswer?.isCorrect) {
                                totalScore += 1
                                saveEntry.awarded = 1
                            }
                        }
                        break
                    }

                    case 'matching': {
                        if (!Array.isArray(dto.answer)) {
                            break
                        }

                        const taskPairs: Array<any> = Array.isArray(
                            task.answers
                        )
                            ? task.answers
                            : []
                        const mapByLeftId = new Map<string, any>()
                        const mapByLeftIndex = new Map<number, any>()

                        taskPairs.forEach((p: any, idx: number) => {
                            const leftId = p?.left?.id ?? p?.leftId ?? null
                            if (leftId) mapByLeftId.set(String(leftId), p)
                            mapByLeftIndex.set(idx, p)
                        })

                        let correctPairs = 0

                        for (const userPair of dto.answer) {
                            const userLeftId =
                                userPair?.left?.id ?? userPair?.leftId ?? null
                            const userRightId =
                                userPair?.left?.rightId ??
                                userPair?.rightId ??
                                null
                            const userLeftIndex =
                                typeof userPair?.leftIndex === 'number'
                                    ? userPair.leftIndex
                                    : null

                            let correctPair: any = undefined
                            if (
                                userLeftId &&
                                mapByLeftId.has(String(userLeftId))
                            ) {
                                correctPair = mapByLeftId.get(
                                    String(userLeftId)
                                )
                            } else if (
                                userLeftIndex !== null &&
                                mapByLeftIndex.has(userLeftIndex)
                            ) {
                                correctPair = mapByLeftIndex.get(userLeftIndex)
                            }

                            if (correctPair) {
                                const correctRightId =
                                    correctPair?.left?.rightId ??
                                    correctPair?.rightId ??
                                    null
                                if (
                                    correctRightId &&
                                    userRightId &&
                                    String(correctRightId) ===
                                        String(userRightId)
                                ) {
                                    correctPairs++
                                }
                            } else {
                                const idx = dto.answer.indexOf(userPair)
                                const taskPairAtIdx = taskPairs[idx]
                                const correctRightIdAlt =
                                    taskPairAtIdx?.left?.rightId ??
                                    taskPairAtIdx?.rightId ??
                                    null
                                const userRightIdAlt = userRightId
                                if (
                                    correctRightIdAlt &&
                                    userRightIdAlt &&
                                    String(correctRightIdAlt) ===
                                        String(userRightIdAlt)
                                ) {
                                    correctPairs++
                                }
                            }
                        }

                        totalScore += correctPairs
                        saveEntry.awarded = correctPairs
                        break
                    }

                    case 'written': {
                        if (typeof dto.answer === 'string') {
                            const correctText =
                                task.answers && task.answers[0]
                                    ? task.answers[0]?.text
                                    : null
                            if (
                                correctText &&
                                correctText.toLowerCase().trim() ===
                                    dto.answer.toLowerCase().trim()
                            ) {
                                totalScore += 2
                                saveEntry.awarded = 2
                            }
                        }
                        break
                    }

                    default:
                        break
                }

                normalizedForSave.push(saveEntry)
            }

            await this.databaseService.assignedTest.deleteMany({
                where: { studentId: userId, testId: test.id },
            })

            await this.databaseService.studentScore.create({
                data: {
                    studentId: userId,
                    testId: test.id,
                    score: totalScore,
                    isCompleted: true,
                    maxScore: maxScore,
                    testName: test.title ?? '',
                    studentTest: JSON.stringify(normalizedForSave),
                },
            })

            return { totalScore, maxScore }
        } catch (error) {
            console.error('Answer comparison failed:', error?.message ?? error)
            if (
                error instanceof NotFoundException ||
                error instanceof BadRequestException
            ) {
                throw error
            }
            throw new InternalServerErrorException('Failed to evaluate answers')
        }
    }

    async updateTest(id: string, updateTestDto: UpdateTestDto) {
        try {
            const { tasks = [], ...testData } = updateTestDto

            const currentTest = await this.databaseService.test.findUnique({
                where: { id },
                include: { tasks: true },
            })

            if (!currentTest) {
                throw new NotFoundException(`Test with ID ${id} not found`)
            }

            await this.databaseService.test.update({
                where: { id },
                data: {
                    ...testData,
                    ...(testData.endTime
                        ? { endTime: new Date(testData.endTime) }
                        : {}),
                },
            })

            const currentTaskIds = currentTest.tasks.map((task) => task.id)
            const incomingTaskIds = tasks.filter((t) => !!t.id).map((t) => t.id)

            const invalidTaskIds = incomingTaskIds.filter(
                (id: any) => !currentTaskIds.includes(id)
            )
            if (invalidTaskIds.length > 0) {
                throw new BadRequestException(
                    `Invalid task IDs: ${invalidTaskIds.join(', ')}`
                )
            }

            const tasksToDelete = currentTaskIds.filter(
                (id) => !incomingTaskIds.includes(id)
            )

            if (tasksToDelete.length > 0) {
                await this.databaseService.task.deleteMany({
                    where: { id: { in: tasksToDelete } },
                })
            }

            await Promise.all([
                ...tasks
                    .filter((t) => t.id && currentTaskIds.includes(t.id))
                    .map((t) =>
                        this.databaseService.task.update({
                            where: { id: t.id },
                            data: { ...t, number: t.number },
                        })
                    ),
                ...tasks
                    .filter((t) => !t.id)
                    .map((t: any, index: any) =>
                        this.databaseService.task.create({
                            data: {
                                ...t,
                                testId: id,
                                number: (index + 1).toString() || '',
                            },
                        })
                    ),
            ])

            const updatedTest: any = await this.databaseService.test.findUnique(
                {
                    where: { id },
                    include: { tasks: true },
                }
            )

            updatedTest.tasks.sort(
                (a, b) => parseInt(a.number || '0') - parseInt(b.number || '0')
            )

            return updatedTest
        } catch (error) {
            console.error('Update error:', error)

            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new NotFoundException('Test or task not found')
                }
                throw new BadRequestException('Database error')
            }

            throw error
        }
    }

    async deleteTest(id: string) {
        console.log('ID:', id, typeof id)
        try {
            const test = await this.databaseService.test.findUnique({
                where: { id },
            })

            if (!test) {
                throw new NotFoundException('test not found')
            }
            await this.databaseService.task.deleteMany({
                where: { testId: id },
            })
            await this.databaseService.assignedTest.deleteMany({
                where: { testId: id },
            })
            await this.databaseService.studentScore.deleteMany({
                where: { testId: id },
            })

            return await this.databaseService.test.delete({
                where: { id },
            })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }
}
