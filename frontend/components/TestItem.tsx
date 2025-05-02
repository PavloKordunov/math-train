import Image from "next/image";

const TestItem = () => {
    return (
        <div className="flex items-stretch w-fit h-fit mb-8">
            <div className="px-20 py-8 bg-[#FFECE7]">
                <Image src='/mathItemImg.png' alt="" width={100} height={100} />
            </div>
            <div className="px-10 border-[2px] border-[#CDC8C8] border-l-0 flex items-center gap-10">
                <p className="font-bold text-[18px] uppercase">Тест, Похідна та її застосування, час завершення: 5 травня 19:00</p>
                <button className="bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold uppercase">Перейти до тесту</button>
            </div>
        </div>
    );
}

export default TestItem;