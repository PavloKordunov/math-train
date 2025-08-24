import { Injectable } from '@nestjs/common'
import { VertexAI, GenerativeModel } from '@google-cloud/vertexai'

interface AiResponse {
    text: string
    promptTokenCount: number
    completionTokenCount: number
}

export interface TestPromptData {
    subject: string
    topic: string
    difficulty: string
    taskCounts: {
        multiple: number
        matching: number
        written: number
    }
    jsonExample: any
}

@Injectable()
export class AiService {
    private vertex_ai: VertexAI
    private readonly model: GenerativeModel

    constructor() {
        this.vertex_ai = new VertexAI({
            project: process.env.PROJECT_ID,
            location: 'us-central1',
        })
        this.model = this.vertex_ai.getGenerativeModel({
            model: 'gemini-2.0-flash',
        })
    }

    async askGemini(prompt: string): Promise<AiResponse> {
        try {
            const response = await this.model.generateContent({
                contents: [{ role: 'user', parts: [{ text: prompt }] }],
            })

            const usage = response.response.usageMetadata
            const text =
                response.response.candidates?.[0]?.content?.parts?.[0]?.text ||
                ''

            const promptTokenCount = usage?.promptTokenCount || 0
            const totalTokenCount = usage?.totalTokenCount || 0
            const completionTokenCount = totalTokenCount - promptTokenCount

            return {
                text,
                promptTokenCount,
                completionTokenCount,
            }
        } catch (error) {
            console.error('Error calling Gemini API:', error)
            return {
                text: 'Помилка генерації відповіді.',
                promptTokenCount: 0,
                completionTokenCount: 0,
            }
        }
    }
}
