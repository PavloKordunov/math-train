'use client';

import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { addStyles, EditableMathField } from 'react-mathquill';
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";

const CreateTest = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [questionType, setQuestionType] = useState("");
    const {user, setUser} = useUser()
    const [test, setTest] = useState({
        title: "",
        description: "",
        timeLimit: 0,
        endTime: "",
        teacherId: user?.id,
        tasks: []
    });
    const [question, setQuestion] = useState<any>({
        title: "",
        type: "",
        answers: [],
        pairs: [],
      });
    const router = useRouter()

    const handleCreateTest = async() => {
        try {
            const res = await fetch('http://localhost:8080/api/test', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(test)
            })

            const data = await res.json()
            console.log(data)
            router.push('/teacher')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(question)
    }, [question])
      
    const handleSelect = (type: string) => {
        setQuestionType(type);
        
        if (type === "multiple") {
            setQuestion({
            title: "",
            type: "multiple",
            answers: Array(5).fill(null).map(() => ({ text: "", isCorrect: false, id: nanoid() })),
            pairs: [],
            });
        } else if (type === "matching") {
            setQuestion({
            title: "",
            type: "matching",
            answers: [{left: {rightId: ''}}],
            pairs: [{ left: {id: nanoid(), text: ''}, right: {id: nanoid(), text: ''}, id: nanoid() }],
            });
        } else if (type === "written") {
            setQuestion({
            title: "",
            type: "written",
            answers: [{text: '', id: nanoid()}],
            pairs: [],
        });
    }
    
    setModalOpen(false);
    };
      

    const updateAnswerText = (index: number, text: string) => {
        const updatedAnswers = [...question.answers];
        updatedAnswers[index].text = text;
        setQuestion({ ...question, answers: updatedAnswers });
    };
    
    const toggleAnswerCorrect = (index: number) => {
        const updatedAnswers = [...question.answers];
        updatedAnswers[index].isCorrect = !updatedAnswers[index].isCorrect;
        setQuestion({ ...question, answers: updatedAnswers });
    };

    const formatDateForInput = (isoString: string) => {
        if (!isoString) return ""; 

        const date = new Date(isoString);
        if (isNaN(date.getTime())) return "";
      
        const offset = date.getTimezoneOffset() * 60000;
        return new Date(date.getTime() - offset).toISOString().slice(0, 16);
    };

    const handleSaveMatchingTask = () => {
        const validPairs = question.pairs.filter(
          (pair: any) => pair.left?.text?.trim() && pair.right?.text?.trim()
        );
      
        const answers = validPairs.map((pair: any) => ({
          left: {
            rightId: pair.right.id 
          }
        }));
      
        const taskToSave = {
          ...question,
          type: questionType,
          answers: answers,
          pairs: question.pairs.map((pair: any) => ({
            left: { id: pair.left.id, text: pair.left.text },
            right: { id: pair.right.id, text: pair.right.text }
          }))
        };
      
        setTest((prev: any) => ({
          ...prev,
          tasks: [...prev.tasks, taskToSave]
        }));
      
        setQuestion({
          title: "",
          type: "",
          answers: [],
          pairs: [{ left: {id: nanoid(), text: ''}, right: {id: nanoid(), text: ''}, id: nanoid() }]
        });
        setQuestionType("");
      };

    useEffect(() => {
        addStyles();
    }, []);
    
    useEffect(() => {
        addStyles();
        console.log(test)
    }, [test]);

    return (
        <div>
            <h1 className="text-[36px] mb-4 font-bold text-center">Створення нового тесту</h1>
            <div className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Назва тесту</label>
                    <input
                    type="text"
                    value={test.title}
                    onChange={(e) => setTest({ ...test, title: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                    placeholder="Наприклад: Тест №3 — Інтеграли"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Опис тесту</label>
                    <textarea
                    value={test.description}
                    onChange={(e) => setTest({ ...test, description: e.target.value })}
                    className="resize-none w-full border border-gray-300 rounded-xl px-4 py-2"
                    placeholder="Короткий опис, наприклад: Тест охоплює теми похідних, інтегралів і графіків функцій."
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Тривалість (хв)</label>
                    <input
                    type="number"
                    value={test.timeLimit}
                    onChange={(e) => setTest({ ...test, timeLimit: Number(e.target.value) })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Крайній термін проходження</label>
                    <input
                    type="datetime-local"
                    value={formatDateForInput(test.endTime)}
                    onChange={(e) => {
                        const isoDate = new Date(e.target.value).toISOString();
                        setTest({ ...test, endTime: isoDate });
                      }}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                    />
                </div>
            </div>
            {test.tasks.length > 0 && 
            test.tasks.map((item: any, index: number) => (
                <div key={index}>
                    {item.type === 'multiple' && (
                        <div key={index} className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                        <p className="text-[24px] font-bold">Запитання {index + 1}</p>
                        <p className="text-xl font-semibold mb-4">{item.title}</p>
                        {item.answers.map((answer: any, index: number) => (
                            <div key={index} className="flex items-center gap-4 mt-4">
                                <input
                                    type="checkbox"
                                    checked={answer.isCorrect}
                                    onChange={() => {}}
                                />
                                <p>{answer.text}</p>
                            </div>
                        ))}
                    </div>)}
                    {item.type === 'matching' && (
                        <div key={index} className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                            <p className="text-[24px] font-bold">Запитання {index + 1}</p>
                            <p className="text-xl font-semibold mb-4">{item.title}</p>
                            {item.pairs.map((pair: any, index: number) => (
                                <div key={index} className="flex items-center gap-4 mt-4">
                                    <p className="font-medium">{index+ 1}.  {pair.left.text}</p>
                                    <span className="text-gray-500">—</span>
                                    <p>{pair.right.text}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {item.type === 'written' && (
                        <div key={index} className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                            <p className="text-[24px] font-bold">Запитання {index + 1}</p>
                            <p className="text-xl font-semibold mb-4">{item.title}</p>
                            <div className="flex items-center gap-4 mt-4">
                                <p className="font-medium">Відповідь: </p>
                                <p>{item.answers?.[0]?.text || "Немає відповіді"}</p>

                            </div>
                        </div>
                    )}
                </div>  
            ))}
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
                        <EditableMathField
                            latex={question.title}
                            onChange={(mathField) =>
                                setQuestion((prev: any) => ({ ...prev, title: mathField.latex() }))
                              }
                            className="w-full border border-gray-300 rounded-xl px-4 py-2"
                        />
                       {question.answers.map((answer: any, index: number) => (
                            <div key={index} className="flex items-center gap-4 mt-4">
                                <input
                                    type="checkbox"
                                    checked={answer.isCorrect}
                                    onChange={() => toggleAnswerCorrect(index)}
                                />
                                <input
                                    type="text"
                                    value={answer.text}
                                    onChange={(e) => updateAnswerText(index, e.target.value)}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                                    placeholder={`Введіть умову відповіді ${index + 1}`}
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
                                        answers: Array(5).fill(null).map(() => ({ text: "", isCorrect: false }))
                                    });
                                    setQuestionType("");
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
                    <input
                    type="text"
                    value={question.title}
                    onChange={(e) => setQuestion((prev: any) => ({ ...prev, title: e.target.value }))}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                    placeholder="Введіть інструкцію для відповідності"
                    />
                    {question.pairs.map((pair: any, index: number) => (
                    <div key={index} className="flex items-center gap-4 mt-4">
                        <input
                        type="text"
                        value={pair?.left.text}
                        onChange={(e) => {
                            const newPairs = [...question.pairs];
                            newPairs[index].left.text = e.target.value;
                            setQuestion((prev: any) => ({ ...prev, pairs: newPairs }));
                        }}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2"
                        placeholder={`Ліва частина ${index + 1}`}
                        />
                        <span className="text-xl font-bold">—</span>
                        <input
                        type="text"
                        value={pair?.right.text}
                        onChange={(e) => {
                            const newPairs = [...question.pairs];
                            newPairs[index].right.text = e.target.value;
                            setQuestion((prev: any) => ({ ...prev, pairs: newPairs }));
                        }}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2"
                        placeholder={`Права частина ${index + 1}`}
                        />
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
                        onClick={handleSaveMatchingTask}
                    >
                        Зберегти
                    </button>
                    </div>
                </div>
                )}
                {questionType === 'written' && (
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Умова завдання</label>
                        <textarea
                            value={question.title}
                            onChange={(e) => setQuestion({ ...question, title: e.target.value })}
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 resize-none"
                            placeholder="Введіть текст запитання"
                        />
                            <div className="flex items-center gap-4 mt-4">
                                <p>Введіть відповідь: </p>
                                <input
                                    type="text"
                                    value={question.answers[0]?.text || ""}
                                    onChange={(e) => setQuestion({ ...question, answers: [{ text: e.target.value, id: nanoid() }] })}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                                    placeholder={`Введіть відповідь`}
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
                                        answers: Array(4).fill(null).map(() => ({ text: "", isCorrect: false }))
                                    });
                                    setQuestionType("");
                                    console.log(test);
                                }}
                            >
                                Зберегти
                            </button> 
                        </div>    
                    </div>
                )}
            </div>
            <div className="flex items-center justify-end mx-auto max-w-3xl">
                <button
                    onClick={handleCreateTest}
                    className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                >
                    Створити тест
                </button>
            </div>
            {modalOpen && (
                <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-1000">
                <div className="bg-white rounded-2xl p-6 w-[90%] max-w-[600px] shadow-xl">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Оберіть тип завдання</h3>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => handleSelect("multiple")}
                                className="w-full py-2 px-4 bg-[#FA8E66] text-white rounded-xl hover:bg-opacity-90 transition"
                            >
                                Тест з 4 відповідями
                            </button>
                            <button
                                onClick={() => handleSelect("matching")}
                                className="w-full py-2 px-4 bg-[#6C63FF] text-white rounded-xl hover:bg-opacity-90 transition"
                            >
                                Завдання на відповідність
                            </button>
                            <button
                                onClick={() => handleSelect("written")}
                                className="w-full py-2 px-4 bg-[#2F80ED] text-white rounded-xl hover:bg-opacity-90 transition"
                            >
                                З розгорнутою відповіддю
                            </button>
                        </div>
                        <button
                            onClick={() => setModalOpen(false)}
                            className="mt-4 text-sm text-gray-500 hover:underline text-center"
                        >
                            Скасувати
                        </button>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default CreateTest;