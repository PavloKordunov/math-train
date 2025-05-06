'use client'

import { useState } from 'react'
import CustomRadio from '../../../components/CustomRadio'
import { FaTimes } from 'react-icons/fa'

const TestPage = () => {

    const [saved, setSaved] = useState(false)

    return (
        <div className="border border-2 border-gray-300 p-15">
            <div className="py-2 px-4 bg-gray-200 border border-1 border-gray-300 mb-12">
                <p className="text-center font-semibold text-[22px] ">Завдання 1-14 мають по пʼять варіантів відповіді, з яких лише один правильний. Виберіть правильний, на Вашу думку, варіант відповіді. Позначте відповідь і збережіть її.</p>
            </div>
            <div className="h-[2px] w-full bg-gray-300 mb-6"></div>
            <div>
                <h2 className="text-[24px] font-medium mb-8">Завдання 1</h2>
                <p className="text-[18px] mb-6 font-medium">З кошика, у якому 4 зелених і 5 жовтих яблук, виймають навмання одне яблуко. Яка ймовірність того, що це яблуко буде жовтого кольору?</p>
                <div className="flex flex-col gap-3 w-full mb-8">
                    <div className="py-2 px-3 w-full border-2 border-gray-300 rounded-sm flex items-center gap-3">
                        <CustomRadio />
                        <p>1/2</p>
                    </div>
                    <div className="py-2 px-3 w-full border-2 border-gray-300 rounded-sm flex items-center gap-3">
                        <CustomRadio />
                        <p>1/9</p>
                    </div>
                    <div className="py-2 px-3 w-full border-2 border-gray-300 rounded-sm flex items-center gap-3">
                        <CustomRadio />
                        <p>4/9</p>
                    </div>
                    <div className="py-2 px-3 w-full border-2 border-gray-300 rounded-sm flex items-center gap-3">
                        <CustomRadio />
                        <p>5/9</p>
                    </div>
                    <div className="py-2 px-3 w-full border-2 border-gray-300 rounded-sm flex items-center gap-3">
                        <CustomRadio />
                        <p>1/5</p>
                    </div>
                </div>
                <button className='bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold mb-6' disabled={saved} onClick={() => setSaved(true)}>Зберегти відповідь</button>
                {saved && (
                    <div className='mb-8'>
                        <div className="h-[2px] w-full bg-rose-600 mb-1"></div>
                        <p className='text-rose-600 text-[16px] font-semibold'>Відповідь збережено</p>
                    </div>
                )}
            </div>
            <div className="py-2 px-4 bg-gray-200 border border-1 border-gray-300 mb-12">
                <p className='text-center font-semibold text-[22px]'>У завданнях 15-18 до кожного з трьох фрагентів інформації, позначених цифрою, доберіть один правильний, на Вашу думку, варіант, позначений буквою. Для цього натисніть курсором на інформацію, позначену буквою, а потім - на порожнє поле навпроти відповідної інформації, позначеної цифрою. Збережіть відповідь.</p>
            </div>
            <div className="h-[2px] w-full bg-gray-300 mb-6"></div>
            <div>
                <h2 className="text-[24px] font-medium mb-8">Завдання 15</h2>
                <p className="text-[18px] mb-6 font-medium">Увідповідніть функцію (1-3) та її вдастивість (А-Д)</p>
                <div className='flex gap-100 mb-8'>
                    <div className='flex flex-col gap-4 text-[16px] font-semibold'>
                        <p>1. f(x) = 2^x</p>
                        <p>2. f(x) = tgx</p>
                        <p>3. f(x) = 2x + 1</p>
                    </div>
                    <div className='flex flex-col gap-4 text-[16px] font-semibold'>
                        <p>А. функція непарна</p>
                        <p>Б. областю значень є множина (0, +%)</p>
                        <p>В. областю визначення є множина [0, +%)</p>
                        <p>Г. функція монотонно спадає</p>
                        <p>Д. графік функції маєлише дві точки перетину з осями координат</p>
                    </div>
                </div>
                <div className='flex w-full gap-8'>
                    <div className="w-2/3 py-6 px-6 bg-[#D0EFFF] border rounded-lg border-2 border-gray-300 mb-8 flex">
                        <div className='flex w-1/2 flex-col gap-3 text-[18px] font-semibold'>
                            <div className='w-full py-2 px-4 bg-[#81D5FF] rounded-md'>
                                <p>1.</p>
                            </div>
                            <div className='w-full py-2 px-4 bg-[#81D5FF] rounded-md'>
                                <p>2.</p>
                            </div>
                            <div className='w-full py-2 px-4 bg-[#81D5FF] rounded-md'>
                                <p>3.</p>
                            </div>
                        </div>
                        <div>
                            <div className='max-h-[43px] mb-2'>
                                <span style={{ fontSize: '48px', color: '#555', height: '43px', display: "flex", alignItems: "center", justifyContent: "center", paddingBottom:'10px' }}>→</span>
                            </div>
                            <div className='max-h-[43px] mb-2'>
                                <span style={{ fontSize: '48px', color: '#555', height: '43px', display: "flex", alignItems: "center", justifyContent: "center", paddingBottom:'10px' }}>→</span>
                            </div>
                            <div className='max-h-[43px] mb-2'>
                                <span style={{ fontSize: '48px', color: '#555', height: '43px', display: "flex", alignItems: "center", justifyContent: "center", paddingBottom:'10px' }}>→</span>
                            </div>
                        </div>
                        <div className='flex w-1/2 flex-col gap-3 text-[18px] font-semibold'>
                            <div className='w-full flex items-center justify-between py-2 px-4 bg-[#5EFF66] rounded-md'>
                                <p>1.</p>
                                <div className='bg-gray-200 p-2'>
                                    <FaTimes size={14} color="#000"/>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between  py-2 px-4 bg-[#5EFF66] rounded-md'>
                                <p>2.</p>
                                <div className='bg-gray-200 p-2'>
                                    <FaTimes size={14} color="#000"/>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between  py-2 px-4 bg-[#5EFF66] rounded-md'>
                                <p>3.</p>
                                <div className='bg-gray-200 p-2'>
                                    <FaTimes size={14} color="#000"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 py-6 px-6 bg-[#ACFFB6] border rounded-lg border-2 border-gray-300 mb-8">
                    <div className='flex flex-col gap-3 text-[18px] font-semibold'>
                        <div className='w-fit py-2 px-4 bg-[#5EFF66] rounded-md'>
                            <p>1.</p>
                        </div>
                        <div className='w-fit py-2 px-4 bg-[#5EFF66] rounded-md'>
                            <p>2.</p>
                        </div>
                        <div className='w-fit py-2 px-4 bg-[#5EFF66] rounded-md'>
                            <p>3.</p>
                        </div>
                        <div className='w-fit py-2 px-4 bg-[#5EFF66] rounded-md'>
                            <p>4.</p>
                        </div>
                        <div className='w-fit py-2 px-4 bg-[#5EFF66] rounded-md'>
                            <p>5.</p>
                        </div>
                    </div>
                    </div>
                </div>
                
                <button className='bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold mb-6' disabled={saved} onClick={() => setSaved(true)}>Зберегти відповідь</button>
                {saved && (
                    <div className='mb-8'>
                        <div className="h-[2px] w-full bg-rose-600 mb-1"></div>
                        <p className='text-rose-600 text-[16px] font-semibold'>Відповідь збережено</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TestPage