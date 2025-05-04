'use client';

import TeacherTestItem from "@/components/TeacherTestItem";
import Link from "next/link";

const TeacherPage = () => {

  return (
    <div className="flex flex-col py-2">
        <div className="w-full py-10 mb-6 gap-10">
            <h1 className="text-3xl font-bold mb-6">👩‍🏫 Кабінет викладача</h1>
            <Link href='/create-test' className="bg-[#CA193A] px-4 py-2 text-white rounded-md font-semibold uppercase">Добавити тест</Link>  
        </div>
        <h1 className="text-4xl font-bold mb-6">Створені тести</h1>
        <div>
            <TeacherTestItem />
            <TeacherTestItem />
            <TeacherTestItem />
        </div>
    </div>
  );
};

export default TeacherPage;
