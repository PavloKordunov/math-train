'use client'

import React, { useState, useEffect } from "react";
import LatextTranform from "@/helpers/latexTransform";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

interface MatchingTaskProps {
  task: any;
  isSaved: boolean;
  onSave: (userAnswers: any) => void;
}

const MatchingTask: React.FC<MatchingTaskProps> = ({ task, isSaved, onSave }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [taskMatches, setTaskMatches] = useState<{ [leftIndex: number]: string | null }>({});
    const [shuffledRightPairs, setShuffledRightPairs] = useState<any[]>([]);

    const shuffleArray = (array: any[]) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    useEffect(() => {
        const rightPairs = task.pairs.filter((pair: any) => pair.right);
        setShuffledRightPairs(shuffleArray(rightPairs));
    }, [task.pairs]);

    const handleSelectOption = (opt: string) => {
        setSelectedOption(opt);
    };
      
    const handleMatch = (index: number) => {
        if (selectedOption) {
            setTaskMatches(prev => ({
                ...prev,
                [index]: selectedOption
            }));
            setSelectedOption(null);
        }
    };
      
    const handleRemoveMatch = (index: number) => {
        setTaskMatches(prev => ({
            ...prev,
            [index]: null
        }));
    };

    const handleSaveMatching = () => {
        const userAnswers = Object.entries(taskMatches)
            .filter(([_, rightLetter]) => rightLetter !== null)
            .map(([leftIndex, rightLetter]) => {
                const rightPairIndex = Number(rightLetter?.charCodeAt(0)) - 65;
                const rightPair = shuffledRightPairs[rightPairIndex];
                const leftPair = task.pairs.filter((pair: any) => pair.left)[leftIndex];
                return {
                    left: {
                        rightId: rightPair?.right.id || '',
                        rightText: rightPair?.right.text,
                        leftId: leftPair?.left.id,
                        leftText: leftPair?.left.text,
                    }
                };
            });
        onSave(userAnswers);
    };

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
            
            <div className='flex gap-100 mb-8'>
                <div className='flex flex-col gap-4 text-[16px] font-semibold'>
                {task.pairs.filter((pair: any) => pair.left.text).map((pair: any, index: any) => (
                    <div className='flex items-center'  key={`left-${index}`}>
                        <p>{index + 1}. </p>
                        <LatextTranform content={pair.left.text} className="text-[18px] ml-2 font-medium" />
                    </div>
                ))}
                </div>
                <div className='flex flex-col gap-4 text-[16px] font-semibold'>
                {shuffledRightPairs.map((pair: any, index: any) => (
                    <div className='flex items-center' key={`right-${index}`}>
                      <p>{String.fromCharCode(65 + index)}. </p>
                      <LatextTranform content={pair.right.text} className="text-[18px] ml-2 font-medium" />
                    </div>
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
                        onClick={() => handleMatch(index)}
                    >
                        {taskMatches[index] ? (
                        <>
                            <p>{taskMatches[index]}</p>
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
                    {shuffledRightPairs.map((pair: any, index: any) => (
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
        
            <button 
                className='bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold mb-6' 
                onClick={handleSaveMatching}
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
};

export default React.memo(MatchingTask);