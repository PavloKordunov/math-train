'use client'

import StudentProgressChart from '@/components/StudentProgressChart'
import StudentsGroupList from '@/components/StudentsGroupList'
import TestItem from '@/components/TestItem'
import { useUser } from '@/hooks/useUser'
import { X } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { FaCalculator } from 'react-icons/fa'
import Select from 'react-select'

const GroupPage = () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const params = useParams()
    const groupId = params?.id
    const [active, setActive] = useState('students')
    const [assignedTests, setAssignedTests] = useState<any>([])
    const [tests, setTests] = useState<any[]>([])
    const [students, setStudents] = useState<any>([])
    const [group, setGroup] = useState<any>(null)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false)
    const [selectedTest, setSelectedTest] = useState<any>(null)
    const [endTime, setEndTime] = useState<any>(null)
    const [formData, setFormData] = useState({
        title: '',
    })
    const [selectedStudents, setSelectedStudents] = useState<any>([])
    const [performance, setPerformance] = useState<any>([])
    const { user } = useUser()

    useEffect(() => {
        if (group?.students) {
            const initialStudents = group.students.map((student: any) => ({
                value: student.id,
                label: student.name,
            }))
            setSelectedStudents(initialStudents)
            setFormData((prev) => ({ ...prev, title: group.title }))
        }
    }, [group?.students])

    useEffect(() => {
        const getAssignedTests = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/test/assign/group/${groupId}`
                )

                const data = await res.json()
                setAssignedTests(data.data)
            } catch (error) {
                console.log(error)
            }
        }

        const getAllTeacherTests = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/test/teacher/${user?.id}`
                )

                const data = await res.json()
                setTests(data.data)
            } catch (error) {
                console.log(error)
            }
        }

        const getGroupData = async () => {
            try {
                const res = await fetch(`${API_URL}/api/group/${groupId}`)
                if (!res.ok) {
                    return
                }

                const data = await res.json()
                console.log(data)
                setGroup(data)
            } catch (error) {
                console.log(error)
            }
        }

        const getAllStudentsByTeacherID = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/student/teacher/${user?.id}`
                )

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }

                const data = await res.json()
                console.log(data.data)
                setStudents(data.data)
            } catch (error) {
                console.error('Error fetching students:', error)
                return []
            }
        }

        const getGroupPerfomenceById = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/perfomence/group/${groupId}`
                )
                const data = await res.json()

                console.log(data)
                setPerformance(data?.data)
            } catch (error) {
                console.log(error)
            }
        }

        getGroupPerfomenceById()
        getAllTeacherTests()
        getAllStudentsByTeacherID()
        getGroupData()
        getAssignedTests()
    }, [])

    const assignTest = async () => {
        try {
            const res = await fetch(
                `${API_URL}/api/test/${selectedTest}/group/assign`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        testId: selectedTest,
                        students: group.students,
                        endTime: endTime,
                    }),
                }
            )
            const data = await res.json()
            console.log(data)
            setIsAssignModalOpen(false)
            toast.success(`Тест призначено для групи: ${group.title}`)
        } catch (error) {
            console.error(error)
            toast.error('Помилка: тест не призначено')
        }
    }

    const handleUpdate = async () => {
        const groupData = {
            title: formData.title,
            teacherId: user?.id,
            students: selectedStudents.map((s: any) => s.value),
        }

        try {
            const res = await fetch(`${API_URL}/api/group/${group.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: groupData.title,
                    students: groupData.students,
                }),
            })

            if (!res.ok) {
                setIsUpdateModalOpen(false)
                toast.error('Помилка: тест не оновлено')
                return
            }

            const data = await res.json()
            setGroup((prev: any) => ({
                ...prev,
                title: data.title,
                students: data.students,
            }))
            setIsUpdateModalOpen(false)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const formatDateForInput = useCallback((isoString: string) => {
        if (!isoString) return ''
        const date = new Date(isoString)
        if (isNaN(date.getTime())) return ''
        const offset = date.getTimezoneOffset() * 60000
        return new Date(date.getTime() - offset).toISOString().slice(0, 16)
    }, [])

    return (
        <div className="max-w-5xl w-full mx-auto flex flex-col">
            <Toaster />
            <div className="flex items-center mb-6 gap-4">
                <div className="relative w-16 h-16 md:w-25 md:h-25">
                    <div className="w-fit h-fit p-5 rounded-full bg-cyan-500">
                        <FaCalculator size={56} color="white" />
                    </div>
                </div>
                <div className="flex-col h-fit items-center">
                    <p className="font-semibold text-[20px]/8 md:text-[28px]/10">
                        {group?.title}
                    </p>
                    <p className="text-gray-400 text-[16px] md:text-[20px]">
                        Вчитель: {user?.name}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-6 mb-10">
                <button
                    className="border border-gray-400 text-[12px] sm:text-[16px] text-gray-700 px-3 py-1 rounded hover:bg-gray-100 font-semibold uppercase"
                    onClick={() => setIsUpdateModalOpen(true)}
                >
                    Редагувати групу
                </button>
                <button
                    className="bg-rose-600 text-[12px] sm:text-[16px] text-white px-3 py-1 rounded hover:bg-rose-700 font-semibold uppercase"
                    onClick={() => setIsAssignModalOpen(true)}
                >
                    Назначити тест
                </button>
            </div>
            <StudentProgressChart
                testResults={performance}
                progressType={'group'}
            />
            <div>
                <div className="flex gap-8 my-10">
                    <p
                        onClick={() => setActive('students')}
                        className={`font-bold text-[24px]/8 sm:text-[28px] cursor-pointer relative transition duration-200 ${
                            active === 'students'
                                ? 'text-[#CA193A]'
                                : 'text-black'
                        } `}
                    >
                        Учні
                        {active === 'students' && (
                            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#CA193A]"></span>
                        )}
                    </p>
                    <p
                        onClick={() => setActive('activeTests')}
                        className={`font-bold text-[24px]/8 sm:text-[28px] cursor-pointer relative transition duration-200 ${
                            active === 'activeTests'
                                ? 'text-[#CA193A]'
                                : 'text-black'
                        } `}
                    >
                        Активні тести
                        {active === 'activeTests' && (
                            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#CA193A]"></span>
                        )}
                    </p>
                </div>
                {active === 'students' && (
                    <div>
                        {group?.students?.length > 0 ? (
                            <StudentsGroupList students={group?.students} />
                        ) : (
                            <p>Поки що немає учнів</p>
                        )}
                    </div>
                )}
                {active === 'activeTests' && (
                    <div>
                        {assignedTests?.length > 0 ? (
                            assignedTests.map((test: any) => (
                                <TestItem key={test.id} test={test} />
                            ))
                        ) : (
                            <p>Поки що немає зданих тестів</p>
                        )}
                    </div>
                )}
            </div>
            {isAssignModalOpen && (
                <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center px-4">
                    <div className="bg-[#F0F4F8] w-full max-w-xl p-6 rounded-2xl flex items-center gap-3 relative">
                        <div className="flex justify-center md:w-1/3">
                            <div className="w-fit h-fit p-8 rounded-full bg-cyan-500">
                                <FaCalculator size={100} color="white" />
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-semibold text-gray-800">
                                {group.title}
                            </h2>
                            <div className="mt-4">
                                <Select
                                    options={tests.map((t: any) => ({
                                        value: t.id,
                                        label: t.title,
                                    }))}
                                    onChange={(selected: any) =>
                                        setSelectedTest(selected?.value)
                                    }
                                    isSearchable
                                    placeholder="Виберіть тест..."
                                    noOptionsMessage={() =>
                                        'Тестів не знайдено'
                                    }
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    components={{
                                        Option: ({
                                            innerRef,
                                            innerProps,
                                            data,
                                            isFocused,
                                        }: any) => (
                                            <div
                                                ref={innerRef}
                                                {...innerProps}
                                                className={`p-3 ${
                                                    isFocused
                                                        ? 'bg-[#FFECE7]'
                                                        : 'bg-white'
                                                } hover:bg-[#FFECE7] cursor-pointer`}
                                            >
                                                <p className="font-medium">
                                                    {data.label}
                                                </p>
                                            </div>
                                        ),
                                    }}
                                    styles={{
                                        control: (base: any) => ({
                                            ...base,
                                            borderColor: '#CDC8C8',
                                            borderRadius: '0.5rem',
                                            padding: '0.25rem',
                                            boxShadow: 'none',
                                            '&:hover': {
                                                borderColor: '#9CA3AF',
                                            },
                                        }),
                                        menu: (base: any) => ({
                                            ...base,
                                            border: '1px solid #CDC8C8',
                                            borderRadius: '0.5rem',
                                            boxShadow:
                                                '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                        }),
                                        option: (
                                            base: any,
                                            { isFocused }: any
                                        ) => ({
                                            ...base,
                                            backgroundColor: isFocused
                                                ? '#FFECE7'
                                                : 'white',
                                            color: '#1F2937',
                                        }),
                                    }}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mt-2">
                                    Крайній термін проходження
                                </label>
                                <input
                                    type="datetime-local"
                                    value={formatDateForInput(endTime)}
                                    onChange={(e) => {
                                        const isoDate = new Date(
                                            e.target.value
                                        ).toISOString()
                                        setEndTime(isoDate)
                                    }}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                                />
                            </div>

                            <div className="flex justify-end gap-4 mt-4">
                                <button
                                    onClick={() => setIsAssignModalOpen(false)}
                                    className="px-8 py-3 rounded-[16px] border-[2px] border-gray-300 text-black font-semibold text-[16px]  transition"
                                >
                                    Скасувати
                                </button>
                                <button
                                    onClick={assignTest}
                                    className="px-8 py-3 rounded-[16px] bg-red-500 text-white font-semibold text-[16px] shadow-md  transition"
                                >
                                    Назначити
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isUpdateModalOpen && (
                <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-1000">
                    <div className="bg-[#FFFFFF] rounded-[32px] shadow-md w-full max-w-md py-12 px-10 z-10000">
                        <div>
                            <h1 className="text-[#000] text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-2">
                                Оновити Групу
                            </h1>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Назва групи{' '}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        title: e.target.value,
                                    })
                                }
                                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b6d6] focus:border-transparent"
                                placeholder="Наприклад: Математика-НМТ"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Додайте учнів
                            </label>
                            <Select
                                isMulti
                                options={students?.map((s: any) => ({
                                    value: s.id,
                                    label: s.name,
                                }))}
                                value={selectedStudents}
                                onChange={setSelectedStudents}
                                isSearchable
                                placeholder="Пошук студента..."
                                noOptionsMessage={() => 'Студентів не знайдено'}
                                className="react-select-container"
                                classNamePrefix="react-select"
                                hideSelectedOptions={true}
                                controlShouldRenderValue={false}
                                components={{
                                    MultiValueContainer: () => null,
                                    ClearIndicator: undefined,
                                    Option: ({
                                        innerRef,
                                        innerProps,
                                        data,
                                        isFocused,
                                    }: any) => (
                                        <div
                                            ref={innerRef}
                                            {...innerProps}
                                            className={`p-3 ${
                                                isFocused
                                                    ? 'bg-[#FFECE7]'
                                                    : 'bg-white'
                                            } hover:bg-[#FFECE7] cursor-pointer`}
                                        >
                                            <p className="font-medium">
                                                {data.label}
                                            </p>
                                        </div>
                                    ),
                                }}
                                styles={{
                                    control: (base: any) => ({
                                        ...base,
                                        borderColor: '#CDC8C8',
                                        borderRadius: '0.5rem',
                                        padding: '0.25rem',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            borderColor: '#9CA3AF',
                                        },
                                    }),
                                    menu: (base: any) => ({
                                        ...base,
                                        border: '1px solid #CDC8C8',
                                        borderRadius: '0.5rem',
                                        boxShadow:
                                            '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    }),
                                    option: (
                                        base: any,
                                        { isFocused }: any
                                    ) => ({
                                        ...base,
                                        backgroundColor: isFocused
                                            ? '#FFECE7'
                                            : 'white',
                                        color: '#1F2937',
                                    }),
                                }}
                            />
                            {selectedStudents.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {selectedStudents.map((student: any) => (
                                        <div
                                            key={student.value}
                                            className="flex items-center gap-1 bg-white border border-gray-200 px-2.5 py-1 rounded-full text-sm"
                                        >
                                            <span>{student.label}</span>
                                            <button
                                                onClick={() =>
                                                    setSelectedStudents(
                                                        selectedStudents.filter(
                                                            (s: any) =>
                                                                s.value !==
                                                                student.value
                                                        )
                                                    )
                                                }
                                                className="text-gray-400 hover:text-red-500 ml-1"
                                            >
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className="flex justify-end gap-4 mt-6">
                                <button
                                    onClick={() => setIsUpdateModalOpen(false)}
                                    className="px-8 py-3 rounded-[16px] border-[2px] border-gray-300 text-black font-semibold text-[16px]  transition"
                                >
                                    Скасувати
                                </button>
                                <button
                                    onClick={handleUpdate}
                                    className="px-8 py-3 rounded-[16px] bg-red-500 text-white font-semibold text-[16px] shadow-md  transition"
                                >
                                    Оновити
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GroupPage
