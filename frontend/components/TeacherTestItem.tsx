import Image from "next/image";
import { MdDelete } from "react-icons/md";

const TeacherTestItem = () => {
    return (
        <div className="flex items-stretch w-fit h-fit mb-8">
            <div className="px-20 py-8 bg-[#FFECE7]">
                <Image src='/mathItemImg.png' alt="" width={100} height={100} />
            </div>
            <div className="px-10 border-[2px] border-[#CDC8C8] border-l-0 flex items-center justify-between min-w-150 w-fit gap-15">
                <div>
                    <p className="font-bold text-[18px] uppercase mb-6">Тест, Похідна та її застосування, час завершення: 5 травня 19:00</p>
                    <div className="flex items-center gap-6">
                        <button className="border border-gray-400 text-gray-700 px-3 py-1 rounded hover:bg-gray-100 font-semibold uppercase">Переглянути</button>
                        <button className="bg-rose-600 text-white px-3 py-1 rounded hover:bg-rose-700 font-semibold uppercase">Редагувати</button>    
                    </div>
                </div>
                <button className="text-gray-500 hover:text-red-600 ml-4">
                    <MdDelete size={24} />
                </button>
            </div>
        </div>
    );
}

export default TeacherTestItem;