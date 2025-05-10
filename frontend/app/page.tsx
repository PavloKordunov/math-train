'use client'

import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const {user} = useUser()
  const router = useRouter()

  useEffect(() => {
    if(!user) {
      router.push('/login')
    }
  }, [])

  return (
    <div className="">
      
    </div>
  );
}
