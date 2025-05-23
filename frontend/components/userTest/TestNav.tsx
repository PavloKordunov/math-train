"use client"
const TestNav = ({active, setActive}: any) => {
    return (
        <div className="w-full bg-[#fff] px-10 py-6 flex items-center ">
            <div className="flex gap-12">
                <p
                    onClick={() => setActive(false)}
                    className={`text-[20px] cursor-pointer relative transition duration-200 ${
                    active === false ? "text-[#CA193A] font-bold" : "text-black font-medium"
                    }`}
                >
                    Іспит
                    {active === false && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#CA193A]"></span>
                    )}
                </p>
                <p 
                    onClick={() => setActive(true)}
                    className={`text-[20px] cursor-pointer relative transition duration-200 ${
                    active === true ? "text-[#CA193A] font-bold" : "text-black font-medium"
                    }`}
                >
                    Математика:довідкові матеріали
                    {active === true && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#CA193A]"></span>
                    )}
                </p>
            </div>
        </div>
    )
}

export default TestNav