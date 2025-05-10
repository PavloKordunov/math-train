'use client';

import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import TestTasks from "@/components/testComponents/TestTasks";
import CreateTestTask from "@/components/testComponents/CreateTestTask";
import TestBasicInfo from "@/components/testComponents/TestBasicInfo";
import CreateTaskModal from "@/components/testComponents/CreateTaskModal";

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
      });
    const router = useRouter()
    const API_URL = process.env.API_URL;

    const handleCreateTest = async() => {
        try {
            const res = await fetch(`https://math-train.onrender.com/api/test`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(test)
            })

            const data = await res.json()
            console.log(data)
            router.push('/teacher')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(question)
    }, [question])
      
    const handleSelect = (type: string) => {
        setQuestionType(type);
        
        if (type === "multiple") {
            setQuestion({
            title: "",
            type: "multiple",
            answers: Array(5).fill(null).map(() => ({ text: "", isCorrect: false, id: nanoid() })),
            pairs: [],
            });
        } else if (type === "matching") {
            setQuestion({
            title: "",
            type: "matching",
            answers: [{left: {rightId: ''}}],
            pairs: [{ left: {id: nanoid(), text: ''}, right: {id: nanoid(), text: ''}, id: nanoid() }],
            });
        } else if (type === "written") {
            setQuestion({
            title: "",
            type: "written",
            answers: [{text: '', id: nanoid()}],
            pairs: [],
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
            rightId: pair.right.id 
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
            {modalOpen && <CreateTaskModal handleSelect={handleSelect} setModalOpen={setModalOpen} />}
        </div>
    );
}

export default CreateTest;