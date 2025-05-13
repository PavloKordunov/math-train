import { nanoid } from "nanoid";
import MathInput from "../MathInput";
import Image from "next/image";
import { encodeImageFileAsURL } from "@/helpers/imageLoader";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const CreateTestTask = ({questionType, setQuestionType, test, setTest, setModalOpen, question, setQuestion, toggleAnswerCorrect, updateAnswerText, handleSaveMatchingTask}: any) => {
   
    const [base64, setBase64] = useState('')

    return (
        <div className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
            {questionType === '' && <div
                onClick={() => setModalOpen(true)}
                className="cursor-pointer border-2 border-dashed border-gray-400 hover:border-[#FA8E66] rounded-xl h-36 flex items-center justify-center transition"
            >
                <div className="text-4xl text-gray-500 hover:text-[#FA8E66] font-bold">＋</div>
            </div>}
            {questionType === 'multiple' && (
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Умова завдання</label>
                    <MathInput
                    value={question.title}
                    onChange={(val: string) => {
                        setQuestion((prev: any) => ({
                        ...prev,
                        title: val
                        }));
                    }}
                    className="w-full border border-gray-300 rounded-xl text-[20px] px-4 py-2"
                    />
                    <div className={`w-full mt-4 h-64 px-4 py-2 flex items-center justify-center bg-[#fff] rounded-[10px] mb-5`}>
                        
                        {base64 ? (
                                <div className="relative w-fit">
                                    <Image src={base64} alt="" width={2} height={2} className="w-fit max-h-64" />
                                    <div onClick={() => setBase64('')} className="absolute top-[10px] right-[10px] w-7 h-8" >
                                        <MdDelete size={24} />
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <label
                                        className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
                                        htmlFor="img"
                                    >
                                        <span>Завантажте світлину</span>
                                    </label>
                        <           input type="file" id="img" onChange={(e) => encodeImageFileAsURL(e, setBase64, setQuestion)} className="hidden"/>
                                </>
                            )}
                    </div>
                    {question.answers.map((answer: any, index: number) => (
                        <div key={index} className="flex items-center gap-4 mt-4">
                            <input
                                type="checkbox"
                                checked={answer.isCorrect}
                                onChange={() => toggleAnswerCorrect(index)}
                            />
                            <MathInput
                                value={answer.text}
                                onChange={(val: string) => {
                                    updateAnswerText(index, val)
                                }}
                                className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
                            />
                        </div>
                    ))}
                    <div className="flex w-full mt-4 items-center gap-4 justify-end">
                        <button
                            className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                            onClick={() => setQuestionType('')}
                        >
                            Відхилити
                        </button>  
                        <button
                            className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                            onClick={() => {
                                setTest((prev: any) => ({
                                    ...prev,
                                    tasks: [...prev.tasks, { ...question, type: questionType }],
                                }));
                                setQuestion({
                                    title: "",
                                    type: "",
                                    answers: Array(5).fill(null).map(() => ({ text: "", isCorrect: false })),
                                    image: ''
                                });
                                setQuestionType("");
                                setBase64('')
                                console.log(test);
                            }}
                        >
                            Зберегти
                        </button> 
                    </div>    
                </div>
            )}
            {questionType === 'matching' && (
            <div>
                <label className="block text-gray-700 font-medium mb-1">Умова завдання</label>
                <MathInput
                    value={question.title}
                    onChange={(val: string) => {
                        setQuestion((prev: any) => ({
                        ...prev,
                        title: val
                        }));
                    }}
                    className="w-full border border-gray-300 rounded-xl text-[20px] px-4 py-2"
                />
                <div className={`w-full mt-4 h-64 px-4 py-2 flex items-center justify-center bg-[#fff] rounded-[10px] mb-5`}>
                        
                    {base64 ? (
                            <div className="relative w-fit">
                                <Image src={base64} alt="" width={2} height={2} className="w-fit max-h-64" />
                                <div onClick={() => setBase64('')} className="absolute top-[10px] right-[10px] w-7 h-8" >
                                    <MdDelete size={24} />
                                </div>
                            </div>
                        ) : (
                            <>
                                <label
                                    className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
                                    htmlFor="img"
                                >
                                    <span>Завантажте світлину</span>
                                </label>
                    <           input type="file" id="img" onChange={(e) => encodeImageFileAsURL(e, setBase64, setQuestion)} className="hidden"/>
                            </>
                        )}
                </div>
                {question.pairs.map((pair: any, index: number) => (
                    <div key={index} className="flex items-center gap-4 mt-4 w-full">
  <div className="flex-1 min-w-0">
    <MathInput
      value={pair?.left.text}
      onChange={(val) => {
        const newPairs = [...question.pairs];
        newPairs[index].left.text = val;
        setQuestion((prev: any) => ({ ...prev, pairs: newPairs }));
      }}
      className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1 truncate"
    />
  </div>

  <span className="text-xl font-bold">—</span>

  <div className="flex-1 min-w-0">
    <MathInput
      value={pair?.right.text}
      onChange={(val) => {
        const newPairs = [...question.pairs];
        newPairs[index].right.text = val;
        setQuestion((prev: any) => ({ ...prev, pairs: newPairs }));
      }}
      className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1 truncate"
    />
  </div>

  <button
    onClick={() => {
      const newPairs = [...question.pairs];
      newPairs.splice(index, 1);
      setQuestion((prev: any) => ({ ...prev, pairs: newPairs }));
    }}
    className="text-red-500 hover:underline"
  >
    ✕
  </button>
</div>

                ))}
                <button
                onClick={() => {
                    setQuestion((prev: any) => ({
                    ...prev,
                    pairs: [...prev.pairs, { left: {id: nanoid(), text: ''}, right: {id: nanoid(), text: ''}, id: nanoid() }],
                    }));
                }}
                className="mt-4 text-sm text-blue-600 hover:underline"
                >
                ➕ Додати пару
                </button>
                <div className="flex w-full mt-4 items-center gap-4 justify-end">
                <button
                    className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                    onClick={() => setQuestionType("")}
                >
                    Відхилити
                </button>
                <button
                    className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                    onClick={() => {
                        handleSaveMatchingTask()
                        setBase64('')
                    }}
                    
                >
                    Зберегти
                </button>
                </div>
            </div>
            )}
            {questionType === 'written' && (
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Умова завдання</label>
                    <MathInput
                        value={question.title}
                        onChange={(val: string) => {
                            setQuestion((prev: any) => ({
                            ...prev,
                            title: val
                            }));
                        }}
                        className="w-full border border-gray-300 rounded-xl text-[20px] px-4 py-2"
                    />
                    <div className={`w-full mt-4 h-64 px-4 py-2 flex items-center justify-center bg-[#fff] rounded-[10px] mb-5`}>
                        
                        {base64 ? (
                                <div className="relative w-fit">
                                    <Image src={base64} alt="" width={2} height={2} className="w-fit max-h-64" />
                                    <div onClick={() => setBase64('')} className="absolute top-[10px] right-[10px] w-7 h-8" >
                                        <MdDelete size={24} />
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <label
                                        className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
                                        htmlFor="img"
                                    >
                                        <span>Завантажте світлину</span>
                                    </label>
                        <           input type="file" id="img" onChange={(e) => encodeImageFileAsURL(e, setBase64, setQuestion)} className="hidden"/>
                                </>
                            )}
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <p>Введіть відповідь: </p>
                        <MathInput
                            value={question.answers[0]?.text || ""}
                            onChange={(val) => setQuestion({ ...question, answers: [{ text: val, id: nanoid() }] })}
                            className="w-full border border-gray-300 text-[20px] rounded-xl px-4 py-1"
                        />
                    </div>
                    <div className="flex w-full mt-4 items-center gap-4 justify-end">
                        <button
                            className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                            onClick={() => setQuestionType('')}
                        >
                            Відхилити
                        </button>  
                        <button
                            className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                            onClick={() => {
                                setTest((prev: any) => ({
                                    ...prev,
                                    tasks: [...prev.tasks, { ...question, type: questionType }],
                                }));
                                setQuestion({
                                    title: "",
                                    type: "",
                                    answers: Array(4).fill(null).map(() => ({ text: "", isCorrect: false })),
                                    image: ''
                                });
                                setQuestionType("");
                                setBase64('')
                                console.log(test);
                            }}
                        >
                            Зберегти
                        </button> 
                    </div>    
                </div>
            )}
        </div>
    )
}

export default CreateTestTask