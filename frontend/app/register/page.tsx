"use client"

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";

export default function RegisterPage() {

  const API_URL = process.env.API_URL;

  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    name: ""
  })

  const router = useRouter()
  const {user, setUser} = useUser()

  const handleRegister = async(e: any) => {
    e.preventDefault()
    try {
      const res = await fetch(`${API_URL}/api/student/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: registerData.email,
          name: registerData.name,
          password: registerData.password,
        })
      })

      const data = await res.json()
      if(data.user.status === 'Student'){
        router.push('home')
      } else if(data.user.status === 'Teacher'){
          router.push('teacher')
      }
      console.log(data)
      setUser(data.user)
    } catch (error) {
      console.log(error)
    }
    router.push('/home')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] relative overflow-hidden px-4">

      <div className="absolute top-6 left-6 flex items-center gap-2">
        <div className="w-30 h-30 relative mb-4">
          <Image src='/logo.png' alt="" fill className="object-contein" />    
        </div>
      </div>

      <div className="bg-[#FFFFFF] rounded-[32px] shadow-md w-full max-w-md py-12 px-10 text-center z-10">
        <h1 className="text-[#000] text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-2">
          <svg className="w-6 h-6" fill="#000">
            <use href={`/sprite.svg?v=1#icon-logo`}></use>
          </svg>
          Create a user
        </h1>

        <form className="space-y-6">
        <div className="text-left">
            <label className="text-sm text-[#000] font-medium mb-1 block">🧑‍💼 Name</label>
            <input
              type="text"
              value={registerData.name}
              onChange={(e) => setRegisterData((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
              placeholder="Enter your name"
            />
          </div>
          <div className="text-left">
            <label className="text-sm text-[#000] font-medium mb-1 block"> 📧  E-mail</label>
            <input
              type="email"
              value={registerData.email}
              onChange={(e) => setRegisterData((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
              placeholder="you@example.com"
            />
          </div>
          <div className="text-left">
            <label className="text-sm text-[#000] font-medium mb-1 block"> 🔑 Password</label>
            <input
              value={registerData.password}
              onChange={(e) => setRegisterData((prev) => ({ ...prev, password: e.target.value }))}
              type="password"
              className="w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
              placeholder="********"
            />
          </div>
          <div className="text-left">
            <label className="text-sm text-[#000] font-medium mb-1 block"> 🔑 Confirm password</label>
            <input
              type="password"
              className="w-full text-[#000] px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
              placeholder="********"
            />
          </div>
          <p className="text-sm text-gray-500 text-left">Do you already have an account?<Link href='/login' className="text-[#F87537] cursor-pointer hover:underline"> Log in →</Link></p>

          <button
            onClick={handleRegister}
            className="px-8 py-3 rounded-[16px] bg-[#1565C0] text-white font-semibold text-[16px] shadow-md  transition"
          >
            Register
          </button>
        </form>

        <div className="flex items-center gap-4 mt-8 justify-center">
          <button className="flex-1 flex items-center justify-center border-none gap-2 py-3 bg-white rounded-[12px] shadow-lg border hover:bg-gray-50 transition">
            <FcGoogle size={24} /> 
          </button>
          <button className="flex-1 flex items-center justify-center border-none gap-2 py-3 bg-white rounded-[12px] shadow-lg border hover:bg-gray-50 transition">
            <FaGithub size={24} color="black" />
          </button>
        </div>
      </div>
    </div>
  );
}
