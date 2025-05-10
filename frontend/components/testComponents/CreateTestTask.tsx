import { nanoid } from "nanoid";

const CreateTestTask = ({questionType, setQuestionType, test, setTest, setModalOpen, question, setQuestion, toggleAnswerCorrect, updateAnswerText, handleSaveMatchingTask}: any) => {
    
    return (
        <div className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
            {questionType === '' && <div
                onClick={() => setModalOpen(true)}
                className="cursor-pointer border-2 border-dashed border-gray-400 hover:border-[#FA8E66] rounded-xl h-36 flex items-center justify-center transition"
            >
                <div className="text-4xl text-gray-500 hover:text-[#FA8E66] font-bold">＋</div>
            </div>}
            {questionType === 'multiple' && (
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Умова завдання</label>
                    <input
                        type="text"
                        value={question.title}
                        onChange={(e) =>
                            setQuestion((prev: any) => ({ ...prev, title: e.target.value }))
                        }
                        className="w-full border border-gray-300 rounded-xl px-4 py-2"
                        placeholder={`Введіть умову умову`}
                    />
                    {question.answers.map((answer: any, index: number) => (
                        <div key={index} className="flex items-center gap-4 mt-4">
                            <input
                                type="checkbox"
                                checked={answer.isCorrect}
                                onChange={() => toggleAnswerCorrect(index)}
                            />
                            <input
                                type="text"
                                value={answer.text}
                                onChange={(e) => updateAnswerText(index, e.target.value)}
                                className="w-full border border-gray-300 rounded-xl px-4 py-2"
                                placeholder={`Введіть умову відповіді ${index + 1}`}
                            />
                        </div>
                    ))}
                    <div className="flex w-full mt-4 items-center gap-4 justify-end">
                        <button
                            className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                            onClick={() => setQuestionType('')}
                        >
                            Відхилити
                        </button>  
                        <button
                            className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                            onClick={() => {
                                setTest((prev: any) => ({
                                    ...prev,
                                    tasks: [...prev.tasks, { ...question, type: questionType }],
                                }));
                                setQuestion({
                                    title: "",
                                    type: "",
                                    answers: Array(5).fill(null).map(() => ({ text: "", isCorrect: false }))
                                });
                                setQuestionType("");
                                console.log(test);
                            }}
                        >
                            Зберегти
                        </button> 
                    </div>    
                </div>
            )}
            {questionType === 'matching' && (
            <div>
                <label className="block text-gray-700 font-medium mb-1">Умова завдання</label>
                <input
                type="text"
                value={question.title}
                onChange={(e) => setQuestion((prev: any) => ({ ...prev, title: e.target.value }))}
                className="w-full border border-gray-300 rounded-xl px-4 py-2"
                placeholder="Введіть інструкцію для відповідності"
                />
                {question.pairs.map((pair: any, index: number) => (
                <div key={index} className="flex items-center gap-4 mt-4">
                    <input
                    type="text"
                    value={pair?.left.text}
                    onChange={(e) => {
                        const newPairs = [...question.pairs];
                        newPairs[index].left.text = e.target.value;
                        setQuestion((prev: any) => ({ ...prev, pairs: newPairs }));
                    }}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                    placeholder={`Ліва частина ${index + 1}`}
                    />
                    <span className="text-xl font-bold">—</span>
                    <input
                    type="text"
                    value={pair?.right.text}
                    onChange={(e) => {
                        const newPairs = [...question.pairs];
                        newPairs[index].right.text = e.target.value;
                        setQuestion((prev: any) => ({ ...prev, pairs: newPairs }));
                    }}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                    placeholder={`Права частина ${index + 1}`}
                    />
                    <button
                    onClick={() => {
                        const newPairs = [...question.pairs];
                        newPairs.splice(index, 1);
                        setQuestion((prev: any) => ({ ...prev, pairs: newPairs }));
                    }}
                    className="text-red-500 hover:underline"
                    >
                    ✕
                    </button>
                </div>
                ))}
                <button
                onClick={() => {
                    setQuestion((prev: any) => ({
                    ...prev,
                    pairs: [...prev.pairs, { left: {id: nanoid(), text: ''}, right: {id: nanoid(), text: ''}, id: nanoid() }],
                    }));
                }}
                className="mt-4 text-sm text-blue-600 hover:underline"
                >
                ➕ Додати пару
                </button>
                <div className="flex w-full mt-4 items-center gap-4 justify-end">
                <button
                    className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                    onClick={() => setQuestionType("")}
                >
                    Відхилити
                </button>
                <button
                    className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                    onClick={handleSaveMatchingTask}
                >
                    Зберегти
                </button>
                </div>
            </div>
            )}
            {questionType === 'written' && (
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Умова завдання</label>
                    <textarea
                        value={question.title}
                        onChange={(e) => setQuestion({ ...question, title: e.target.value })}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 resize-none"
                        placeholder="Введіть текст запитання"
                    />
                        <div className="flex items-center gap-4 mt-4">
                            <p>Введіть відповідь: </p>
                            <input
                                type="text"
                                value={question.answers[0]?.text || ""}
                                onChange={(e) => setQuestion({ ...question, answers: [{ text: e.target.value, id: nanoid() }] })}
                                className="w-full border border-gray-300 rounded-xl px-4 py-2"
                                placeholder={`Введіть відповідь`}
                            />
                        </div>
                    <div className="flex w-full mt-4 items-center gap-4 justify-end">
                        <button
                            className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                            onClick={() => setQuestionType('')}
                        >
                            Відхилити
                        </button>  
                        <button
                            className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
                            onClick={() => {
                                setTest((prev: any) => ({
                                    ...prev,
                                    tasks: [...prev.tasks, { ...question, type: questionType }],
                                }));
                                setQuestion({
                                    title: "",
                                    type: "",
                                    answers: Array(4).fill(null).map(() => ({ text: "", isCorrect: false }))
                                });
                                setQuestionType("");
                                console.log(test);
                            }}
                        >
                            Зберегти
                        </button> 
                    </div>    
                </div>
            )}
        </div>
    )
}

export default CreateTestTask