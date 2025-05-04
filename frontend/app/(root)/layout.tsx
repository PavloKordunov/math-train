'use client'

import NavBar from "@/components/Header";
import { useUser } from "@/hooks/useUser";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function homeLayout({ children }: { children: ReactNode }) {
    const { data: session, status } = useSession();

    // useEffect(() => {
    //     if(!user){
    //         router.push('login')
    //     } else if(user){
    //         if(user.status === 'Student'){
    //             router.push('home')
    //         } else if(user.status === 'Teacher'){
    //             router.push('teacher')
    //         }
    //     }
    // }, [])

    const {user, setUser} = useUser()
    // const router= useRouter()
  
    // useEffect(() => {
    //   if(user?.status === 'Student'){
    //     router.push('home')
    //   } else if(user?.status === 'Teacher'){
    //       router.push('teacher')
    //   }
    // }, [user])

    useEffect(() => {
        if (status === 'authenticated' && session?.user) {
          const getUser = async () => {
            try {
              const res = await fetch('http://localhost:8080/api/login/oauth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: session?.user?.email }),
              });
      
              const data = await res.json();
              setUser(data.user);
              console.log(data);
            } catch (error) {
              console.log(error);
            }
          };
      
          getUser();
        } else if (status !== 'loading') {
          console.log('No session found');
        }
      }, [status, session]);
      
    
    return (
        <div className="w-full">
            <div className="relative">
                <div className="fixed inset-x-0 z-1000 mb-30">
                    <NavBar />
                </div>
            </div>
            <div className="px-20 py-30">{children}</div>
        </div>
    );
}
