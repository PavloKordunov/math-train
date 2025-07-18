'use client'

import { use, useEffect, useState, useTransition } from 'react'
import { FaSearch } from 'react-icons/fa'
import debounce from 'lodash.debounce'
import { ClipLoader } from 'react-spinners'
import StudentCard from '../StudentCard'

const StudentsSearchClient = ({ initialStudentsPromise }: any) => {
    const [query, setQuery] = useState('')
    const [students, setStudents] = useState<any[]>()
    const [isPending, startTransition] = useTransition()

    const initialStudents = use(initialStudentsPromise)

    const fetchStudents = async (search: string) => {
        try {
            const res = await fetch(`/api/students?search=${search}`, {
                cache: 'no-store',
            })
            const data = await res.json()
            setStudents(data)
        } catch (error) {
            console.log(error)
        }
    }

    const debouncedSearch = debounce((value: string) => {
        startTransition(() => {
            fetchStudents(value)
        })
    }, 300)

    useEffect(() => {
        if (query.trim() !== '') {
            debouncedSearch(query)
        } else {
            setStudents(initialStudents as any[])
        }

        return () => debouncedSearch.cancel()
    }, [query])

    return (
        <div className="max-w-6xl py-8 mx-auto ">
            <div className="flex justify-center">
                <div className="flex relative w-fit mb-10">
                    <input
                        type="text"
                        placeholder="Пошук студента..."
                        className="w-100 text-[20px] px-6 py-2 bg-[#F2F2F8] shadow-md rounded-2xl"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="absolute right-4 top-3">
                        <FaSearch size={20} />
                    </button>
                </div>
            </div>

            {isPending ? (
                <ClipLoader color="#36d7b7" size={40} />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {students?.map((student) => (
                        <StudentCard
                            key={student.id}
                            student={student}
                            students={students}
                            setStudents={setStudents}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default StudentsSearchClient
