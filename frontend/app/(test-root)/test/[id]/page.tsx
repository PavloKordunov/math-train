'use client'

import { useEffect, useState } from 'react'
import CustomRadio from '../../../../components/CustomRadio'
import { FaTimes } from 'react-icons/fa'
import TestNav from '@/components/TestNav'
import { useParams } from 'next/navigation'

const TestPage = () => {
    const params = useParams()
    const testId = params?.id

    const [saved, setSaved] = useState(false)
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
    
    
    const handleSelectOption = (opt: string) => {
        setSelectedOption(opt);
    };
    
    const handleMatch = (index: number) => {
        if (selectedOption) {
            setMatches((prev) => ({
                ...prev,
                [index]: selectedOption,
            }));
            setSelectedOption(null);
        }
    };
    
    const handleRemoveMatch = (index: number) => {
        setMatches((prev: any) => ({
            ...prev,
            [index]: null,
        }));
    };

    return (
        <div>
            <TestNav />
            <div className='relative mx-auto flex'>
                <div className="w-4/5 border border-2 border-gray-300 p-15">
                    <div className="py-2 px-4 bg-gray-200 border border-1 border-gray-300 mb-12">
                        <p className="text-center font-semibold text-[22px] ">Завдання 1-14 мають по пʼять варіантів відповіді, з яких лише один правильний. Виберіть правильний, на Вашу думку, варіант відповіді. Позначте відповідь і збережіть її.</p>
                    </div>
                    {sortedTasks.multiple.map((task) => (
                        <div key={task.id}>
                            <div className="h-[2px] w-full bg-gray-300 mb-6"></div>
    
                            <h2 className="text-[24px] font-medium mb-8">Завдання {task.number}</h2>
                            <p className="text-[18px] mb-6 font-medium">{task.title}</p>
                            <div className="flex flex-col gap-3 w-full mb-8">
                                {task.answers.map((answer: any, index: any) => (
                                    <div key={`${task.id}-${index}`} className="py-2 px-3 w-full border-2 border-gray-300 rounded-sm flex items-center gap-3">
                                        <CustomRadio />
                                        <p>{answer.text}</p>
                                    </div>
                                ))}
                            </div>
                            <button className='bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold mb-6' disabled={saved} onClick={() => setSaved(true)}>Зберегти відповідь</button>
                            {saved && (
                                <div className='mb-8'>
                                    <div className="h-[2px] w-full bg-rose-600 mb-1"></div>
                                    <p className='text-rose-600 text-[16px] font-semibold'>Відповідь збережено</p>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="py-2 px-4 bg-gray-200 border border-1 border-gray-300 mb-12">
                        <p className='text-center font-semibold text-[22px]'>У завданнях 15-18 до кожного з трьох фрагентів інформації, позначених цифрою, доберіть один правильний, на Вашу думку, варіант, позначений буквою. Для цього натисніть курсором на інформацію, позначену буквою, а потім - на порожнє поле навпроти відповідної інформації, позначеної цифрою. Збережіть відповідь.</p>
                    </div>

                    {sortedTasks.matching.map((task) => (
                        <div key={task.id}>
                            <div className="h-[2px] w-full bg-gray-300 mb-6"></div>
                            <h2 className="text-[24px] font-medium mb-8">Завдання {task.number}</h2>
                            <p className="text-[18px] mb-6 font-medium">{task.title}</p>
                            
                            <div className='flex gap-100 mb-8'>
                                <div className='flex flex-col gap-4 text-[16px] font-semibold'>
                                {task.pairs.filter((pair: any) => pair.left).map((pair: any, index: any) => (
                                    <p key={`left-${index}`}>{index + 1}. {pair.left}</p>
                                ))}
                                </div>
                                <div className='flex flex-col gap-4 text-[16px] font-semibold'>
                                {task.pairs.filter((pair: any) => pair.right).map((pair: any, index: any) => (
                                    <p key={`right-${index}`}>{String.fromCharCode(65 + index)}. {pair.right}</p>
                                ))}
                                </div>
                            </div>
                            
                            <div className='flex w-full gap-8'>
                                <div className="w-2/3 py-6 px-6 bg-[#D0EFFF] border rounded-lg border-2 border-gray-300 mb-8 flex">
                                <div className='flex w-1/2 flex-col gap-3 text-[18px] font-semibold'>
                                    {task.pairs.filter((pair: any) => pair.left).map((_: any, index: any) => (
                                    <div key={`left-box-${index}`} className='w-full py-2 px-4 bg-[#81D5FF] rounded-md'>
                                        <p>{index + 1}.</p>
                                    </div>
                                    ))}
                                </div>
                                
                                <div>
                                    {task.pairs.filter((pair: any) => pair.left).map((_: any, index: any) => (
                                    <div key={`arrow-${index}`} className='max-h-[43px] mb-2'>
                                        <span style={{ fontSize: '48px', color: '#555', height: '43px', display: "flex", alignItems: "center", justifyContent: "center", paddingBottom:'10px' }}>→</span>
                                    </div>
                                    ))}
                                </div>
                                
                                <div className='flex w-1/2 flex-col gap-3 text-[18px] font-semibold'>
                                    {task.pairs.filter((pair: any) => pair.left).map((_: any, index: any) => (
                                    <div
                                        key={`match-${index}`}
                                        className={`w-full h-[43px] flex items-center justify-between px-4 rounded-md cursor-pointer transition-all duration-200 ${
                                        matches[index] ? 'bg-[#5EFF66]' : 'bg-white border border-gray-300'
                                        }`}
                                        onClick={() => handleMatch(index)}
                                    >
                                        {matches[index] ? (
                                        <>
                                            <p>{matches[index]}</p>
                                            <div
                                            className='bg-gray-200 p-2 cursor-pointer'
                                            onClick={(e) => {
                                                e.stopPropagation(); 
                                                handleRemoveMatch(index);
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
                                    {task.pairs.filter((pair: any) => pair.right).map((pair: any, index: any) => (
                                    <div
                                        key={`option-${index}`}
                                        className={`cursor-pointer w-fit px-4 py-2 rounded-md font-semibold ${
                                        selectedOption === String.fromCharCode(65 + index) ? 'bg-gray-300' : 'bg-[#5EFF66]'
                                        }`}
                                        onClick={() => handleSelectOption(String.fromCharCode(65 + index))}
                                    >
                                        {String.fromCharCode(65 + index)}
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <button className='bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold mb-6' disabled={saved} onClick={() => setSaved(true)}>
                            Зберегти відповідь
                        </button>
                        {saved && (
                            <div className='mb-8'>
                            <div className="h-[2px] w-full bg-rose-600 mb-1"></div>
                            <p className='text-rose-600 text-[16px] font-semibold'>Відповідь збережено</p>
                            </div>
                        )}
                        </div>
                    ))}

                    <div className="py-2 px-4 bg-gray-200 border border-1 border-gray-300 mb-12">
                        <p className='text-center font-semibold text-[22px]'>Розвʼяжіть завдання 19-20. Одержані числові відповіді впишіть у спеціальне поле. Відповіді записуйте лише десятковим дробом, урахувавши положення коми. Знак «мінус» записуйте перед першою цифрою числа.
                        Збережіть відповідь.</p>
                    </div>

                    {sortedTasks.written.map((task: any) => (
                        <div>
                            <div className="h-[2px] w-full bg-gray-300 mb-6"></div>

                            <h2 className="text-[24px] font-medium mb-8">Завдання {task.number}</h2>
                            <p className="text-[18px] mb-6 font-medium">{task.title}</p>

                            <p className="text-[18px] mb-6 font-medium">Упишіть відповідь</p>
                            <input
                                type="text"
                                className="w-100 block border border-gray-300 rounded-xl px-4 py-2 mb-8"
                            />

                            <button className='bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold mb-6' disabled={saved} onClick={() => setSaved(true)}>Зберегти відповідь</button>
                            {saved && (
                                <div className='mb-8'>
                                    <div className="h-[2px] w-full bg-rose-600 mb-1"></div>
                                    <p className='text-rose-600 text-[16px] font-semibold'>Відповідь збережено</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="w-1/6 absolute right-10 top-0 h-fit bg-white border-2 border-gray-300 shadow-md p-4 overflow-y-auto">
                    <h2 className="text-lg font-semibold mb-4">Завдання</h2>
                    <div className="grid grid-cols-4 gap-2">
                        {Array.from({ length: 22 }).map((_, i) => (
                            <button key={i} className="w-12 h-12 bg-red-500 text-white rounded hover:bg-red-600">
                            {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestPage