'use client'

import { use, useEffect, useState, useTransition } from 'react'
import { FaSearch } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import debounce from 'lodash.debounce'
import { ClipLoader } from 'react-spinners'

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
        <div className="max-w-5xl py-8 mx-auto ">
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

            {isPending ? (
                <ClipLoader color="#36d7b7" size={40} />
            ) : (
                <div>
                    {students?.map((student) => (
                        <Link
                            key={student.id}
                            href={`/student/${student.id}`}
                            className="flex w-fit p-2 px-4 bg-[#F2F2F8] items-center shadow-md rounded-2xl mb-2"
                        >
                            <Image
                                src="/person.png"
                                alt=""
                                width={60}
                                height={60}
                                className="mr-8"
                            />
                            <div className="flex-col h-fit items-center">
                                <p className="font-semibold text-[20px]/6">
                                    {student.name}
                                </p>
                                <p className="text-gray-400">{student.email}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default StudentsSearchClient
