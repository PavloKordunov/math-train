'use client'

import { useUser } from "@/hooks/useUser"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {

    const {user, setUser} = useUser()
    const router= useRouter()
  
    useEffect(() => {
      if(user?.status === 'Student'){
        router.push('home')
      } else if(user?.status === 'Teacher'){
          router.push('teacher')
      }
    }, [user])
  return (
    <div className="">
      
    </div>
  );
}
