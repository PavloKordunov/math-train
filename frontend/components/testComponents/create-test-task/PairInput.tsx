import React from 'react'
import MathInput from '@/components/MathInput'
import BoldTextInput from '@/components/BoldTextInput'
import { MdDelete } from 'react-icons/md'

const PairInput = ({
    index,
    pair,
    handlePairChange,
    handleRemovePair,
    subject,
    setQuestion,
    handleDeleteImage,
    setEditedImages,
}: any) => (
    <div className="flex items-center gap-4 mt-4 w-full">
        <div className="flex-1 min-w-0">
            {subject === 'Mathematics' ? (
                <MathInput
                    value={pair.left.text}
                    onChange={(val) => handlePairChange(index, 'left', val)}
                    className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1 truncate"
                    index={`left${pair.left.id}`}
                    typeAnswer={'matching'}
                    setQuestion={setQuestion}
                    setEditedImages={setEditedImages}
                />
            ) : (
                <BoldTextInput
                    value={pair.left.text}
                    onChange={(val: any) =>
                        handlePairChange(index, 'left', val)
                    }
                    index={`left${pair.left.id}`}
                    placeholder="Введіть варіант відповіді"
                    setQuestion={setQuestion}
                    setEditedImages={setEditedImages}
                />
            )}
            {pair.left.image && (
                <div className="relative inline-block mt-1">
                    <img
                        src={pair.left.image}
                        alt=""
                        className="max-w-full max-h-30 rounded-lg"
                    />
                    <button
                        onClick={() =>
                            handleDeleteImage(pair.left.id, pair.left.image)
                        }
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                    >
                        <MdDelete size={20} className="text-red-500" />
                    </button>
                </div>
            )}
        </div>
        <span className="text-xl font-bold">—</span>
        <div className="flex-1 min-w-0">
            {subject === 'Mathematics' ? (
                <MathInput
                    value={pair.right.text}
                    onChange={(val) => handlePairChange(index, 'right', val)}
                    className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1 truncate"
                    index={`right${pair.right.id}`}
                    typeAnswer={'matching'}
                    setQuestion={setQuestion}
                    setEditedImages={setEditedImages}
                />
            ) : (
                <BoldTextInput
                    value={pair.right.text}
                    onChange={(val: any) =>
                        handlePairChange(index, 'right', val)
                    }
                    placeholder="Введіть варіант відповіді"
                    setQuestion={setQuestion}
                    setEditedImages={setEditedImages}
                    index={`right${pair.right.id}`}
                />
            )}
            {pair.right.image && (
                <div className="relative inline-block mt-1">
                    <img
                        src={pair.right.image}
                        alt=""
                        className="max-w-full max-h-30 rounded-lg"
                    />
                    <button
                        onClick={() =>
                            handleDeleteImage(pair.right.id, pair.right.image)
                        }
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                    >
                        <MdDelete size={20} className="text-red-500" />
                    </button>
                </div>
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

export default PairInput
