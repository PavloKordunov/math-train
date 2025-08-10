import MathInput from '@/components/MathInput'
import BoldTextInput from '@/components/BoldTextInput'
import { useUser } from '@/hooks/useUser'
const AnswerInput = ({
    index,
    answer,
    toggleAnswerCorrect,
    handleAnswerChange,
    subject,
    handleRemoveAnswer,
}: any) => {
    const { user } = useUser()

    return (
        <div key={index} className="flex items-center gap-4 mt-4">
            <input
                type="checkbox"
                checked={answer.isCorrect}
                onChange={() => toggleAnswerCorrect(index)}
            />

            {subject === 'Mathematics' || user?.status === 'Admin' ? (
                <MathInput
                    value={answer.text}
                    onChange={(val: string) => handleAnswerChange(index, val)}
                    className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
                />
            ) : (
                <BoldTextInput
                    value={answer.text}
                    onChange={(val: string) => handleAnswerChange(index, val)}
                    placeholder="Введіть варіант відповіді"
                />
            )}

            <button
                onClick={() => handleRemoveAnswer(index)}
                className="text-red-500 hover:underline"
            >
                ✕
            </button>
        </div>
    )
}

export default AnswerInput
