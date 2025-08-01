'use client'
import Link from 'next/link'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import {
    FaBookOpen,
    FaCalculator,
    FaFeatherAlt,
    FaPenFancy,
    FaUserPlus,
    FaTimes,
} from 'react-icons/fa'

const subjects = [
    {
        name: 'Математика',
        value: 'Mathematics',
        color: '#FDCB6E',
        icon: <FaCalculator size={28} />,
    },
    {
        name: 'Українська мова',
        value: 'Ukrainian',
        color: '#A29BFE',
        icon: <FaPenFancy size={28} />,
    },
    {
        name: 'Англійська мова',
        value: 'English',
        color: '#74B9FF',
        icon: <FaBookOpen size={28} />,
    },
    {
        name: 'Історія України',
        value: 'History',
        color: '#55EFC4',
        icon: <FaFeatherAlt size={28} />,
    },
]

const subscriptionPlans = [
    { value: 'free', name: 'Безкоштовний' },
    { value: 'basic', name: 'Базовий' },
    { value: 'standard', name: 'Стандартний' },
    { value: 'premium', name: 'Преміум' },
]

const subscriptionPeriods = [
    { value: '30', name: '1 місяць' },
    { value: '90', name: '3 місяці' },
    { value: '180', name: '6 місяців' },
    { value: '365', name: '1 рік' },
]

const AdminPage = () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState('')
    const [updateData, setUpdateData] = useState({
        plan: '',
        subscriptionTime: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const res = await fetch(`${API_URL}/api/teacher/${email}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateData),
            })

            if (!res.ok) {
                toast.error('Помилка!')
                return
            }

            setIsSubmitting(false)
            setSuccessMessage(`Доступ для ${email} успішно надано!`)
            setEmail('')
            setUpdateData({
                plan: '',
                subscriptionTime: '',
            })
            toast.success('Успішно додано!')
            setSuccessMessage('')
            setShowModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="max-w-[960px] mx-auto bg-[#F0F4F8] shadow-md rounded-2xl p-6 flex flex-col items-center">
                <Toaster position="bottom-center" />
                <h1 className="text-[32px] font-bold">
                    Сторінка Адміністратора
                </h1>

                <button
                    onClick={() => setShowModal(true)}
                    className="mt-6 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition-colors"
                >
                    <FaUserPlus />
                    Надати доступ вчителю
                </button>

                <div className="mt-12 flex flex-col gap-6 w-full">
                    <div className="flex flex-col gap-3 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {subjects.map((subject) => (
                                <Link
                                    key={subject.value}
                                    href={`/create-topic/${subject.value.toLowerCase()}`}
                                    style={{
                                        backgroundColor: subject.color,
                                    }}
                                    className="flex flex-col items-center justify-center gap-2 py-4 px-4 text-white rounded-xl shadow-md hover:scale-105 hover:brightness-95 transition-all duration-200"
                                >
                                    <div>{subject.icon}</div>
                                    <span className="text-sm sm:text-base font-medium">
                                        {subject.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <FaTimes size={20} />
                        </button>

                        <h2 className="text-2xl font-bold mb-4">
                            Надати доступ вчителю
                        </h2>

                        {successMessage ? (
                            <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
                                {successMessage}
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">
                                        Електронна пошта вчителя
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">
                                        План підписки
                                    </label>
                                    <select
                                        value={updateData.plan}
                                        onChange={(e) =>
                                            setUpdateData((prev) => ({
                                                ...prev,
                                                plan: e.target.value,
                                            }))
                                        }
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="">Оберіть план</option>
                                        {subscriptionPlans.map((plan) => (
                                            <option
                                                key={plan.value}
                                                value={plan.value}
                                            >
                                                {plan.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">
                                        Термін підписки
                                    </label>
                                    <select
                                        value={updateData.subscriptionTime}
                                        onChange={(e) =>
                                            setUpdateData((prev) => ({
                                                ...prev,
                                                subscriptionTime:
                                                    e.target.value,
                                            }))
                                        }
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="">Оберіть термін</option>
                                        {subscriptionPeriods.map((period) => (
                                            <option
                                                key={period.value}
                                                value={period.value}
                                            >
                                                {period.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg
                                                className="animate-spin h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Обробка...
                                        </>
                                    ) : (
                                        'Надати доступ'
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default AdminPage
