'use client'

import { useEffect, useState } from 'react'
import CustomRadio from '../../../components/CustomRadio'
import TestNav from '@/components/userTest/TestNav'
import { useParams } from 'next/navigation'
import TimeTracker from '@/components/userTest/TimeTracker'
import { useUser } from '@/hooks/useUser'
import LatextTranform from "@/helpers/latexTransform"
import Image from 'next/image'
import MatchingTask from '@/components/userTest/MatchingTasks'
import AdditionalDocs from '@/components/userTest/AdditionalDocs'

type SavedAnswers = {
    multiple: { [taskId: string]: string };
    matching: { [taskId: string]: { [leftIndex: number]: string } };
    written: { [taskId: string]: string }; 
};

const TestPage = () => {
    const params = useParams()
    const testId = params?.id
    const {user} = useUser()
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const [test, setTest] = useState<any | null>({})
    const [sortedTasks, setSortedTasks] = useState<{
        multiple: any[];
        matching: any[];
        written: any[];
    }>({
        multiple: [],
        matching: [],
        written: []
    })

    const [savedAnswers, setSavedAnswers] = useState<SavedAnswers>({
        multiple: {},
        matching: {},
        written: {}
    });

    const [writtenAnswers, setWrittenAnswers] = useState<{[taskId: string]: string}>({});
    const [selectedAnswers, setSelectedAnswers] = useState<{[taskId: string]: number}>({});
    const [answers, setAnswers] = useState<any>([])
    const [testResult, setTestResult] = useState<any>({})
    const [active, setActive] = useState(false)

    // useEffect(() => {
    //     console.log(savedAnswers)
    //     console.log("Answers: ", answers)
    // }, [savedAnswers, answers])
    
    useEffect(() => {
        const getTestById = async () => {
            try {
                const res = await fetch(`${API_URL}/api/test/${testId}`);
                const data = await res.json();
                console.log(data);
                setTest(data);
                if (data.tasks) {
                    sortTests(data.tasks);
                }
            } catch (error) {
                console.log(error);
            }
        };
    
        const sortTests = (tasks: any[]) => {
            const newSortedTasks = {
                multiple: [],
                matching: [],
                written: []
            } as any;
    
            tasks.forEach((task: any) => {
                if (task.type === 'multiple') {
                    newSortedTasks.multiple.push(task);
                } else if (task.type === 'matching') {
                    newSortedTasks.matching.push(task);
                } else if (task.type === 'written') {
                    newSortedTasks.written.push(task);
                }
            });
    
            setSortedTasks(newSortedTasks);
        };
    
        getTestById();
    }, [testId]);

    
    const handleEndTest = async() => {
        try {
            const res = await fetch(`${API_URL}/api/test/${test.id}/check/${user?.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(answers)
            })

            const data = await res.json()
            setTestResult(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleAnswerSelect = (taskId: string, answerIndex: number) => {
      setSelectedAnswers(prev => ({
        ...prev,
        [taskId]: answerIndex
      }));
    };

    const handleSaveMultiple = (taskId: string, answerIndex: number) => {
        setSavedAnswers((prev: any) => ({
          ...prev,
          multiple: {
            ...prev.multiple,
            [taskId]: answerIndex
          }
        }));
      };
    
    const handleSaveWritten = (taskId: string, answerText: string) => {
    if(savedAnswers.written[taskId.toString()]){
    console.log("Its already here")
    }
    setSavedAnswers(prev => ({
        ...prev,
        written: {
        ...prev.written,
        [taskId]: answerText
        }
    }));
    };

    const scrollToTask = (taskId: string) => {
        const element = document.getElementById(`task-${taskId}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleAnswer = (taskId: any, answer: any, type: any) => {
        setAnswers((prev: any) => { 
            const filtred = prev?.filter((ans: any) => ans.taskId !== taskId)
            return  [...filtred, {taskId, answer, type}]
        })
    }

    return (
        <div className="w-full px-20">
        <div className="relative">
            <div className="px-20 fixed inset-x-0 z-1000">
                <TimeTracker test={test} handleEndTest={handleEndTest} answers={answers} testResult={testResult}/>
            </div>
        </div>
        <div className="py-50">
        <div>
            <TestNav active={active} setActive={setActive} />
            {!active ? (
            <div className='relative mx-auto flex'>
                <div className="w-4/5 border border-2 border-gray-300 p-15">
                    {sortedTasks.multiple.length > 0 && <div className="py-2 px-4 bg-gray-200 border border-1 border-gray-300 mb-12">
                        <p className="text-center font-semibold text-[22px] ">Завдання 1-{sortedTasks.multiple.length} мають по пʼять варіантів відповіді, з яких лише один правильний. Виберіть правильний, на Вашу думку, варіант відповіді. Позначте відповідь і збережіть її.</p>
                    </div>}
                    {sortedTasks.multiple.map((task) => {
                    const isSaved = Boolean(savedAnswers.multiple[task.id]);
                    const selectedAnswerIndex = selectedAnswers[task.id];
                    
                    return (
                        <div id={`task-${task.id}`} key={task.id}>
                        <div className="h-[2px] w-full bg-gray-300 mb-6"></div>
                        <h2 className="text-[24px] font-medium mb-8">Завдання {task.number}</h2>
                        <LatextTranform content={task.title} className="text-[18px] mb-6 font-medium" />
                        {task.image && <div className="w-full h-fit overflow-hidden rounded-[21px]"> 
                            <Image 
                                src={task.image} 
                                alt={task.title} 
                                width={237} 
                                height={237}
                                className="w-full h-full object-cover" 
                            />
                        </div>}
                        
                        <div className="flex flex-col gap-3 w-full mb-8">
                            {task.answers.map((answer: any) => (
                            <div 
                                key={`${task.id}-${answer.id}`}
                                className="py-2 px-3 w-full border-2 border-gray-300 rounded-sm flex items-center gap-3 cursor-pointer"
                                onClick={() => handleAnswerSelect(task.id, answer.id)}
                            >
                                <CustomRadio
                                checked={selectedAnswerIndex === answer.id}
                                onChange={() => handleAnswerSelect(task.id, answer.id)}
                                />
                                <LatextTranform content={answer.text} />
                            </div>
                            ))}
                        </div>
                        
                        <button 
                            className='bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold mb-6' 
                            // disabled={isSaved || selectedAnswerIndex === undefined}
                            onClick={() => {
                                handleSaveMultiple(task.id, selectedAnswerIndex)
                                handleAnswer(task.id, selectedAnswerIndex, task.type)
                            }}
                        >
                            Зберегти відповідь
                        </button>
                        
                        {isSaved && (
                            <div className='mb-8'>
                            <div className="h-[2px] w-full bg-rose-600 mb-1"></div>
                            <p className='text-rose-600 text-[16px] font-semibold'>Відповідь збережено</p>
                            </div>
                        )}
                        </div>
                    );
                    })}
                    {sortedTasks.matching.length > 0 && <div className="py-2 px-4 bg-gray-200 border border-1 border-gray-300 mb-12">
                        <p className='text-center font-semibold text-[22px]'>У завданнях {sortedTasks.matching[0]?.number}-{sortedTasks.matching[sortedTasks.matching.length-1]?.number} до кожного з трьох фрагентів інформації, позначених цифрою, доберіть один правильний, на Вашу думку, варіант, позначений буквою. Для цього натисніть курсором на інформацію, позначену буквою, а потім - на порожнє поле навпроти відповідної інформації, позначеної цифрою. Збережіть відповідь.</p>
                    </div>}

                    {sortedTasks.matching.map((task) => {
                        const isSaved = !!savedAnswers.matching[task.id];
                        return (
                            <MatchingTask 
                                key={task.id}
                                task={task}
                                isSaved={isSaved}
                                onSave={(userAnswers: any) => {
                                    setSavedAnswers(prev => ({
                                        ...prev,
                                        matching: {
                                            ...prev.matching,
                                            [task.id]: userAnswers
                                        }
                                    }));
                                    handleAnswer(task.id, userAnswers, task.type);
                                }}
                            />
                        );
                    })}

                    { sortedTasks.written.length > 0 && <div className="py-2 px-4 bg-gray-200 border border-1 border-gray-300 mb-12">
                        <p className='text-center font-semibold text-[22px]'>Розвʼяжіть завдання {sortedTasks.written[0]?.number}-{sortedTasks.written[sortedTasks.written.length-1]?.number}. Одержані числові відповіді впишіть у спеціальне поле. Відповіді записуйте лише десятковим дробом, урахувавши положення коми. Знак «мінус» записуйте перед першою цифрою числа.
                        Збережіть відповідь.</p>
                    </div>}

                    {sortedTasks.written.map((task: any) => {
                        const isSaved = !!savedAnswers.written[task.id];
                        return(<div id={`task-${task.id}`} key={task.id}>
                            <div className="h-[2px] w-full bg-gray-300 mb-6"></div>

                            <h2 className="text-[24px] font-medium mb-8">Завдання {task.number}</h2>
                            <LatextTranform content={task.title} className="text-[18px] mb-6 font-medium" />
                            {task.image && <div className="w-full h-fit overflow-hidden rounded-[21px]"> 
                                <Image 
                                    src={task.image} 
                                    alt={task.title} 
                                    width={237} 
                                    height={237}
                                    className="w-full h-full object-cover" 
                                />
                            </div>}

                            <p className="text-[18px] mb-6 font-medium">Упишіть відповідь</p>
                            <input
                                type="text"
                                value={writtenAnswers[task.id] || ''}
                                onChange={(e) => setWrittenAnswers(prev => ({
                                  ...prev,
                                  [task.id]: e.target.value
                                }))}
                                className="w-100 block border border-gray-300 rounded-xl px-4 py-2 mb-8"
                            />
                            <button 
                                className='bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold mb-6' 
                                // disabled={isSaved} 
                                onClick={() => {
                                    handleSaveWritten(task.id,  writtenAnswers[task.id])
                                    handleAnswer(task.id, writtenAnswers[task.id], task.type )
                                }}
                            >
                                Зберегти відповідь
                            </button>
                            {isSaved && (
                                <div className='mb-8'>
                                <div className="h-[2px] w-full bg-rose-600 mb-1"></div>
                                <p className='text-rose-600 text-[16px] font-semibold'>Відповідь збережено</p>
                                </div>
                            )}
                        </div>
                    )})}
                </div>
                <div className="w-1/6 fixed right-20 -transform-x-1/2 -transform-y-1/2 h-fit bg-white border-2 border-gray-300 shadow-md p-4 overflow-y-auto">
                    <h2 className="text-lg font-semibold mb-4">Завдання</h2>
                    <div className="grid grid-cols-4 gap-2">
                        {test?.tasks?.map((task: any) => {
                            const isSaved = 
                            (task.type === 'multiple' && savedAnswers.multiple[task.id]) ||
                            (task.type === 'matching' && savedAnswers.matching[task.id]) ||
                            (task.type === 'written' && savedAnswers.written[task.id]);
                            
                            return (
                            <button 
                                key={task.id}
                                className={`w-12 h-12 ${isSaved ? 'bg-red-500' : 'bg-gray-100'} text-${isSaved ? 'white' : 'black'} border-1 border-gray-300 rounded hover:bg-${isSaved ? 'red-600' : 'gray-200'}`}
                                onClick={() => scrollToTask(task.id)}
                            >
                                {task.number}
                            </button>
                            );
                        })}
                    </div>
                </div>
            </div>
            ) : (
                <AdditionalDocs />
            )}
        </div>
        </div>
    </div>
    )
}

export default TestPage