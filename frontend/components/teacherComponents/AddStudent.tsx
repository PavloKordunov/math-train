'use client'

import { useUser } from '@/hooks/useUser'
import { useState } from 'react'
import { RegisterStudentSchema } from '@/lib/validation'
import toast from 'react-hot-toast'
import Image from 'next/image'

const AddStudent = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const { user } = useUser()
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isLoading, setIsLoading] = useState(false)

    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        name: '',
    })

    const validateForm = () => {
        const result = RegisterStudentSchema.safeParse(registerData)

        if (!result.success) {
            const newErrors: Record<string, string> = {}
            result.error.issues.forEach((issue) => {
                const fieldName = issue.path[0]
                if (typeof fieldName === 'string') {
                    newErrors[fieldName] = issue.message
                }
            })
            setErrors(newErrors)
            return false
        }

        setErrors({})
        return true
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setRegisterData((prev) => ({
            ...prev,
            [name]: value,
        }))
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev }
                delete newErrors[name]
                return newErrors
            })
        }
    }

    const handleRegister = async () => {
        if (!validateForm()) {
            toast.error('Будь ласка, виправте помилки у формі')
            return
        }

        if (!user?.id) {
            toast.error('Не вдалося ідентифікувати викладача')
            return
        }

        setIsLoading(true)
        try {
            const res = await fetch(`${API_URL}/api/student/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...registerData,
                    teacherId: user.id,
                }),
            })

            if (!res.ok) {
                throw new Error(await res.text())
            }

            const data = await res.json()
            toast.success('Учня успішно додано!')
            setIsOpenModal(false)
            setRegisterData({ email: '', password: '', name: '' })
        } catch (error) {
            console.error('Помилка реєстрації:', error)
            toast.error('Не вдалося додати учня. Спробуйте ще раз.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <button
                onClick={() => setIsOpenModal(true)}
                className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-5 py-3 text-gray-700 text-sm sm:text-lg rounded-lg font-semibold transition"
            >
                <Image
                    src="/icon_teacher_3.png"
                    alt="Plus"
                    width={18}
                    height={18}
                    className="w-5 h-5"
                />
                Додати учня
            </button>

            {isOpenModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000]">
                    <div className="bg-white rounded-[32px] shadow-md w-full max-w-md py-8 px-6 sm:py-12 sm:px-10 mx-4">
                        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                            Додати учня
                        </h1>

                        <div className="space-y-4">
                            <div className="text-left">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    🧑‍💼 Ім'я
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    value={registerData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg bg-gray-100 text-sm focus:outline-none ${
                                        errors.name
                                            ? 'border border-red-500'
                                            : 'focus:ring-2 focus:ring-blue-500'
                                    }`}
                                    placeholder="Введіть ім'я учня"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="text-left">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    📧 Електронна пошта
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    value={registerData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg bg-gray-100 text-sm focus:outline-none ${
                                        errors.email
                                            ? 'border border-red-500'
                                            : 'focus:ring-2 focus:ring-blue-500'
                                    }`}
                                    placeholder="you@example.com"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div className="text-left">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    🔑 Пароль
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    value={registerData.password}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg bg-gray-100 text-sm focus:outline-none ${
                                        errors.password
                                            ? 'border border-red-500'
                                            : 'focus:ring-2 focus:ring-blue-500'
                                    }`}
                                    placeholder="********"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            <div className="flex justify-end gap-3 pt-4">
                                <button
                                    onClick={() => setIsOpenModal(false)}
                                    disabled={isLoading}
                                    className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium disabled:opacity-50"
                                >
                                    Скасувати
                                </button>
                                <button
                                    onClick={handleRegister}
                                    disabled={isLoading}
                                    className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50"
                                >
                                    {isLoading ? 'Обробка...' : 'Додати'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddStudent
