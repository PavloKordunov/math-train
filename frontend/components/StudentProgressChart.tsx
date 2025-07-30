'use client'

import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

type TestResult = {
    testName: string
    score: number
    maxScore: number
}

export default function StudentProgressChart({
    testResults,
    progressType,
}: any) {
    const data = testResults.map((test: any) => ({
        ...test,
        percentage: Math.round((test.score / test.maxScore) * 100),
    }))

    return (
        <div
            style={{
                marginTop: '24px',
                padding: '20px',
                border: '1px solid #E0E0E0',
                borderRadius: '12px',
                maxWidth: '750px',
                backgroundColor: '#ffffff',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
            }}
        >
            <h2
                style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '16px',
                    color: '#2F2929',
                }}
            >
                Прогрес {progressType === 'group' ? 'групи' : 'студента'}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <Line
                        type="monotone"
                        dataKey="percentage"
                        stroke="#F87537"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                    <CartesianGrid stroke="#E0E0E0" strokeDasharray="5 5" />
                    <XAxis
                        dataKey="testName"
                        tick={{ fontSize: 14, fill: '#888888' }}
                        axisLine={{ stroke: '#DADADA' }}
                        tickLine={false}
                    />
                    <YAxis
                        domain={[0, 100]}
                        tick={{ fontSize: 14, fill: '#888888' }}
                        axisLine={{ stroke: '#DADADA' }}
                        tickLine={false}
                        tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip
                        formatter={(value: number) => `${value}%`}
                        contentStyle={{
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
