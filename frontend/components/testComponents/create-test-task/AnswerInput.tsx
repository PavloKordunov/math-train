import MathInput from '@/components/MathInput'
import BoldTextInput from '@/components/BoldTextInput'
const AnswerInput = ({
    index,
    answer,
    toggleAnswerCorrect,
    handleAnswerChange,
    subject,
    handleRemoveAnswer,
    setQuestion,
    setEditedImages,
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
                index={answer.id}
                setQuestion={setQuestion}
                setEditedImages={setEditedImages}
            />
        ) : (
            <BoldTextInput
                value={answer.text}
                onChange={(val: string) => handleAnswerChange(index, val)}
                placeholder="Введіть варіант відповіді"
                index={answer.id}
                setQuestion={setQuestion}
                setEditedImages={setEditedImages}
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

export default AnswerInput
