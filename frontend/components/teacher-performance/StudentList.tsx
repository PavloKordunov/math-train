'use client'

import { useEffect, useState, useTransition } from 'react'
import { FaSearch } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
import { ClipLoader } from 'react-spinners'
import StudentCard from '../StudentCard'
import CreateGroupModal from '../createGroupModal'
import GroupCard from '../GroupCard'
import { useUser } from '@/hooks/useUser'
import toast from 'react-hot-toast'
import { RegisterStudentSchema } from '@/lib/validation'

const StudentsSearchClient = ({ initialStudents }: any) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const { user } = useUser()
    const [query, setQuery] = useState('')
    const [students, setStudents] = useState<any[]>([])
    const [isPending, startTransition] = useTransition()
    const [type, setType] = useState<'students' | 'groups'>('students')
    const [modalOpen, setModalOpen] = useState(false)
    const [groups, setGroups] = useState<any[]>([])
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isLoading, setIsLoading] = useState(false)

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

    useEffect(() => {
        const getAllTeacherGroups = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/group/teacher/${user?.id}`
                )
                const data = await res.json()

                console.log(data)
                setGroups(data.data)
            } catch (error) {
                console.log(error)
            }
        }

        getAllTeacherGroups()
    }, [])

    useEffect(() => {
        setStudents(initialStudents)
    }, [initialStudents])

    const toggleModal = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <div className="max-w-6xl py-8 mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">
                        {type === 'students' ? 'Учні' : 'Групи'}
                    </h1>
                    {type === 'groups' ? (
                        <button
                            onClick={toggleModal}
                            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full shadow-md transition-all duration-200 text-sm sm:text-base"
                        >
                            <AiOutlinePlus size={18} />
                            <span className="whitespace-nowrap">
                                Створити групу
                            </span>
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsOpenModal(true)}
                            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full shadow-md transition-all duration-200 text-sm sm:text-base"
                        >
                            <AiOutlinePlus size={18} />
                            <span className="whitespace-nowrap">
                                Добавити учня
                            </span>
                        </button>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="relative w-full sm:w-64 md:w-80">
                        <input
                            type="text"
                            placeholder={
                                type === 'students'
                                    ? 'Пошук студента...'
                                    : 'Пошук групи...'
                            }
                            className="w-full text-lg px-6 py-2 bg-[#F2F2F8] shadow-md rounded-2xl"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            <FaSearch size={18} />
                        </button>
                    </div>

                    <div className="bg-white rounded-full shadow-md flex">
                        <button
                            onClick={() => setType('students')}
                            className={`px-4 py-1.5 text-sm rounded-full transition-all font-medium ${
                                type === 'students'
                                    ? 'bg-cyan-500 text-white shadow-inner'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Учні
                        </button>
                        <button
                            onClick={() => setType('groups')}
                            className={`px-4 py-1.5 text-sm rounded-full transition-all font-medium ${
                                type === 'groups'
                                    ? 'bg-cyan-500 text-white shadow-inner'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Групи
                        </button>
                    </div>
                </div>
            </div>

            {isPending ? (
                <div className="flex justify-center">
                    <ClipLoader color="#36d7b7" size={40} />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {type === 'students' && (
                        <>
                            {students?.length > 0 ? (
                                students?.map((student) => (
                                    <StudentCard
                                        key={student?.id}
                                        student={student}
                                        students={students}
                                        setStudents={setStudents}
                                    />
                                ))
                            ) : (
                                <div className="col-span-full flex flex-col items-center justify-center gap-6 py-12">
                                    <div className="text-gray-500 text-center max-w-md">
                                        <p className="text-lg mb-4">
                                            Ще не додано жодного учня
                                        </p>
                                        <p className="text-sm">
                                            Додайте нового учня, щоб почати
                                            роботу
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setIsOpenModal(true)}
                                        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full shadow-md transition-all duration-200 text-base font-medium"
                                    >
                                        <AiOutlinePlus size={20} />
                                        Додати учня
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                    {type === 'groups' && (
                        <>
                            {groups?.length > 0 ? (
                                groups?.map((group) => (
                                    <GroupCard
                                        key={group?.id ?? group.title}
                                        group={group}
                                        students={students}
                                        setGroups={setGroups}
                                    />
                                ))
                            ) : (
                                <div className="col-span-full flex flex-col items-center justify-center gap-6 py-12">
                                    <div className="text-gray-500 text-center max-w-md">
                                        <p className="text-lg mb-4">
                                            Ще не створено жодної групи
                                        </p>
                                        <p className="text-sm">
                                            Створіть нову групу, щоб почати
                                            роботу
                                        </p>
                                    </div>
                                    <button
                                        onClick={toggleModal}
                                        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full shadow-md transition-all duration-200 text-base font-medium"
                                    >
                                        <AiOutlinePlus size={20} />
                                        Створити групу
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}
            {modalOpen && (
                <CreateGroupModal
                    setGroups={setGroups}
                    toggleModal={toggleModal}
                    students={students}
                />
            )}
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
        </div>
    )
}

export default StudentsSearchClient
