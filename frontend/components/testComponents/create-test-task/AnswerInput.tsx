import MathInput from "@/components/MathInput";

const AnswerInput = ({ index, answer, toggleAnswerCorrect, handleAnswerChange }: any) => (
    <div key={index} className="flex items-center gap-4 mt-4">
        <input
            type="checkbox"
            checked={answer.isCorrect}
            onChange={() => toggleAnswerCorrect(index)}
        />
        <MathInput
            value={answer.text}
            onChange={(val: string) => handleAnswerChange(index, val)}
            className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
        />
    </div>
);

export default AnswerInput