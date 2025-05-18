'use client';

import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import TestTasks from "@/components/testComponents/TestTasks";
import CreateTestTask from "@/components/testComponents/CreateTestTask";
import TestBasicInfo from "@/components/testComponents/TestBasicInfo";
import CreateTaskModal from "@/components/testComponents/CreateTaskModal";
import LatextTranform from "@/helpers/latexTransform"
import { TestContext } from "node:test";

const CreateTest = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [questionType, setQuestionType] = useState("");
    const {user, setUser} = useUser()
    const [test, setTest] = useState({
        title: "",
        description: "",
        timeLimit: 0,
        endTime: "",
        teacherId: user?.id,
        tasks: []
    });
    const [question, setQuestion] = useState<any>({
        title: "",
        type: "",
        answers: [],
        pairs: [],
        image: ''
      });
    const router = useRouter()
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const handleCreateTest = async() => {
        try {
            const res = await fetch(`${API_URL}/api/test`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(test)
            })

            const data = await res.json()
            console.log(data)
            localStorage.removeItem('test');
            router.push('/teacher')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const storedTest = localStorage.getItem('test');
        if (storedTest) {
        setTest(JSON.parse(storedTest));
        }
    }, []);

    useEffect(() => {
        if (test.tasks.length>0) {
            localStorage.setItem('test', JSON.stringify(test));
        }
    }, [test]);

    useEffect(() => {
        console.log(question)
    }, [question])
      
    const handleSelect = (type: string) => {
        setQuestionType(type);
        
        if (type === "multiple") {
            setQuestion({
            id: nanoid(),
            title: "",
            type: "multiple",
            answers: Array(5).fill(null).map(() => ({ text: "", isCorrect: false, id: nanoid() })),
            pairs: [],
            image: '',
            });
        } else if (type === "matching") {
            setQuestion({
            id: nanoid(),
            title: "",
            type: "matching",
            answers: [{left: {rightId: '', rightText: '', leftText: '', leftId: "" }}],
            pairs: [{ left: {id: nanoid(), text: ''}, right: {id: nanoid(), text: ''}, id: nanoid() }],
            image: ''
            });
        } else if (type === "written") {
            setQuestion({
            id: nanoid(),
            title: "",
            type: "written",
            answers: [{text: '', id: nanoid()}],
            pairs: [],
            image: ''
        });
    }
    
    setModalOpen(false);
    };
      

    const updateAnswerText = (index: number, text: string) => {
        const updatedAnswers = [...question.answers];
        updatedAnswers[index].text = text;
        setQuestion({ ...question, answers: updatedAnswers });
    };
    
    const toggleAnswerCorrect = (index: number) => {
        const updatedAnswers = [...question.answers];
        updatedAnswers[index].isCorrect = !updatedAnswers[index].isCorrect;
        setQuestion({ ...question, answers: updatedAnswers });
    };

    const formatDateForInput = (isoString: string) => {
        if (!isoString) return ""; 

        const date = new Date(isoString);
        if (isNaN(date.getTime())) return "";
      
        const offset = date.getTimezoneOffset() * 60000;
        return new Date(date.getTime() - offset).toISOString().slice(0, 16);
    };

    const handleSaveMatchingTask = () => {
        const validPairs = question.pairs.filter(
          (pair: any) => pair.left?.text?.trim() && pair.right?.text?.trim()
        );
      
        const answers = validPairs.map((pair: any) => ({
          left: {
            rightId: pair.right.id,
            rightText: pair.right.text,
            leftId: pair.left.id,
            leftText: pair.left.text 
          }
        }));
      
        const taskToSave = {
          ...question,
          type: questionType,
          answers: answers,
          pairs: question.pairs.map((pair: any) => ({
            left: { id: pair.left.id, text: pair.left.text },
            right: { id: pair.right.id, text: pair.right.text }
          }))
        };
      
        setTest((prev: any) => ({
          ...prev,
          tasks: [...prev.tasks, taskToSave]
        }));
      
        setQuestion({
          id: '', 
          title: "",
          type: "",
          answers: [],
          pairs: [{ left: {id: nanoid(), text: ''}, right: {id: nanoid(), text: ''}, id: nanoid() }]
        });
        setQuestionType("");
      };
    
    useEffect(() => {
        console.log(test)
    }, [test]);

    const updateTask = (updatedTask: any) => {
        setTest((prev: any) => ({
            ...prev,
            tasks: prev.tasks.map((task: any) => 
                task.id === updatedTask.id ? updatedTask : task
            )
        }))
    }
    
    const deleteTask = (taskId: any) => {
        setTest(prev => ({
            ...prev,
            tasks: prev.tasks.filter((task: any) => task.id !== taskId)
        }))
    }


    return (
        <div>
            <h1 className="text-[36px] mb-4 font-bold text-center">Створення нового тесту</h1>
            <TestBasicInfo test={test} setTest={setTest} formatDateForInput={formatDateForInput} />
            <TestTasks test={test} updateTask={updateTask} deleteTask={deleteTask} />
            <CreateTestTask questionType={questionType} handleSelect={handleSelect} setQuestionType={setQuestionType} test={test} setTest={setTest} setModalOpen={setModalOpen} question={question} setQuestion={setQuestion} toggleAnswerCorrect={toggleAnswerCorrect} updateAnswerText={updateAnswerText} handleSaveMatchingTask={handleSaveMatchingTask} />
            <div className="flex items-center justify-end mx-auto max-w-3xl">
                <button
                    onClick={handleCreateTest}
                    className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                >
                    Створити тест
                </button>
            </div>
            <div className="w-1/5 fixed top-35 left-4 h-fit bg-[#F0F4F8] shadow-md rounded-2xl p-4 overflow-y-auto max-h-[80vh]">
                     <h1 className="text-center text-[18px] font-bold mb-4">Формули (AsciiMath)</h1>
                     <div className="text-md space-y-2">
                         <div className="mb-2">
                            <div className="flex gap-2">
                                <p className="font-medium">Дріб:</p>
                                <LatextTranform content={"`a/b`"} /> 
                            </div>
                             <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`a/b`</code></p>
                         </div>

                         <div className="mb-2">
                            <div className="flex gap-2">
                                <p className="font-medium">Корінь квадратний:</p>
                                <LatextTranform content={"`sqrt(x)`"} />
                            </div>
                             <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`sqrt(x)`</code></p>
                         </div>

                          <div className="mb-2">
                             <div className="flex gap-2">
                                <p className="font-medium">Корінь n-го степеня:</p>
                                <LatextTranform content={"`root(n)(x)`"} />
                             </div>
                             <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`root(n)(x)`</code></p>
                         </div>

                         <div className="mb-2">
                             <div className="flex gap-2">
                                <p className="font-medium">Степінь:</p>
                                <LatextTranform content={"`x^2`"} />    
                            </div>   
                            <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`x^2`</code></p>
                            <div className="flex gap-2">
                                <LatextTranform content={"`e^x`"} />
                                <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`e^x`</code></p>
                            </div>
                         </div>

                         <div className="mb-2">
                            <div className="flex gap-2">
                                <p className="font-medium">Індекс:</p>
                                <LatextTranform content={"`x_1`"} />
                            </div>
                            <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`x_1`</code></p>
                         </div>

                          <div className="mb-2">
                             <div className="flex gap-2">
                                <p className="font-medium">Сума:</p>
                                <LatextTranform content={"`sum_(i=1)^n i^2`"} />
                             </div>
                             <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`sum_(i=1)^n i^2`</code></p>
                         </div>

                          <div className="mb-2">
                             <div className="flex gap-2">
                                <p className="font-medium">Інтеграл:</p>
                                <LatextTranform content={"`int_a^b x^2 dx`"} />
                             </div>
                             <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`int_a^b x^2 dx`</code></p>
                         </div>

                          <div className="mb-2">
                             <div className="flex gap-2">
                                <p className="font-medium">Множення:</p>
                                <LatextTranform content={"`a * b`"} />
                             </div>
                             <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`a * b`</code> або <code className="bg-gray-200 px-1 rounded">`a cdot b`</code></p>
                         </div>

                          <div className="mb-2">
                             <div className="flex gap-2">
                                <p className="font-medium">Нерівності:</p>
                                <LatextTranform content={"`a <= b`, `a >= b`, `a != b`"} />
                             </div>
                             <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`a {'<'}= b`</code>, <code className="bg-gray-200 px-1 rounded">`a {'>'}= b`</code>, <code className="bg-gray-200 px-1 rounded">`a != b`</code></p>
                         </div>

                          <div className="mb-2">
                            <div className="flex gap-2">
                                <p className="font-medium">Нескінченність:</p>
                                <LatextTranform content={"`oo`"} />
                            </div>
                             <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`oo`</code></p>
                         </div>

                          <div className="mb-2">
                             <div className="flex gap-2">
                                <p className="font-medium">Пі:</p>
                                <LatextTranform content={"`pi`"} />
                             </div>
                             <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`pi`</code></p>
                         </div>

                          <div>
                             <div className="flex gap-2">
                                <p className="font-medium">Грецькі літери (приклади):</p>
                                <LatextTranform content={"`alpha`, `beta`, `gamma`"} />
                             </div>   
                             <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`alpha`</code>, <code className="bg-gray-200 px-1 rounded">`beta`</code>, <code className="bg-gray-200 px-1 rounded">`gamma`</code> (повні назви)</p>
                         </div>

                     </div>
                 </div>
            {modalOpen && <CreateTaskModal handleSelect={handleSelect} setModalOpen={setModalOpen} />}
        </div>
    );
}

export default CreateTest;