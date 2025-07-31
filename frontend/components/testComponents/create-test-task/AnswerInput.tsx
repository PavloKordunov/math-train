import MathInput from '@/components/MathInput'

const AnswerInput = ({
    index,
    answer,
    toggleAnswerCorrect,
    handleAnswerChange,
    subject,
}: any) => (
    <div key={index} className="flex items-center gap-4 mt-4">
        <input
            type="checkbox"
            checked={answer.isCorrect}
            onChange={() => toggleAnswerCorrect(index)}
        />

        {subject === 'Mathematics' ? (
            <MathInput
                value={answer.text}
                onChange={(val: string) => handleAnswerChange(index, val)}
                className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
            />
        ) : (
            <input
                value={answer.text}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                className={`flex-1 border p-2 rounded resize-none w-full border border-gray-300 rounded-xl text-[20px] px-4 py-2`}
                placeholder={'Введіть текст'}
                style={{
                    fontFamily: 'monospace',
                    lineHeight: '1.5',
                }}
            />
        )}
    </div>
)

export default AnswerInput
