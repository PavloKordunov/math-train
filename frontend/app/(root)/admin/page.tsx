'use client'
import Link from 'next/link'

const AdminPage = () => {
    return (
        <div className="max-w-[960px] mx-auto bg-[#F0F4F8] shadow-md rounded-2xl p-6 flex flex-col items-center">
            <h1 className="text-[32px] font-bold">Сторінка Адміністратора</h1>
            <div className="mt-12 flex flex-col gap-6">
                <div className="flex gap-12">
                    <Link
                        href={'/create-topic/mathematics'}
                        className="w-60 h-15 py-2 px-4 bg-[#81D5FF] rounded-xl text-[20px] font-medium flex items-center justify-center"
                    >
                        Математика
                    </Link>
                    <Link
                        href={'/create-topic/ukrainian'}
                        className="w-60 h-15 py-2 px-4 bg-[#5EFF66] rounded-xl text-[20px] font-medium flex items-center justify-center"
                    >
                        Українська мова
                    </Link>
                </div>
                <div className="flex gap-12">
                    <Link
                        href={'/create-topic/english'}
                        className="w-60 h-15 py-2 px-4 bg-[#5EFF66] rounded-xl text-[20px] font-medium flex items-center justify-center"
                    >
                        Англійська мова
                    </Link>
                    <Link
                        href={'/create-topic/history'}
                        className="w-60 h-15 py-2 px-4 bg-[#81D5FF] rounded-xl text-[20px] font-medium flex items-center justify-center"
                    >
                        Історія України
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdminPage
