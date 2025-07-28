import React from 'react'
import MathInput, { MathInputHandle } from '@/components/MathInput'

interface PairInputProps {
    index: number
    pair: {
        left: { id: string; text: string }
        right: { id: string; text: string }
        id: string
    }
    handlePairChange: (
        index: number,
        side: 'left' | 'right',
        val: string
    ) => void
    handleRemovePair: (index: number) => void
    answerRefs: React.MutableRefObject<Record<string, MathInputHandle | null>>
}

const PairInput: React.FC<PairInputProps> = ({
    index,
    pair,
    handlePairChange,
    handleRemovePair,
    answerRefs,
}) => (
    <div className="flex items-center gap-4 mt-4 w-full">
        <div className="flex-1 min-w-0">
            <MathInput
                ref={(el) => {
                    answerRefs.current[pair.left.id] = el
                }}
                value={pair.left.text}
                onChange={(val) => handlePairChange(index, 'left', val)}
                className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1 truncate"
                inputId={`left-${pair.left.id}`}
            />
        </div>
        <span className="text-xl font-bold">—</span>
        <div className="flex-1 min-w-0">
            <MathInput
                ref={(el) => {
                    answerRefs.current[pair.right.id] = el
                }}
                value={pair.right.text}
                onChange={(val) => handlePairChange(index, 'right', val)}
                className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1 truncate"
                inputId={`right-${pair.right.id}`}
            />
        </div>
        <button
            onClick={() => handleRemovePair(index)}
            className="text-red-500 hover:underline"
        >
            ✕
        </button>
    </div>
)

export default PairInput
