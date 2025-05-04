import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateTestDto } from './dto/createTestDto';

@Injectable()
export class TestService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getAllTests() {
        return this.databaseService.test.findMany({
            include: {tasks: true}
        })
    }

    async createTest(createTestDto: CreateTestDto) {
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
    }
}
