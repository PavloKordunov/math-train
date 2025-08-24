import {
    Controller,
    Post,
    Body,
    HttpException,
    HttpStatus,
    Get,
} from '@nestjs/common'
import { AiService } from './ai.service'
import { GenerateTestDto } from './dto/generateTestDto'

@Controller('ai')
export class AiController {
    constructor(private readonly aiService: AiService) {}

    @Post('generate-test')
    async generateTest(@Body() generateTestDto: GenerateTestDto) {
        let complexityDescription = ''
        switch (generateTestDto.dificulty) {
            case 'Важка':
                complexityDescription = `
- Завдання повинні вимагати застосування кількох тем або формул одночасно.
- Можуть містити нетривіальні перетворення або логічні кроки.
- Відповіді не повинні бути очевидними з першого погляду.
- Завдання можуть бути на логіку, оцінку + приклад, або мати кілька неочевидних випадків для розгляду.
- Наприклад, для математики: задачі на доведення, стереометрія з додатковими побудовами.
            `
                break
            case 'Дуже важка/Олімпіадна':
                complexityDescription = `
- Завдання олімпіадного рівня, що вимагають креативного та нестандартного підходу.
- Часто потребують знання специфічних теорем або методів (напр., принцип Діріхле, інваріанти, нерівність Коші-Буняковського).
- Завдання можуть бути на логіку, оцінку + приклад, або мати кілька неочевидних випадків для розгляду.
- Важливою є не лише відповідь, а й логіка розв'язання.
            `
                break
            default:
                complexityDescription = `Стандартний рівень складності для теми "${generateTestDto.title}".`
        }

        const prompt = `
Ти — експерт-методист, що створює екзаменаційні матеріали для профільного ліцею. Твоя задача — створити тест з предмету "${generateTestDto.subject}" на тему "${generateTestDto.title}".

**Рівень складності:** ${generateTestDto.dificulty}.
**Критерії складності, яких потрібно дотримуватись:**
${complexityDescription}

**Завдання:** Створи рівно 20 завдань у форматі JSON. Розподіл за типами: 15 "multiple", 3 "matching", 2 "written".

**Структура для кожного типу:**
- multiple: { "type": "multiple", "taskTitle": string, "answers": [{ "name": string, "isCorrect": boolean }] }
- matching: { "type": "matching", "taskTitle": string, "pairs": [{ "question": string, "answer": string }] }
- written: { "type": "written", "taskTitle": string, "answer": string }

**Приклад ДУЖЕ СКЛАДНОГО завдання (для твого розуміння рівня):**
{
    "type": "written",
    "taskTitle": "Знайдіть усі цілі значення параметра 'a', при яких рівняння \`x^2 - (a-2)x - 2a - 1 = 0\` має хоча б один цілий корінь.",
    "answer": "-2, 0, 4"
}
Це приклад того, що я вважаю складним завданням. Твої завдання мають бути подібного рівня креативності та складності.

**Ключові вимоги:**
1.  **Формули:** Використовуй AsciiMath, обгортаючи їх в одинарні зворотні апострофи як в умові завдання так і у відповідях окрім відподей у завданні типу written (наприклад, \`sqrt(x^2 + 1)\`).
2.  **Складність:** Суворо дотримуйся вказаних критеріїв складності. Уникай шаблонних та простих завдань. Кожне завдання має бути викликом.
3.  **Типи:** Обов'язково вказуй поле "type" для кожного завдання.
4.  **Written:** Для завдань типу "written" відповідь має бути числом (цілим або десятковим) для точних наук, або одним-двома ключовими словами для гуманітарних.
5.  **Чистий JSON:** Твоя відповідь повинна бути ЛИШЕ масивом JSON-об'єктів без жодних коментарів, пояснень, чи тексту до або після нього.
6.  **Додаткові умови від користувача:** ${generateTestDto?.additional || 'Немає'}
`

        const result = await this.aiService.askGemini(prompt)

        const jsonString =
            result.text.match(/```json\n([\s\S]*?)\n```/)?.[1] || result.text

        try {
            return {
                generatedContent: JSON.parse(jsonString),
                tokenUsage: {
                    promptTokens: result.promptTokenCount,
                    completionTokens: result.completionTokenCount,
                    totalTokens:
                        result.promptTokenCount + result.completionTokenCount,
                },
            }
        } catch (parseError) {
            return {
                generatedContent: 'Помилка парсингу JSON. Сира відповідь:',
                rawResponse: result.text,
                tokenUsage: {
                    promptTokens: result.promptTokenCount,
                    completionTokens: result.completionTokenCount,
                    totalTokens:
                        result.promptTokenCount + result.completionTokenCount,
                },
            }
        }
    }

    @Get('analyze-errors')
    // async analyzeErrors(@Body() analyzeTestDto: AnalyzeTestDto) {
    async analyzeErrors() {
        const errorsString = `
--- Завдання 1 ---
Завдання: Спростіть вираз \`(sqrt(12) + sqrt(75)) / sqrt(3)\`
Відповідь учня: 19
Правильна відповідь: 7

--- Завдання 2 ---
Завдання: Раціоналізуйте знаменник дробу: \`6 / (sqrt(7) - sqrt(5))\`
Відповідь учня: \`6(sqrt(7) + sqrt(5))\`
Правильна відповідь: \`3(sqrt(7) + sqrt(5))\`

--- Завдання 3 ---
Завдання: Розв'яжіть рівняння: \`sqrt(x+2) = x\`
Відповідь учня: x = -1, x = 2
Правильна відповідь: x = 2
`

        const prompt = `
Ти — досвідчений репетитор з математики, який аналізує помилки учня. Проаналізуй наступний список завдань, де учень відповів неправильно.

Для КОЖНОГО завдання з наданого списку, надай відповідь у форматі JSON-об'єкта з наступними полями:
- "errorAnalysis": string (Пояснення, чому відповідь учня НЕправильна. Будь конкретним.)
- "correctSolution": string (Детальне пояснення, як дійти до правильної відповіді.)
- "reinforcementTasks": array (Масив з ДВОХ нових завдань, схожих на оригінальне, для закріплення теми. Кожне завдання повинно мати поля "taskTitle" та "correctAnswer".)
- "theory": string (Дуже коротка теоретична довідка (1-2 речення) по темі, де була допущена помилка.)

Важливо:
- Відповідь має бути масивом JSON-об'єктів, де кожен об'єкт відповідає одному проаналізованому завданню.
- Не додавай жодних вступних чи заключних фраз поза масивом JSON.
- Використовуй AsciiMath для всіх математичних формул, обгортаючи їх в \`.

Ось завдання для аналізу:
${errorsString}
        `

        const result = await this.aiService.askGemini(prompt)

        // Обробка результату (схожа на ваш generateTest)
        const jsonString =
            result.text.match(/```json\n([\s\S]*?)\n```/)?.[1] || result.text

        try {
            return {
                analysisResult: JSON.parse(jsonString),
                tokenUsage: {
                    promptTokens: result.promptTokenCount,
                    completionTokens: result.completionTokenCount,
                    totalTokens:
                        result.promptTokenCount + result.completionTokenCount,
                },
            }
        } catch (parseError) {
            return {
                error: 'Помилка парсингу JSON з аналізом.',
                rawResponse: result.text,
                tokenUsage: {
                    promptTokens: result.promptTokenCount,
                    completionTokens: result.completionTokenCount,
                    totalTokens:
                        result.promptTokenCount + result.completionTokenCount,
                },
            }
        }
    }
}
