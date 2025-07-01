import { nanoid } from 'nanoid'
import MathInput from '../MathInput'
import { useCallback, useRef, useState } from 'react'
import ImageUpload from './create-test-task/ImageUpload'
import AnswerInput from './create-test-task/AnswerInput'
import ActionButtons from './create-test-task/ActionButtons'
import PairInput from './create-test-task/PairInput'

const CreateTestTask = ({
    questionType,
    setQuestionType,
    setTest,
    setModalOpen,
    question,
    setQuestion,
    toggleAnswerCorrect,
    handleSaveMatchingTask,
    maxNumber,
    setMaxNumber,
}: any) => {
    const [base64, setBase64] = useState('')

    const questionRef = useRef(question)
    questionRef.current = question

    const handleTitleChange = useCallback((val: string) => {
        setQuestion((prev: any) => ({ ...prev, title: val }))
    }, [])

    const handleAnswerChange = useCallback((index: number, val: string) => {
        const updatedAnswers = [...questionRef.current.answers]
        updatedAnswers[index].text = val
        setQuestion((prev: any) => ({ ...prev, answers: updatedAnswers }))
    }, [])

    const handlePairChange = (
        index: number,
        side: 'left' | 'right',
        val: string
    ) => {
        const newPairs = [...question.pairs]
        newPairs[index][side].text = val
        setQuestion((prev: any) => ({ ...prev, pairs: newPairs }))
    }

    const handleAddPair = () => {
        setQuestion((prev: any) => ({
            ...prev,
            pairs: [
                ...prev.pairs,
                {
                    left: { id: nanoid(), text: '' },
                    right: { id: nanoid(), text: '' },
                    id: nanoid(),
                },
            ],
        }))
    }

    const handleRemovePair = (index: number) => {
        const newPairs = [...question.pairs]
        newPairs.splice(index, 1)
        setQuestion((prev: any) => ({ ...prev, pairs: newPairs }))
    }

    const handleSaveTask = () => {
        if (questionType === 'matching') {
            handleSaveMatchingTask()
        } else {
            setTest((prev: any) => ({
                ...prev,
                tasks: [
                    ...prev.tasks,
                    { ...question, number: maxNumber, type: questionType },
                ],
            }))
            setMaxNumber((prev: any) => prev + 1)
            setQuestion({
                title: '',
                type: '',
                answers:
                    questionType === 'written'
                        ? [{ text: '', id: nanoid() }]
                        : Array(questionType === 'multiple' ? 5 : 4)
                              .fill(null)
                              .map(() => ({
                                  text: '',
                                  isCorrect: false,
                                  id: nanoid(),
                              })),
                pairs: [],
                image: '',
            })
            setQuestionType('')
        }
        setBase64('')
    }

    return (
        <div className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
            {questionType === '' && (
                <div
                    onClick={() => setModalOpen(true)}
                    className="cursor-pointer border-2 border-dashed border-gray-400 hover:border-[#FA8E66] rounded-xl h-36 flex items-center justify-center transition"
                >
                    <div className="text-4xl text-gray-500 hover:text-[#FA8E66] font-bold">
                        ＋
                    </div>
                </div>
            )}

            {questionType === 'multiple' && (
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Умова завдання
                    </label>
                    <MathInput
                        value={question.title}
                        onChange={handleTitleChange}
                        className="w-full border border-gray-300 rounded-xl text-[20px] px-4 py-2"
                    />
                    <ImageUpload
                        base64={base64}
                        setBase64={setBase64}
                        setQuestion={setQuestion}
                    />
                    {question.answers.map((answer: any, index: number) => (
                        <AnswerInput
                            key={answer.id}
                            index={index}
                            answer={answer}
                            toggleAnswerCorrect={toggleAnswerCorrect}
                            handleAnswerChange={handleAnswerChange}
                        />
                    ))}
                    <ActionButtons
                        onCancel={() => setQuestionType('')}
                        onSave={handleSaveTask}
                    />
                </div>
            )}

            {questionType === 'matching' && (
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Умова завдання
                    </label>
                    <MathInput
                        value={question.title}
                        onChange={handleTitleChange}
                        className="w-full border border-gray-300 rounded-xl text-[20px] px-4 py-2"
                    />
                    <ImageUpload
                        base64={base64}
                        setBase64={setBase64}
                        setQuestion={setQuestion}
                    />
                    {question.pairs.map((pair: any, index: number) => (
                        <PairInput
                            key={pair.id}
                            index={index}
                            pair={pair}
                            handlePairChange={handlePairChange}
                            handleRemovePair={handleRemovePair}
                        />
                    ))}
                    <button
                        onClick={handleAddPair}
                        className="mt-4 text-sm text-blue-600 hover:underline"
                    >
                        ➕ Додати пару
                    </button>
                    <ActionButtons
                        onCancel={() => setQuestionType('')}
                        onSave={handleSaveTask}
                    />
                </div>
            )}

            {questionType === 'written' && (
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Умова завдання
                    </label>
                    <MathInput
                        value={question.title}
                        onChange={handleTitleChange}
                        className="w-full border border-gray-300 rounded-xl text-[20px] px-4 py-2"
                    />
                    <ImageUpload
                        base64={base64}
                        setBase64={setBase64}
                        setQuestion={setQuestion}
                    />
                    <div className="flex items-center gap-4 mt-4">
                        <p>Введіть відповідь: </p>
                        <MathInput
                            value={question.answers[0]?.text || ''}
                            onChange={(val) =>
                                setQuestion({
                                    ...question,
                                    answers: [{ text: val, id: nanoid() }],
                                })
                            }
                            className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
                        />
                    </div>
                    <ActionButtons
                        onCancel={() => setQuestionType('')}
                        onSave={handleSaveTask}
                    />
                </div>
            )}
        </div>
    )
}

export default CreateTestTask
