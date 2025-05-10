"use client"

import Link from "next/link";
import { useState } from "react";

const TestNav = () => {

    const [active, setActive] = useState("test");
    return (
        <div className="w-full bg-[#fff] px-10 py-6 flex items-center ">
            <div className="flex gap-12">
                <Link
                    href='/test'
                    onClick={() => setActive("test")}
                    className={`text-[20px] cursor-pointer relative transition duration-200 ${
                    active === "test" ? "text-[#CA193A] font-bold" : "text-black font-medium"
                    }`}
                >
                    Іспит
                    {active === "test" && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#CA193A]"></span>
                    )}
                </Link>
                <Link 
                    href='/test'
                    onClick={() => setActive("map")}
                    className={`text-[20px] cursor-pointer relative transition duration-200 ${
                    active === "map" ? "text-[#CA193A] font-bold" : "text-black font-medium"
                    }`}
                >
                    Математика:довідкові матеріали
                    {active === "map" && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#CA193A]"></span>
                    )}
                </Link>
        
            </div>
        </div>
    )
}

export default TestNav