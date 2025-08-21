import React, {
    memo,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import { nanoid } from 'nanoid'
import ImageUpload from './create-test-task/ImageUpload'
import AnswerInput from './create-test-task/AnswerInput'
import PairInput from './create-test-task/PairInput'
import MathInput from '../MathInput'
import BoldTextInput from '../BoldTextInput'
import { useUser } from '@/hooks/useUser'
import { MdDelete } from 'react-icons/md'

type ErrorsShape = {
    title?: string
    answers?: string[]
    correctAnswer?: string
    pairs?: string
}

interface Props {
    subject: any
    questionType: string
    setQuestionType: (t: string) => void
    setTest: (updater: any) => void
    setModalOpen: (b: boolean) => void
    question: any
    setQuestion: (q: any) => void
    toggleAnswerCorrect: (index: number) => void
    handleSaveMatchingTask: () => void
    value?: any
    tasksError?: string
    handleDeleteImage?: any
    setEditedImages?: any
}

const emptyForType = (type: string) => {
    if (type === 'multiple') {
        return {
            title: '',
            type: 'multiple',
            answers: Array(3)
                .fill(null)
                .map(() => ({
                    text: '',
                    isCorrect: false,
                    id: nanoid(),
                    image: '',
                })),
            pairs: [],
            image: '',
        }
    }
    if (type === 'matching') {
        return {
            title: '',
            type: 'matching',
            answers: [],
            pairs: [
                {
                    left: { id: nanoid(), text: '', image: '' },
                    right: { id: nanoid(), text: '', image: '' },
                    id: nanoid(),
                },
            ],
            image: '',
        }
    }
    return {
        title: '',
        type: 'written',
        answers: [{ text: '', id: nanoid() }],
        pairs: [],
        image: '',
    }
}

const CreateTestTask: React.FC<Props> = ({
    subject,
    questionType,
    setQuestionType,
    setTest,
    setModalOpen,
    question,
    setQuestion,
    toggleAnswerCorrect,
    handleSaveMatchingTask,
    value,
    tasksError,
    handleDeleteImage,
    setEditedImages,
}) => {
    const { user } = useUser()

    const [localQuestion, setLocalQuestion] = useState(
        () => question || emptyForType(questionType || 'multiple')
    )
    const [errors, setErrors] = useState<ErrorsShape>({})
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const questionRef = useRef(question)
    questionRef.current = question
    useEffect(() => {
        setLocalQuestion(question || emptyForType(questionType || 'multiple'))
    }, [question?.id, questionType])

    const handleLocalTitleChange = useCallback(
        (val: string) => {
            setLocalQuestion((prev: any) => ({ ...prev, title: val }))
            setErrors((prev) => ({
                ...prev,
                title: (val && val.trim()) || question.image ? '' : prev.title,
            }))
        },
        [setQuestion, question.image]
    )

    const handleRejectTask = () => {
        if (question.image) {
            handleDeleteImage('title', question.image)
        }

        question.answers.forEach((ans: any) => {
            if (ans.image) handleDeleteImage(ans.id, ans.image)
        })

        question.pairs.forEach((pair: any) => {
            if (pair.left.image)
                handleDeleteImage(pair.left.id, pair.left.image)
            if (pair.right.image)
                handleDeleteImage(pair.right.id, pair.right.image)
        })

        setQuestionType('')
    }

    const handleLocalAnswerChange = useCallback(
        (index: number, val: string) => {
            const updatedAnswers = [...questionRef.current.answers]
            setLocalQuestion((prev: any) => {
                const answers = prev.answers ? [...prev.answers] : []
                answers[index] = {
                    ...(answers[index] || { id: nanoid() }),
                    text: val,
                    isCorrect: answers[index]?.isCorrect ?? false,
                }
                return { ...prev, answers }
            })
            setErrors((prev) => {
                const ans = prev.answers ? [...prev.answers] : []
                ans[index] =
                    (val && val.trim()) || updatedAnswers[index].image
                        ? ''
                        : ans[index] || 'Порожня відповідь'
                return { ...prev, answers: ans }
            })
        },
        [setQuestion]
    )

    const handleAddLocalAnswer = useCallback(() => {
        setLocalQuestion((prev: any) => ({
            ...prev,
            answers: [
                ...(prev.answers || []),
                { text: '', isCorrect: false, id: nanoid() },
            ],
        }))
        setErrors((prev) => ({
            ...prev,
            answers: [...(prev.answers || []), ''],
        }))
    }, [])

    const handleRemoveLocalAnswer = useCallback((index: number) => {
        setLocalQuestion((prev: any) => {
            const newAnswers = [...prev.answers]
            if (newAnswers.length === 1) return prev
            const answerToRemove = newAnswers[index]
            if (answerToRemove.image) {
                handleDeleteImage(answerToRemove.id, answerToRemove.image)
            }
            newAnswers.splice(index, 1)
            return { ...prev, answers: newAnswers }
        })
        setErrors((prev) => {
            if (!prev.answers) return prev
            const newAnswersErr = [...prev.answers]
            if (newAnswersErr.length > index) newAnswersErr.splice(index, 1)
            return { ...prev, answers: newAnswersErr }
        })
    }, [])

    const toggleLocalCorrect = useCallback((index: number) => {
        setLocalQuestion((prev: any) => {
            const answers = (prev.answers || []).map((a: any, i: number) =>
                i === index ? { ...a, isCorrect: !a.isCorrect } : a
            )
            return { ...prev, answers }
        })
    }, [])

    const handleLocalPairChange = useCallback(
        (index: number, side: 'left' | 'right', val: string) => {
            setLocalQuestion((prev: any) => {
                const pairs = [...(prev.pairs || [])]
                pairs[index] = {
                    ...pairs[index],
                    [side]: { ...(pairs[index]?.[side] || {}), text: val },
                }
                return { ...prev, pairs }
            })
        },
        []
    )

    const handleAddLocalPair = useCallback(() => {
        setLocalQuestion((prev: any) => ({
            ...prev,
            pairs: [
                ...(prev.pairs || []),
                {
                    left: { id: nanoid(), text: '' },
                    right: { id: nanoid(), text: '' },
                    id: nanoid(),
                },
            ],
        }))
    }, [])

    const handleRemoveLocalPair = useCallback((index: number) => {
        setLocalQuestion((prev: any) => {
            const pairs = [...(prev.pairs || [])]
            if (pairs.length === 1) return prev
            pairs.splice(index, 1)
            return { ...prev, pairs }
        })
    }, [])

    const validateLocal = useCallback(() => {
        let valid = true
        const newErrors: ErrorsShape = {}

        if (
            (!localQuestion.title || localQuestion.title.trim() === '') &&
            !localQuestion.image
        ) {
            newErrors.title = 'Потрібно ввести умову завдання'
            valid = false
        }

        if (questionType === 'multiple' || questionType === 'written') {
            const answerErrs: string[] = []
            ;(localQuestion.answers || []).forEach((ans: any, idx: number) => {
                if ((!ans.text || ans.text.trim() === '') && !ans.image) {
                    answerErrs[idx] = 'Порожня відповідь'
                    valid = false
                } else answerErrs[idx] = ''
            })
            newErrors.answers = answerErrs
        }

        if (questionType === 'multiple') {
            const hasCorrect = (localQuestion.answers || []).some(
                (a: any) => a.isCorrect
            )
            if (!hasCorrect) {
                newErrors.correctAnswer =
                    'Потрібно вибрати хоча б одну правильну відповідь'
                valid = false
            }
        }

        if (questionType === 'matching') {
            const validPairs = (localQuestion.pairs || []).filter(
                (pair: any) =>
                    pair.left?.text?.trim() && pair.right?.text?.trim()
            )

            const answers = validPairs.map((pair: any) => ({
                left: {
                    leftId: pair.left.id,
                    rightId: pair.right.id,
                    leftText: pair.left.text,
                    rightText: pair.right.text,
                    leftImage: pair.left.image,
                    rightImage: pair.right.image,
                },
            }))

            const pairs = validPairs.map((pair: any) => ({
                left: {
                    id: pair.left.id,
                    text: pair.left.text,
                    image: pair.left.image,
                },
                right: {
                    id: pair.right.id,
                    text: pair.right.text,
                    image: pair.right.image,
                },
            }))

            setTest((prev: any) => {
                const newNumber = prev.tasks.length + 1
                return {
                    ...prev,
                    tasks: [
                        ...prev.tasks,
                        {
                            ...localQuestion,
                            type: 'matching',
                            number: newNumber.toString(),
                            pairs,
                            answers,
                        },
                    ],
                }
            })

            const reset = emptyForType(questionType)
            setLocalQuestion(reset)
            setQuestion(reset)
            setQuestionType('')
            setErrors({})
            return
        }

        setErrors(newErrors)
        return valid
    }, [localQuestion, questionType])

    const handleSaveTask = useCallback(() => {
        if (!validateLocal()) return

        if (questionType === 'matching') {
            handleSaveMatchingTask()
        } else {
            setTest((prev: any) => {
                const newNumber = prev.tasks.length + 1
                return {
                    ...prev,
                    tasks: [
                        ...prev.tasks,
                        {
                            ...localQuestion,
                            number: newNumber.toString(),
                            type: questionType,
                        },
                    ],
                }
            })
        }

        const reset = emptyForType(questionType)
        setLocalQuestion(reset)
        setQuestion(reset)
        setQuestionType('')
        setErrors({})
    }, [
        localQuestion,
        questionType,
        validateLocal,
        setTest,
        setQuestion,
        handleSaveMatchingTask,
        setQuestionType,
    ])

    const renderTitleInput = useCallback(() => {
        if (subject === 'Mathematics' || user?.status === 'Admin') {
            return (
                <MathInput
                    value={localQuestion.title || ''}
                    onChange={handleLocalTitleChange}
                    className="w-full border border-gray-300 rounded-xl text-[20px] px-4 py-2"
                    inputType="textarea"
                    setQuestion={setQuestion}
                    setEditedImages={setEditedImages}
                />
            )
        }
        return (
            <BoldTextInput
                value={localQuestion.title || ''}
                onChange={handleLocalTitleChange}
                placeholder="Введіть питання"
                inputType="textarea"
                setQuestion={setLocalQuestion}
                setEditedImages={setEditedImages}
            />
        )
    }, [localQuestion.title, subject, user?.status, handleLocalTitleChange])

    useEffect(() => {
        console.log('localQuestion: ', localQuestion)
    }, [localQuestion])

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
                    {renderTitleInput()}
                    {localQuestion?.image && (
                        <div className="relative inline-block">
                            <img
                                src={localQuestion.image}
                                alt=""
                                className="max-w-full max-h-50 rounded-lg"
                            />
                            <button
                                onClick={() =>
                                    handleDeleteImage(
                                        'title',
                                        localQuestion.image
                                    )
                                }
                                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                            >
                                <MdDelete size={20} className="text-red-500" />
                            </button>
                        </div>
                    )}
                    {errors?.title && (
                        <p className="text-sm text-red-600 mt-1">
                            {errors.title}
                        </p>
                    )}

                    {(localQuestion.answers || []).map(
                        (answer: any, index: number) => (
                            <div
                                key={answer.id}
                                className="flex flex-col gap-1 mb-2"
                            >
                                <div>
                                    <AnswerInput
                                        index={index}
                                        answer={answer}
                                        toggleAnswerCorrect={() =>
                                            toggleLocalCorrect(index)
                                        }
                                        handleAnswerChange={(
                                            i: number,
                                            val: string
                                        ) => handleLocalAnswerChange(i, val)}
                                        handleRemoveAnswer={(i: number) =>
                                            handleRemoveLocalAnswer(i)
                                        }
                                        subject={subject}
                                        user={user}
                                        setQuestion={setLocalQuestion}
                                        setEditedImages={setEditedImages}
                                    />
                                    {answer.image && (
                                        <div className="relative inline-block mt-1">
                                            <img
                                                src={answer.image}
                                                alt=""
                                                className="max-w-full max-h-30 rounded-lg"
                                            />
                                            <button
                                                onClick={() =>
                                                    handleDeleteImage(
                                                        answer.id,
                                                        answer.image
                                                    )
                                                }
                                                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                                            >
                                                <MdDelete
                                                    size={20}
                                                    className="text-red-500"
                                                />
                                            </button>
                                        </div>
                                    )}
                                </div>
                                {errors.answers && errors.answers[index] && (
                                    <p className="text-xs text-red-600">
                                        {errors.answers[index]}
                                    </p>
                                )}
                            </div>
                        )
                    )}

                    <button
                        onClick={handleAddLocalAnswer}
                        className="mt-2 text-sm text-blue-600 hover:underline"
                    >
                        ➕ Додати відповідь
                    </button>
                    {errors?.correctAnswer && (
                        <p className="text-sm text-red-600 mt-1">
                            {errors.correctAnswer}
                        </p>
                    )}

                    <div className="flex w-full mt-4 items-center gap-4 justify-end">
                        <button
                            onClick={() => {
                                handleRejectTask()
                            }}
                            className="px-8 py-3 h-full rounded-[16px] bg-gray-300 text-black font-semibold text-[16px] shadow-md transition"
                        >
                            Відхилити
                        </button>
                        <button
                            onClick={handleSaveTask}
                            className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                        >
                            Зберегти
                        </button>
                    </div>
                </div>
            )}

            {questionType === 'matching' && (
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Умова завдання
                    </label>
                    {renderTitleInput()}
                    {localQuestion?.image && (
                        <div className="relative inline-block">
                            <img
                                src={localQuestion.image}
                                alt=""
                                className="max-w-full max-h-50 rounded-lg"
                            />
                            <button
                                onClick={() =>
                                    handleDeleteImage(
                                        'title',
                                        localQuestion.image
                                    )
                                }
                                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                            >
                                <MdDelete size={20} className="text-red-500" />
                            </button>
                        </div>
                    )}
                    {errors?.title && (
                        <p className="text-sm text-red-600 mt-1">
                            {errors.title}
                        </p>
                    )}

                    {(localQuestion.pairs || []).map(
                        (pair: any, idx: number) => (
                            <PairInput
                                key={pair.id}
                                index={idx}
                                pair={pair}
                                handlePairChange={(
                                    i: any,
                                    side: any,
                                    val: any
                                ) => handleLocalPairChange(i, side, val)}
                                handleRemovePair={(i: any) =>
                                    handleRemoveLocalPair(i)
                                }
                                subject={subject}
                                user={user}
                                setQuestion={setLocalQuestion}
                                handleDeleteImage={handleDeleteImage}
                                setEditedImages={setEditedImages}
                            />
                        )
                    )}

                    {errors?.pairs && (
                        <p className="text-sm text-red-600 mt-1">
                            {errors.pairs}
                        </p>
                    )}

                    <button
                        onClick={handleAddLocalPair}
                        className="mt-4 text-sm text-blue-600 hover:underline"
                    >
                        ➕ Додати пару
                    </button>

                    <div className="flex w-full mt-4 items-center gap-4 justify-end">
                        <button
                            onClick={handleRejectTask}
                            className="px-8 py-3 h-full rounded-[16px] bg-gray-300 text-black font-semibold text-[16px] shadow-md transition"
                        >
                            Відхилити
                        </button>
                        <button
                            onClick={handleSaveTask}
                            className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                        >
                            Зберегти
                        </button>
                    </div>
                </div>
            )}

            {questionType === 'written' && (
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Умова завдання
                    </label>
                    {renderTitleInput()}
                    {localQuestion?.image && (
                        <div className="relative inline-block">
                            <img
                                src={localQuestion.image}
                                alt=""
                                className="max-w-full max-h-50 rounded-lg"
                            />
                            <button
                                onClick={() =>
                                    handleDeleteImage(
                                        'title',
                                        localQuestion.image
                                    )
                                }
                                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                            >
                                <MdDelete size={20} className="text-red-500" />
                            </button>
                        </div>
                    )}
                    {errors?.title && (
                        <p className="text-sm text-red-600 mt-1">
                            {errors.title}
                        </p>
                    )}

                    <div className="flex items-center gap-4 mt-4">
                        <p>Введіть відповідь: </p>
                        {subject === 'Mathematics' ||
                        user?.status === 'Admin' ? (
                            <MathInput
                                value={localQuestion.answers?.[0]?.text || ''}
                                onChange={(val: any) =>
                                    setLocalQuestion((prev: any) => ({
                                        ...prev,
                                        answers: [
                                            {
                                                text: val,
                                                id:
                                                    prev.answers?.[0]?.id ||
                                                    nanoid(),
                                            },
                                        ],
                                    }))
                                }
                                className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
                                typeAnswer={'ansWrite'}
                            />
                        ) : (
                            <BoldTextInput
                                value={localQuestion.answers?.[0]?.text || ''}
                                onChange={(val: string) =>
                                    setLocalQuestion((prev: any) => ({
                                        ...prev,
                                        answers: [
                                            {
                                                text: val,
                                                id:
                                                    prev.answers?.[0]?.id ||
                                                    nanoid(),
                                            },
                                        ],
                                    }))
                                }
                                placeholder="Введіть відповідь"
                                typeAnswer={'ansWrite'}
                            />
                        )}
                    </div>

                    {errors?.answers && errors?.answers[0] && (
                        <p className="text-sm text-red-600 mt-1">
                            {errors.answers[0]}
                        </p>
                    )}

                    <div className="flex w-full mt-4 items-center gap-4 justify-end">
                        <button
                            onClick={handleRejectTask}
                            className="px-8 py-3 h-full rounded-[16px] bg-gray-300 text-black font-semibold text-[16px] shadow-md transition"
                        >
                            Відхилити
                        </button>
                        <button
                            onClick={handleSaveTask}
                            className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                        >
                            Зберегти
                        </button>
                    </div>
                </div>
            )}

            {tasksError && (
                <p className="text-sm text-red-600 mt-1">{tasksError}</p>
            )}
        </div>
    )
}

export default memo(CreateTestTask)
