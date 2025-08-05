import { nanoid } from 'nanoid'
import { useCallback, useEffect, useRef, useState } from 'react'
import ImageUpload from './create-test-task/ImageUpload'
import AnswerInput from './create-test-task/AnswerInput'
import ActionButtons from './create-test-task/ActionButtons'
import PairInput from './create-test-task/PairInput'
import MathInput from '../MathInput'
import BoldTextInput from '../BoldTextInput'

type ErrorsShape = {
    title?: string
    answers?: string[]
    correctAnswer?: string
    pairs?: string
}

const CreateTestTask = ({
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
}: any) => {
    const [base64, setBase64] = useState('')
    const [internalValue, setInternalValue] = useState(value)
    const [errors, setErrors] = useState<ErrorsShape>({})

    useEffect(() => {
        setInternalValue(value)
    }, [value])

    const questionRef = useRef(question)
    questionRef.current = question

    const handleTitleChange = useCallback(
        (val: string) => {
            setQuestion((prev: any) => ({ ...prev, title: val }))
            setErrors((prev) => ({
                ...prev,
                title: val && val.trim() ? undefined : prev.title,
            }))
        },
        [setQuestion]
    )

    const handleAnswerChange = useCallback(
        (index: number, val: string) => {
            const updatedAnswers = [...questionRef.current.answers]
            updatedAnswers[index].text = val
            setQuestion((prev: any) => ({ ...prev, answers: updatedAnswers }))

            setErrors((prev) => {
                const newAnswersErr = prev.answers ? [...prev.answers] : []
                if (val && val.trim()) {
                    newAnswersErr[index] = ''
                }
                return { ...prev, answers: newAnswersErr }
            })
        },
        [setQuestion]
    )

    const handlePairChange = (
        index: number,
        side: 'left' | 'right',
        val: string
    ) => {
        const newPairs = [...question.pairs]
        newPairs[index][side].text = val
        setQuestion((prev: any) => ({ ...prev, pairs: newPairs }))

        setErrors((errPrev) => ({
            ...errPrev,
            pairs: validatePairsRealtime(newPairs),
        }))
    }

    const handleAddPair = () => {
        setQuestion((prev: any) => {
            const updatedPairs = [
                ...prev.pairs,
                {
                    left: { id: nanoid(), text: '' },
                    right: { id: nanoid(), text: '' },
                    id: nanoid(),
                },
            ]
            // setErrors((errPrev) => ({
            //     ...errPrev,
            //     pairs: validatePairsRealtime(updatedPairs),
            // }))
            return { ...prev, pairs: updatedPairs }
        })
    }

    const handleRemovePair = (index: number) => {
        const newPairs = [...question.pairs]
        if (newPairs.length === 1) return question
        newPairs.splice(index, 1)
        setErrors((errPrev) => ({
            ...errPrev,
            pairs: validatePairsRealtime(newPairs),
        }))
        setQuestion((prev: any) => ({ ...prev, pairs: newPairs }))
    }

    const validatePairsRealtime = (pairs: any[]): string | undefined => {
        if (pairs.length < 1) {
            return 'Потрібна принаймні одна пара'
        } else {
            const hasFullPair = pairs.some(
                (p: any) =>
                    p.left?.text?.trim() !== '' && p.right?.text?.trim() !== ''
            )
            const allPairsValid = pairs.every(
                (p: any) =>
                    p.left?.text?.trim() !== '' || p.right?.text?.trim() !== ''
            )

            if (!hasFullPair) {
                return 'Потрібна хоча б одна пара з обома сторонами заповненими'
            } else if (!allPairsValid) {
                return 'Кожна пара повинна мати хоча б одну частину заповнену'
            }
        }
        return ''
    }

    const handleAddAnswer = useCallback(() => {
        setQuestion((prev: any) => ({
            ...prev,
            answers: [
                ...prev.answers,
                { text: '', isCorrect: false, id: nanoid() },
            ],
        }))
        setErrors((prev) => {
            const ansErr = prev.answers ? [...prev.answers, ''] : ['']
            return { ...prev, answers: ansErr }
        })
    }, [setQuestion])

    const handleRemoveAnswer = useCallback(
        (index: number) => {
            setQuestion((prev: any) => {
                const newAnswers = [...prev.answers]
                if (newAnswers.length === 1) return prev
                newAnswers.splice(index, 1)
                return { ...prev, answers: newAnswers }
            })
            setErrors((prev) => {
                if (!prev.answers) return prev
                const newAnswersErr = [...prev.answers]
                if (newAnswersErr.length > index) newAnswersErr.splice(index, 1)
                return { ...prev, answers: newAnswersErr }
            })
        },
        [setQuestion]
    )

    const validateBeforeSave = (): boolean => {
        let valid = true
        const newErrors: ErrorsShape = {}

        if (!question.title || question.title.trim() === '') {
            newErrors.title = 'Потрібно ввести умову завдання'
            valid = false
        }

        if (questionType === 'multiple' || questionType === 'written') {
            const answerErrs: string[] = []
            question.answers.forEach((ans: any, idx: number) => {
                if (!ans.text || ans.text.trim() === '') {
                    answerErrs[idx] = 'Порожня відповідь'
                    valid = false
                } else {
                    answerErrs[idx] = ''
                }
            })
            newErrors.answers = answerErrs
        }

        if (questionType === 'multiple') {
            const hasCorrect = question.answers.some(
                (ans: any) => ans.isCorrect
            )
            if (!hasCorrect) {
                newErrors.correctAnswer =
                    'Потрібно вибрати хоча б одну правильну відповідь'
                valid = false
            }
        }

        if (questionType === 'matching') {
            if (question.pairs.length < 1) {
                newErrors.pairs = 'Потрібна принаймні одна пара'
                valid = false
            } else {
                const hasFullPair = question.pairs.some(
                    (p: any) =>
                        p.left?.text?.trim() !== '' &&
                        p.right?.text?.trim() !== ''
                )
                const allPairsValid = question.pairs.every(
                    (p: any) =>
                        p.left?.text?.trim() !== '' ||
                        p.right?.text?.trim() !== ''
                )

                if (!hasFullPair) {
                    newErrors.pairs =
                        'Потрібна хоча б одна пара з обома сторонами заповненими'
                    valid = false
                } else if (!allPairsValid) {
                    newErrors.pairs =
                        'Кожна пара повинна мати хоча б одну частину заповнену'
                    valid = false
                }
            }
        }

        setErrors(newErrors)
        return valid
    }

    const handleSaveTask = () => {
        if (!validateBeforeSave()) {
            return
        }

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
                            ...question,
                            number: newNumber.toString(),
                            type: questionType,
                        },
                    ],
                }
            })

            setQuestion({
                title: '',
                type: '',
                answers:
                    questionType === 'written'
                        ? [{ text: '', id: nanoid() }]
                        : questionType === 'multiple'
                        ? [{ text: '', isCorrect: false, id: nanoid() }]
                        : Array(4)
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
            setErrors({})
        }

        setBase64('')
    }

    const renderTitleInput = () => {
        if (subject === 'Mathematics') {
            return (
                <MathInput
                    value={question.title}
                    onChange={handleTitleChange}
                    className="w-full border border-gray-300 rounded-xl text-[20px] px-4 py-2"
                    inputType="textarea"
                />
            )
        }
        return (
            <BoldTextInput
                value={question.title}
                onChange={handleTitleChange}
                placeholder="Введіть питання"
                inputType="textarea"
            />
        )
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
                    {renderTitleInput()}
                    {errors?.title && (
                        <p className="text-sm text-red-600 mt-1">
                            {errors.title}
                        </p>
                    )}

                    <ImageUpload
                        base64={base64}
                        setBase64={setBase64}
                        setQuestion={setQuestion}
                    />

                    {question.answers.map((answer: any, index: number) => (
                        <div
                            key={answer.id}
                            className="flex flex-col gap-1 mb-2"
                        >
                            <div>
                                <AnswerInput
                                    index={index}
                                    answer={answer}
                                    toggleAnswerCorrect={toggleAnswerCorrect}
                                    handleAnswerChange={handleAnswerChange}
                                    handleRemoveAnswer={handleRemoveAnswer}
                                    subject={subject}
                                />
                            </div>
                            {errors.answers && errors.answers[index] && (
                                <p className="text-xs text-red-600">
                                    {errors.answers[index]}
                                </p>
                            )}
                        </div>
                    ))}
                    <button
                        onClick={handleAddAnswer}
                        className="mt-2 text-sm text-blue-600 hover:underline"
                    >
                        ➕ Додати відповідь
                    </button>
                    {errors?.correctAnswer && (
                        <p className="text-sm text-red-600 mt-1">
                            {errors.correctAnswer}
                        </p>
                    )}

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
                    {renderTitleInput()}
                    {errors?.title && (
                        <p className="text-sm text-red-600 mt-1">
                            {errors.title}
                        </p>
                    )}
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
                            subject={subject}
                        />
                    ))}
                    {errors?.pairs && (
                        <p className="text-sm text-red-600 mt-1">
                            {errors.pairs}
                        </p>
                    )}
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
                    {renderTitleInput()}
                    {errors?.title && (
                        <p className="text-sm text-red-600 mt-1">
                            {errors.title}
                        </p>
                    )}
                    <ImageUpload
                        base64={base64}
                        setBase64={setBase64}
                        setQuestion={setQuestion}
                    />
                    <div className="flex items-center gap-4 mt-4">
                        <p>Введіть відповідь: </p>
                        {subject === 'Mathematics' ? (
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
                        ) : (
                            <BoldTextInput
                                value={question.answers[0]?.text}
                                onChange={(val) =>
                                    setQuestion({
                                        ...question,
                                        answers: [{ text: val, id: nanoid() }],
                                    })
                                }
                                placeholder="Введіть відповідь"
                            />
                        )}
                    </div>
                    {errors?.answers && errors?.answers[0] && (
                        <p className="text-sm text-red-600 mt-1">
                            {errors.answers[0]}
                        </p>
                    )}
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
