'use client';

import { use } from "react";
import TeacherTestItem from "../TeacherTestItem";

const CreatedTest = ({ testsPromise, studentsPromise }: { 
  testsPromise: Promise<any[]>;
  studentsPromise: Promise<any[]>;
}) => {
    const tests = use(testsPromise) || [];
    const students = use(studentsPromise) || [];

    return (
      <div>
        {tests.length > 0 ? tests.map((test) => (
          <TeacherTestItem key={test.id} test={test} students={students}/>
        )) : <p>Поки що немає тестів</p>}
      </div>
    );

};

export default CreatedTest;