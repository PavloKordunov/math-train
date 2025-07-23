import React, { useState } from 'react'
import { HiOutlineBookOpen } from 'react-icons/hi2'
import { PiChalkboardTeacherLight } from 'react-icons/pi'
import { FaSchool, FaCheck } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'
import { divide } from 'lodash'

const PlansPage = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(2)
    const [period, setPeriod] = useState('month')

    const periods = {
        month: '1 місяць',
        '3mo': '3 міс.',
        '6mo': '6 міс.',
        year: '1 рік',
    }

    const priceMap: any = {
        free: {
            month: 0,
            '3mo': 0,
            '6mo': 0,
            year: 0,
        },
        basic: {
            month: 239,
            '3mo': 649,
            '6mo': 1199,
            year: 1999,
        },
        standard: {
            month: 439,
            '3mo': 1199,
            '6mo': 1999,
            year: 3299,
        },
        premium: {
            month: 729,
            '3mo': 2099,
            '6mo': 3599,
            year: 5899,
        },
    }

    const plans = [
        {
            id: 'free',
            name: 'Безкоштовний',
            image: <HiOutlineBookOpen size={100} />,
            features: [
                'Добавляйте до 3 учнів',
                'Створюйте до 5 тестів',
                'Доступ до аналітики учня',
                'Обмежений доступ до тестів платформи',
            ],
        },
        {
            id: 'basic',
            name: 'Базовий',
            image: <PiChalkboardTeacherLight size={100} />,
            features: [
                'Добавляйте до 10 учнів',
                'Створюйте до 30 тестів',
                'Доступ до аналітики учня',
                'Обмежений доступ до тестів платформи',
            ],
        },
        {
            id: 'standard',
            name: 'Стандартний',
            image: <FaSchool size={100} />,
            features: [
                'Добавляйте до 25 учнів',
                'Створюйте до 100 тестів',
                'Доступ до аналітики учня',
                'Обмежений доступ до тестів платформи',
            ],
        },
        {
            id: 'premium',
            name: 'Преміум',
            image: <GiBrain size={100} />,
            features: [
                'Добавляйте до 100 учнів',
                'Створюйте до 400 тестів',
                'Доступ до аналітики учня',
                'Обмежений доступ до тестів платформи',
            ],
        },
    ]

    return (
        <div className="fixed inset-0 bg-gray-100 flex flex-col items-center z-[1000] p-6 overflow-y-auto">
            <div className="bg-white rounded-full shadow-md px-2 py-1 flex gap-2 mt-25">
                {Object.entries(periods).map(([key, label]) => (
                    <button
                        key={key}
                        onClick={() => setPeriod(key)}
                        className={`px-4 py-2 text-sm rounded-full transition-all font-medium ${
                            period === key
                                ? 'bg-cyan-400 text-white'
                                : 'text-gray-500 hover:text-black'
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {plans.map((plan, i) => {
                    const isHovered = hoveredIndex === i
                    const mainColor = isHovered ? '#00FFFF' : '#6AFCCD'
                    const price = priceMap[plan.id][period]

                    return (
                        <div key={i} className="mt-22 relative">
                            {i === 2 && (
                                <div
                                    className={`absolute z-50 -top-10 w-full bg-${mainColor} py-3 rounded-t-2xl text-center text-white font-semibold text-2xl transition-all duration-300 ${
                                        isHovered
                                            ? 'transform scale-110 -top-18'
                                            : ''
                                    }`}
                                    style={{ backgroundColor: mainColor }}
                                >
                                    Найпопулярніше
                                </div>
                            )}
                            <div
                                className="w-full max-w-[350px] h-full"
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div
                                    className={`bg-white rounded-2xl py-6 px-10 w-full h-full shadow-xl transition-all duration-300 ${
                                        isHovered ? 'transform scale-110' : ''
                                    }`}
                                    style={{
                                        transformOrigin: 'center',
                                        willChange: 'transform',
                                        minHeight: '100%',
                                    }}
                                >
                                    <div className="flex flex-col items-center">
                                        <p
                                            className="text-3xl font-semibold mb-6"
                                            style={{ color: mainColor }}
                                        >
                                            {plan.name}
                                        </p>
                                        <div className="flex gap-1 mb-2">
                                            <p className="text-2xl font-medium text-gray-500">
                                                ₴
                                            </p>
                                            <p className="text-6xl font-semibold text-black leading-none">
                                                {price}
                                            </p>
                                        </div>
                                        <div className="mb-6">
                                            {React.cloneElement(plan.image, {
                                                color: mainColor,
                                            })}
                                        </div>
                                    </div>

                                    {plan.features.map((feature, j) => (
                                        <div
                                            key={j}
                                            className="flex gap-3 my-3"
                                        >
                                            <div
                                                className="flex items-center justify-center rounded-full shrink-0"
                                                style={{
                                                    minWidth: '25px',
                                                    minHeight: '25px',
                                                    width: '25px',
                                                    height: '25px',
                                                    backgroundColor: mainColor,
                                                    boxShadow: `0 0 10px 4px ${mainColor}80`,
                                                }}
                                            >
                                                <FaCheck
                                                    size={14}
                                                    color="white"
                                                />
                                            </div>

                                            <p className="text-lg text-gray-400">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}

                                    <div
                                        className={`mt-6 flex justify-center min-h-[48px] transition-opacity duration-300 ${
                                            isHovered
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        }`}
                                    >
                                        <a
                                            href="https://send.monobank.ua/jar/4xM1w9u7kH"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`px-20 py-2 bg-cyan-400 text-white text-xl font-semibold rounded-full shadow-md flex text-center ${
                                                isHovered ? 'block' : 'hidden'
                                            }`}
                                        >
                                            Вибрати
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PlansPage
