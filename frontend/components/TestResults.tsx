'use client'

import { useUser } from "@/hooks/useUser";
import Image from "next/image";
import Link from "next/link";
import { Toaster, toast } from 'react-hot-toast';

const TestResults = ({ test, student }: { test: any, student: any }) => {
    const { user } = useUser();

    function formatDateToUkrainian(dateString: string): string {
        const date = new Date(dateString);
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        const monthsGenitive = [
            'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
            'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
        ];

        return `${day} ${monthsGenitive[monthIndex]} ${hours}:${minutes}`;
    }

    const onErrorClick = () => {
        toast.error('У вас немає доступу до перегляду тесту');
    }

    return (
        <>
            <Toaster position="bottom-center" />
            <div className="flex items-stretch w-fit h-fit mb-8">
                <div className="px-20 py-8 bg-[#FFECE7]">
                    <Image src='/mathItemImg.png' alt="" width={100} height={100} />
                </div>
                <div className="px-10 border-[2px] border-[#CDC8C8] border-l-0 flex items-center justify-between min-w-[900px] gap-10">
                    <p className="font-bold text-[18px] uppercase">
                        {test?.testName}, Здано: {formatDateToUkrainian(test?.createdAt)}, Оцінка: {test.score}/{test.maxScore}
                    </p>
                    {(user?.status === 'Student' && student?.viewAccess === false) ?
                        <div onClick={onErrorClick} className="bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold uppercase cursor-pointer">
                            Переглянути тест
                        </div> :
                        <Link href={`/perfomence/${test.id}`} className="bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold uppercase">
                            Переглянути тест
                        </Link>
                    }
                </div>
            </div>
        </>
    );
}

export default TestResults;
