import TestItem from "@/components/TestItem";

const Home = () => {
    return (
        <div className="flex flex-col py-2">
            <div className="w-full py-10 flex gap-2 items-center justify-center mb-2">
                <input
                type="text"
                className="w-100 px-3 py-3 rounded-[16px] ring-[1px] ring-[#CDC8C8] bg-[#EDEDED] text-[18px] focus:outline-none focus:ring-1 focus:ring-[#CA193A] text-[#000]"
                placeholder="Ваедіть код тесту"
                />
                <button
                    className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                >
                    Ввести
                </button>
            </div>
            <h1 className="text-4xl font-bold mb-6">Active tests: </h1>
            <div>
                <TestItem />
                <TestItem />
                <TestItem />
            </div>
        </div>
    );
}

export default Home;