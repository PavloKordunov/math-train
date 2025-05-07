'use client'

import { useEffect, useState } from 'react'
import CustomRadio from '../../../../components/CustomRadio'
import { FaTimes } from 'react-icons/fa'
import TestNav from '@/components/TestNav'
import { useParams } from 'next/navigation'

type SavedAnswers = {
    multiple: { [taskId: string]: string };
    matching: { [taskId: string]: { [leftIndex: number]: string } };
    written: { [taskId: string]: string }; 
  };

const TestPage = () => {
    const params = useParams()
    const testId = params?.id

    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [matches, setMatches] = useState<{ [key: number]: string | null }>({
        0: null,
        1: null,
        2: null,
    });
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

    const handleAnswerSelect = (taskId: string, answerIndex: number) => {
      setSelectedAnswers(prev => ({
        ...prev,
        [taskId]: answerIndex
      }));
    };

    const [currentMatches, setCurrentMatches] = useState<{
        [taskId: string]: { [leftIndex: number]: string | null };
    }>({});

    const [answers, setAnswers] = useState<any>([])

    useEffect(() => {
        console.log(savedAnswers)
    }, [savedAnswers])
    
    useEffect(() => {
        const getTestById = async () => {
            try {
                const res = await fetch(`http://localhost:8080/api/test/${testId}`);
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
            const newSortedTasks: {
                multiple: any[];
                matching: any[];
                written: any[];
            } = {
                multiple: [],
                matching: [],
                written: []
            };
    
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
    
    useEffect(() => {
        console.log(sortedTasks)
    }, [sortedTasks])

    const handleEndTest = async() => {
        try {
            const res = await fetch(`http://localhost:8080/api/test/${test.id}/check`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(answers)
            })

            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    
    const handleSelectOption = (taskId: string, opt: string) => {
        setSelectedOption(opt);
      };
      
      const handleMatch = (taskId: string, index: number) => {
        if (selectedOption) {
          setCurrentMatches(prev => ({
            ...prev,
            [taskId]: {
              ...prev[taskId],
              [index]: selectedOption
            }
          }));
          setSelectedOption(null);
        }
      };
      
      const handleRemoveMatch = (taskId: string, index: number) => {
        setCurrentMatches(prev => ({
          ...prev,
          [taskId]: {
            ...prev[taskId],
            [index]: null
          }
        }));
      };
      
      const handleSaveMatching = (taskId: string) => {
        if (currentMatches[taskId]) {
          setSavedAnswers((prev: any) => ({
            ...prev,
            matching: {
              ...prev.matching,
              [taskId]: currentMatches[taskId]
            }
          }));
        }
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
            setAnswers((prev: any) => [
            ...prev,
            {taskId, answer, type}
        ])
    }

    useEffect(() => {
        console.log(answers)
    }, [answers])

    return (
        <div>
            <TestNav />
            <div className='relative mx-auto flex'>
                <div className="w-4/5 border border-2 border-gray-300 p-15">
                    <div className="py-2 px-4 bg-gray-200 border border-1 border-gray-300 mb-12">
                        <p className="text-center font-semibold text-[22px] ">Завдання 1-14 мають по пʼять варіантів відповіді, з яких лише один правильний. Виберіть правильний, на Вашу думку, варіант відповіді. Позначте відповідь і збережіть її.</p>
                    </div>
                    {sortedTasks.multiple.map((task) => {
                    const isSaved = Boolean(savedAnswers.multiple[task.id]);
                    const selectedAnswerIndex = selectedAnswers[task.id];
                    
                    return (
                        <div id={`task-${task.id}`} key={task.id}>
                        <div className="h-[2px] w-full bg-gray-300 mb-6"></div>
                        <h2 className="text-[24px] font-medium mb-8">Завдання {task.number}</h2>
                        <p className="text-[18px] mb-6 font-medium">{task.title}</p>
                        
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
                                <p>{answer.text}</p>
                            </div>
                            ))}
                        </div>
                        
                        <button 
                            className='bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold mb-6' 
                            disabled={isSaved || selectedAnswerIndex === undefined}
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
                    <div className="py-2 px-4 bg-gray-200 border border-1 border-gray-300 mb-12">
                        <p className='text-center font-semibold text-[22px]'>У завданнях 15-18 до кожного з трьох фрагентів інформації, позначених цифрою, доберіть один правильний, на Вашу думку, варіант, позначений буквою. Для цього натисніть курсором на інформацію, позначену буквою, а потім - на порожнє поле навпроти відповідної інформації, позначеної цифрою. Збережіть відповідь.</p>
                    </div>

                    {sortedTasks.matching.map((task) => {
                        const isSaved = !!savedAnswers.matching[task.id];
                        const taskMatches = currentMatches[task.id] || {};
                        const userAnswers = Object.entries(taskMatches)
                        .filter(([_, rightLetter]) => rightLetter !== null)
                        .map(([leftIndex, rightLetter]) => {
                          const rightPair = task.pairs.filter((pair: any) => pair.right.text)[Number(rightLetter?.charCodeAt(0)) - 65];
                          return {
                            left: {
                              rightId: rightPair?.right.id || ''
                            }
                          };
                        });

                        return (<div id={`task-${task.id}`} key={task.id}>
                            <div className="h-[2px] w-full bg-gray-300 mb-6"></div>
                            <h2 className="text-[24px] font-medium mb-8">Завдання {task.number}</h2>
                            <p className="text-[18px] mb-6 font-medium">{task.title}</p>
                            
                            <div className='flex gap-100 mb-8'>
                                <div className='flex flex-col gap-4 text-[16px] font-semibold'>
                                {task.pairs.filter((pair: any) => pair.left.text).map((pair: any, index: any) => (
                                    <p key={`left-${index}`}>{index + 1}. {pair.left.text}</p>
                                ))}
                                </div>
                                <div className='flex flex-col gap-4 text-[16px] font-semibold'>
                                {task.pairs.filter((pair: any) => pair.right.text).map((pair: any, index: any) => (
                                    <p key={`right-${index}`}>{String.fromCharCode(65 + index)}. {pair.right.text}</p>
                                ))}
                                </div>
                            </div>
                            
                            <div className='flex w-full gap-8'>
                                <div className="w-2/3 py-6 px-6 bg-[#D0EFFF] border rounded-lg border-2 border-gray-300 mb-8 flex">
                                <div className='flex w-1/2 flex-col gap-3 text-[18px] font-semibold'>
                                    {task.pairs.filter((pair: any) => pair.left.text).map((_: any, index: any) => (
                                    <div key={`left-box-${index}`} className='w-full py-2 px-4 bg-[#81D5FF] rounded-md'>
                                        <p>{index + 1}.</p>
                                    </div>
                                    ))}
                                </div>
                                
                                <div>
                                    {task.pairs.filter((pair: any) => pair.left.text).map((_: any, index: any) => (
                                    <div key={`arrow-${index}`} className='max-h-[43px] mb-2'>
                                        <span style={{ fontSize: '48px', color: '#555', height: '43px', display: "flex", alignItems: "center", justifyContent: "center", paddingBottom:'10px' }}>→</span>
                                    </div>
                                    ))}
                                </div>
                                
                                <div className='flex w-1/2 flex-col gap-3 text-[18px] font-semibold'>
                                    {task.pairs.filter((pair: any) => pair.left.text).map((_: any, index: any) => (
                                    <div
                                        key={`match-${index}`}
                                        className={`w-full h-[43px] flex items-center justify-between px-4 rounded-md cursor-pointer transition-all duration-200 ${
                                        taskMatches[index] ? 'bg-[#5EFF66]' : 'bg-white border border-gray-300'
                                        }`}
                                        onClick={() => handleMatch(task.id, index)}
                                    >
                                        {taskMatches[index] ? (
                                        <>
                                            <p>{taskMatches[index]}</p>
                                            <div
                                            className='bg-gray-200 p-2 cursor-pointer'
                                            onClick={(e) => {
                                                e.stopPropagation(); 
                                                handleRemoveMatch(task.id, index);
                                            }}
                                            >
                                            <FaTimes size={14} color="#000" />
                                            </div>
                                        </>
                                        ) : null}
                                    </div>
                                    ))}
                                </div>
                                </div>
                                
                                <div className="w-1/3 py-6 px-6 bg-[#ACFFB6] border rounded-lg border-2 border-gray-300 mb-8">
                                <div className='flex flex-col gap-3 text-[18px] font-semibold'>
                                    {task.pairs.filter((pair: any) => pair.right.text).map((pair: any, index: any) => (
                                    <div
                                        key={`option-${index}`}
                                        className={`cursor-pointer w-fit px-4 py-2 rounded-md font-semibold ${
                                        selectedOption === String.fromCharCode(65 + index) ? 'bg-gray-300' : 'bg-[#5EFF66]'
                                        }`}
                                        onClick={() => handleSelectOption(task.id, String.fromCharCode(65 + index))}
                                    >
                                        {String.fromCharCode(65 + index)}
                                    </div>
                                    ))}
                                </div>
                                </div>
                            </div>
                        
                            <button 
                                className='bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold mb-6' 
                                disabled={isSaved} 
                                onClick={() => {
                                    handleSaveMatching(task.id)
                                    handleAnswer(task.id, userAnswers, task.type)
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

                    <div className="py-2 px-4 bg-gray-200 border border-1 border-gray-300 mb-12">
                        <p className='text-center font-semibold text-[22px]'>Розвʼяжіть завдання 19-20. Одержані числові відповіді впишіть у спеціальне поле. Відповіді записуйте лише десятковим дробом, урахувавши положення коми. Знак «мінус» записуйте перед першою цифрою числа.
                        Збережіть відповідь.</p>
                    </div>

                    {sortedTasks.written.map((task: any) => {
                        const isSaved = !!savedAnswers.written[task.id];
                        return(<div id={`task-${task.id}`} key={task.id}>
                            <div className="h-[2px] w-full bg-gray-300 mb-6"></div>

                            <h2 className="text-[24px] font-medium mb-8">Завдання {task.number}</h2>
                            <p className="text-[18px] mb-6 font-medium">{task.title}</p>

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
                                disabled={isSaved} 
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
                <div className="w-1/6 absolute right-10 top-0 h-fit bg-white border-2 border-gray-300 shadow-md p-4 overflow-y-auto">
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
            <button 
                className='bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold mb-6' 
                onClick={handleEndTest}
            >
                завершити
            </button>
        </div>
    )
}

export default TestPage