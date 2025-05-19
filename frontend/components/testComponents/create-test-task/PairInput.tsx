import MathInput from "@/components/MathInput";

const PairInput = ({ index, pair, handlePairChange, handleRemovePair }: any) => (
    <div key={index} className="flex items-center gap-4 mt-4 w-full">
        <div className="flex-1 min-w-0">
            <MathInput
                value={pair?.left.text}
                onChange={(val) => handlePairChange(index, 'left', val)}
                className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1 truncate"
            />
        </div>
        <span className="text-xl font-bold">—</span>
        <div className="flex-1 min-w-0">
            <MathInput
                value={pair?.right.text}
                onChange={(val) => handlePairChange(index, 'right', val)}
                className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1 truncate"
            />
        </div>
        <button
            onClick={() => handleRemovePair(index)}
            className="text-red-500 hover:underline"
        >
            ✕
        </button>
    </div>
);

export default PairInput