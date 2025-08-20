import React, { memo } from 'react'
import MathInput from '@/components/MathInput'
import BoldTextInput from '@/components/BoldTextInput'

const PairInput = ({
    index,
    pair,
    handlePairChange,
    handleRemovePair,
    subject,
    user,
}: any) => (
    <div className="flex items-center gap-4 mt-4 w-full">
        <div className="flex-1 min-w-0">
            {subject === 'Mathematics' || user?.status === 'Admin' ? (
                <MathInput
                    value={pair.left.text}
                    onChange={(val) => handlePairChange(index, 'left', val)}
                    className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1 truncate"
                />
            ) : (
                <BoldTextInput
                    value={pair.left.text}
                    onChange={(val: any) =>
                        handlePairChange(index, 'left', val)
                    }
                    placeholder="Введіть варіант відповіді"
                />
            )}
        </div>
        <span className="text-xl font-bold">—</span>
        <div className="flex-1 min-w-0">
            {subject === 'Mathematics' || user?.status === 'Admin' ? (
                <MathInput
                    value={pair.right.text}
                    onChange={(val) => handlePairChange(index, 'right', val)}
                    className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1 truncate"
                />
            ) : (
                <BoldTextInput
                    value={pair.right.text}
                    onChange={(val: any) =>
                        handlePairChange(index, 'right', val)
                    }
                    placeholder="Введіть варіант відповіді"
                />
            )}
        </div>
        <button
            onClick={() => handleRemovePair(index)}
            className="text-red-500 hover:underline"
        >
            ✕
        </button>
    </div>
)

export default memo(PairInput)
