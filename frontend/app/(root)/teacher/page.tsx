'use client'

import AddStudent from '@/components/teacherComponents/AddStudent'
import TeacherTestItem from '@/components/TeacherTestItem'
import { useUser } from '@/hooks/useUser'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import Link from 'next/link'
import EmptyState from '@/components/EmptyState'
import Select from 'react-select'
import {
    MdAssignment,
    MdCreateNewFolder,
    MdEdit,
    MdFolder,
    MdLibraryBooks,
    MdOutlineAssignment,
    MdPeople,
    MdSchool,
    MdAdd,
    MdDelete,
} from 'react-icons/md'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const TeacherPage = () => {
    const { user } = useUser()
    const [tests, setTests] = useState<any[]>([])
    const [folderTests, setFolderTests] = useState<any>(null)
    const [students, setStudents] = useState<any[]>([])
    const [assignTests, setAssignTests] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isAddTestModalOpen, setIsAddTestModalOpen] = useState(false)
    const [selectedTest, setSelectedTest] = useState<string | null>(null)
    const [selectedFolderIdForTest, setSelectedFolderIdForTest] = useState<
        string | null
    >(null)
    const [error, setError] = useState<string | null>(null)
    const [folders, setFolders] = useState<any>([])
    const [selectedFolder, setSelectedFolder] = useState<any>('all')
    const [folderName, setFolderName] = useState('')
    const [isEditFolderModalOpen, setIsEditFolderModalOpen] = useState(false)
    const [isDeleteFolderModalOpen, setIsDeleteFolderModalOpen] =
        useState(false)
    const [folderIdToEdit, setFolderIdToEdit] = useState<string | null>(null)
    const [folderIdToDelete, setFolderIdToDelete] = useState<string | null>(
        null
    )
    const [editFolderName, setEditFolderName] = useState('')
    const [isLoadingFolderTests, setIsLoadingFolderTests] = useState(false)

    useEffect(() => {
        console.log('selectedFolderIdForTest: ', selectedFolderIdForTest)
    }, [selectedFolderIdForTest])

    useEffect(() => {
        if (!user?.id) return

        const fetchData = async () => {
            try {
                setLoading(true)
                setError(null)

                const res = await fetch(
                    `${API_URL}/api/teacher/main/${user.id}`
                )

                if (!res.ok) {
                    throw new Error('Failed to fetch data')
                }

                const data = await res.json()
                setTests(data.tests)
                setStudents(data.students)
                setAssignTests(data.assignedTestCount)
                setFolders(data.folders)
            } catch (error) {
                console.error('Error fetching data:', error)
                setError(
                    'Не вдалося завантажити дані. Спробуйте оновити сторінку.'
                )
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        if (selectedFolder !== 'all') {
            const getFolderTests = async () => {
                try {
                    const res = await fetch(
                        `${API_URL}/api/folder/tests/${selectedFolder}/${user?.id}`
                    )
                    const data = await res.json()
                    setFolderTests(data)
                } catch (error) {
                    console.log(error)
                }
            }
            getFolderTests()
        }
    }, [selectedFolder])

    const createFolder = async () => {
        try {
            const res = await fetch(`${API_URL}/api/folder`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ teacherId: user?.id, name: folderName }),
            })

            const data = await res.json()
            setIsOpenModal(false)
            setFolders((prev: any) => [...prev, data])
        } catch (error) {
            console.log(error)
        }
    }

    const addTestToFolder = async () => {
        if (!selectedFolderIdForTest || !selectedTest) return

        try {
            const res = await fetch(
                `${API_URL}/api/folder/${selectedFolderIdForTest}/test/${selectedTest}`,
                { method: 'PATCH' }
            )

            if (!res.ok) throw new Error('Помилка при додаванні тесту')

            const data = await res.json()

            if (selectedFolder === selectedFolderIdForTest) {
                setFolderTests((prev: any) => ({
                    ...prev,
                    tests: [...prev.tests, data],
                }))
            }

            setIsAddTestModalOpen(false)
            setSelectedTest(null)
            setSelectedFolderIdForTest(null)
        } catch (error) {
            console.error(error)
        }
    }

    const updateFolder = async () => {
        if (!folderIdToEdit || !editFolderName.trim()) return
        try {
            const res = await fetch(`${API_URL}/api/folder/${folderIdToEdit}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: editFolderName }),
            })
            if (!res.ok) throw new Error('Помилка оновлення папки')
            const updatedFolder = await res.json()
            setFolders((prev: any) =>
                prev.map((f: any) =>
                    f.id === updatedFolder.id ? updatedFolder : f
                )
            )
            setSelectedFolder('all')
            setIsEditFolderModalOpen(false)
        } catch (err) {
            console.error(err)
        }
    }

    const deleteFolder = async () => {
        if (!folderIdToDelete) return
        try {
            const res = await fetch(
                `${API_URL}/api/folder/${folderIdToDelete}`,
                {
                    method: 'DELETE',
                }
            )
            if (!res.ok) throw new Error('Помилка видалення папки')
            setFolders((prev: any) =>
                prev.filter((f: any) => f.id !== folderIdToDelete)
            )
            if (selectedFolder === folderIdToDelete) setSelectedFolder('all')
            setSelectedFolder('all')
            setIsDeleteFolderModalOpen(false)
        } catch (err) {
            console.error(err)
        }
    }

    if (!user || loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ClipLoader color="#3B82F6" size={50} />
            </div>
        )
    }

    const getAvailableTests = () => {
        if (!folderTests || !folderTests.tests) return tests

        const folderTestIds = new Set(
            folderTests.tests.map((test: any) => test.id)
        )

        return tests.filter((test) => !folderTestIds.has(test.id))
    }

    const availableTests = getAvailableTests()

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center p-6 bg-red-50 rounded-lg max-w-md mx-4">
                    <p className="text-red-500 font-medium">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        Спробувати знову
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 lg:px-8">
            <header className="text-center mb-6 sm:mb-8">
                <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <MdSchool className="text-blue-600 text-2xl sm:text-3xl" />
                    </div>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                    Кабінет викладача
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                    Керуйте тестами та студентами зручним способом
                </p>
            </header>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                <Link
                    href="/create-test"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 sm:px-6 sm:py-3 text-white rounded-lg font-medium transition shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                    <MdEdit size={18} />
                    <span>Створити тест</span>
                </Link>

                <AddStudent />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                            <MdPeople className="text-blue-600 text-lg sm:text-xl" />
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm text-gray-500">
                                Студентів
                            </p>
                            <p className="text-xl sm:text-2xl font-bold text-gray-900">
                                {students.length}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="bg-yellow-100 p-2 sm:p-3 rounded-full">
                            <MdLibraryBooks className="text-yellow-600 text-lg sm:text-xl" />
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm text-gray-500">
                                Тестів
                            </p>
                            <p className="text-xl sm:text-2xl font-bold text-gray-900">
                                {tests.length}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="bg-green-100 p-2 sm:p-3 rounded-full">
                            <MdOutlineAssignment className="text-green-600 text-lg sm:text-xl" />
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm text-gray-500">
                                Призначено
                            </p>
                            <p className="text-xl sm:text-2xl font-bold text-gray-900">
                                {assignTests}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mb-8">
                <div className="mb-6">
                    <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2">
                        <button
                            onClick={() => setSelectedFolder('all')}
                            className={`px-4 py-2 rounded-t-lg ${
                                selectedFolder === 'all'
                                    ? 'bg-blue-100 text-blue-600 border-b-2 border-blue-500'
                                    : 'hover:bg-gray-100'
                            }`}
                        >
                            Усі тести
                        </button>
                        {folders.map((folder: any) => (
                            <div key={folder.id} className="flex items-center">
                                <button
                                    onClick={() => {
                                        setSelectedFolder(folder.name)
                                        setSelectedFolderIdForTest(folder.id)
                                    }}
                                    className={`px-4 py-2 rounded-t-lg flex items-center gap-2 ${
                                        selectedFolder === folder.name
                                            ? 'bg-blue-100 text-blue-600 border-b-2 border-blue-500'
                                            : 'hover:bg-gray-100'
                                    }`}
                                >
                                    <MdFolder className="text-yellow-500" />
                                    {folder.name}
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedFolderIdForTest(folder.id)
                                        setIsAddTestModalOpen(true)
                                    }}
                                    className="ml-1 text-green-600 hover:text-green-800"
                                    title="Додати тест"
                                >
                                    <MdAdd size={20} />
                                </button>
                            </div>
                        ))}
                        <button
                            onClick={() => setIsOpenModal(true)}
                            className="flex items-center gap-1 text-gray-600 hover:text-blue-500 px-3 py-2"
                        >
                            <MdCreateNewFolder size={18} />
                            <span className="hidden sm:inline">
                                Створити папку
                            </span>
                        </button>
                    </div>
                </div>

                {selectedFolder === 'all' && (
                    <>
                        {tests.length > 0 ? (
                            <div className="space-y-3 sm:space-y-4">
                                {tests.map((test) => (
                                    <TeacherTestItem
                                        key={test.id}
                                        test={test}
                                        students={students}
                                    />
                                ))}
                            </div>
                        ) : (
                            <EmptyState
                                icon={
                                    <MdAssignment
                                        size={40}
                                        className="text-gray-400"
                                    />
                                }
                                title="Немає тестів"
                                description="Створіть свій перший тест"
                                action={
                                    <Link
                                        href="/create-test"
                                        className="mt-3 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
                                    >
                                        <MdEdit className="mr-2" />
                                        Створити тест
                                    </Link>
                                }
                            />
                        )}
                    </>
                )}

                {selectedFolder !== 'all' && (
                    <>
                        {folderTests?.tests?.length > 0 ? (
                            <div className="space-y-3 sm:space-y-4">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between shadow-sm">
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800">
                                            📂 {selectedFolder}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            Кількість тестів:{' '}
                                            {folderTests.tests.length}
                                        </p>
                                    </div>

                                    <div className="flex gap-2 mt-3 sm:mt-0">
                                        <button
                                            onClick={() => {
                                                setFolderIdToEdit(
                                                    selectedFolderIdForTest
                                                )
                                                setEditFolderName(
                                                    selectedFolder
                                                )
                                                setIsEditFolderModalOpen(true)
                                            }}
                                            className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 text-blue-600 font-medium transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
                                        >
                                            <MdEdit size={18} />
                                            Редагувати
                                        </button>

                                        <button
                                            onClick={() => {
                                                setFolderIdToDelete(
                                                    selectedFolderIdForTest
                                                )
                                                setIsDeleteFolderModalOpen(true)
                                            }}
                                            className="px-4 py-2 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 text-red-600 font-medium transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
                                        >
                                            <MdDelete size={18} />
                                            Видалити
                                        </button>
                                    </div>
                                </div>

                                {folderTests?.tests?.map((test: any) => (
                                    <TeacherTestItem
                                        key={test.id}
                                        test={test}
                                        students={students}
                                    />
                                ))}
                            </div>
                        ) : (
                            <EmptyState
                                icon={
                                    <MdAssignment
                                        size={40}
                                        className="text-gray-400"
                                    />
                                }
                                title="Немає тестів у папці"
                                description="Додайте свій перший тест"
                                action={
                                    <button
                                        onClick={() => {
                                            setIsAddTestModalOpen(true)
                                        }}
                                        className="mt-3 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
                                    >
                                        <MdEdit className="mr-2" />
                                        Добавити тест
                                    </button>
                                }
                            />
                        )}
                    </>
                )}
            </section>

            {isAddTestModalOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000]">
                    <div className="bg-white rounded-[32px] shadow-md w-full max-w-md p-4 sm:p-6 mx-4">
                        <h1 className="text-2xl font-bold mb-6 text-center">
                            Додати тест у папку
                        </h1>
                        {isLoadingFolderTests ? (
                            <div className="flex justify-center py-4">
                                <ClipLoader color="#3B82F6" size={30} />
                            </div>
                        ) : (
                            <Select
                                options={availableTests.map((t: any) => ({
                                    value: t.id,
                                    label: t.title,
                                }))}
                                onChange={(selected) =>
                                    setSelectedTest(selected?.value || null)
                                }
                                isSearchable
                                placeholder="Виберіть тест..."
                                noOptionsMessage={() => 'Тестів не знайдено'}
                            />
                        )}
                        <div className="flex justify-end gap-3 pt-4">
                            <button
                                onClick={() => setIsAddTestModalOpen(false)}
                                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium"
                            >
                                Скасувати
                            </button>
                            <button
                                onClick={addTestToFolder}
                                className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50"
                                disabled={!selectedTest}
                            >
                                Додати
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isOpenModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000]">
                    <div className="bg-white rounded-[32px] shadow-md w-full max-w-md p-4 sm:p-6 mx-4">
                        <h1 className="text-2xl font-bold mb-6 text-center">
                            Створити нову папку
                        </h1>
                        <input
                            type="text"
                            value={folderName}
                            onChange={(e) => setFolderName(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-sm focus:outline-none"
                            placeholder="Введіть назву папки"
                        />
                        <div className="flex justify-end gap-3 pt-4">
                            <button
                                onClick={() => setIsOpenModal(false)}
                                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium"
                            >
                                Скасувати
                            </button>
                            <button
                                onClick={createFolder}
                                className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50"
                            >
                                Створити
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isEditFolderModalOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000]">
                    <div className="bg-white rounded-[32px] shadow-md w-full max-w-md p-6">
                        <h1 className="text-2xl font-bold mb-6 text-center">
                            Редагувати папку
                        </h1>
                        <input
                            type="text"
                            value={editFolderName}
                            onChange={(e) => setEditFolderName(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-sm focus:outline-none"
                        />
                        <div className="flex justify-end gap-3 pt-4">
                            <button
                                onClick={() => setIsEditFolderModalOpen(false)}
                                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700"
                            >
                                Скасувати
                            </button>
                            <button
                                onClick={updateFolder}
                                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                            >
                                Зберегти
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isDeleteFolderModalOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000]">
                    <div className="bg-white rounded-[32px] shadow-md w-full max-w-md p-6">
                        <h1 className="text-xl font-bold mb-4 text-center">
                            Ви впевнені, що хочете видалити цю папку?
                        </h1>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() =>
                                    setIsDeleteFolderModalOpen(false)
                                }
                                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700"
                            >
                                Скасувати
                            </button>
                            <button
                                onClick={deleteFolder}
                                className="px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                            >
                                Видалити
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TeacherPage
