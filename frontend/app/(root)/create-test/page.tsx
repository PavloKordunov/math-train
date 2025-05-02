'use client';

import { useState } from "react";

const CreateTest = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleAddQuestion = (type: string) => {
        console.log("Створюємо завдання типу:", type);
      };

    const handleSelect = (type: string) => {
    handleAddQuestion(type);
      setModalOpen(false);
    };

    return (
        <div>
            <h1 className="text-[36px] font-bold text-center">Створення нового тесту</h1>
            <div className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Назва тесту</label>
                    <input
                    type="text"
                    // value={title}
                    // onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                    placeholder="Наприклад: Тест №3 — Інтеграли"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Опис тесту</label>
                    <textarea
                    // value={description}
                    // onChange={(e) => setDescription(e.target.value)}
                    className="resize-none w-full border border-gray-300 rounded-xl px-4 py-2"
                    placeholder="Короткий опис, наприклад: Тест охоплює теми похідних, інтегралів і графіків функцій."
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Тривалість (хв)</label>
                    <input
                    type="number"
                    // value={duration}
                    // onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Крайній термін проходження</label>
                    <input
                    type="datetime-local"
                    // value={deadline}
                    // onChange={(e) => setDeadline(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                    />
                </div>
            </div>
            <div className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                <div
                    onClick={() => setModalOpen(true)}
                    className="cursor-pointer border-2 border-dashed border-gray-400 hover:border-[#FA8E66] rounded-xl h-36 flex items-center justify-center transition"
                >
                    <div className="text-4xl text-gray-500 hover:text-[#FA8E66] font-bold">＋</div>
                </div>
            </div>
            {modalOpen && (
                <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-1000">
                <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Оберіть тип завдання</h3>
                    <div className="w-wull flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => handleSelect("multiple")}
                                className="w-full py-2 px-4 bg-[#FA8E66] text-white rounded-xl hover:bg-opacity-90 transition"
                            >
                                Тест з 4 відповідями
                            </button>
                            <button
                                onClick={() => handleSelect("matching")}
                                className="w-full py-2 px-4 bg-[#6C63FF] text-white rounded-xl hover:bg-opacity-90 transition"
                            >
                                Завдання на відповідність
                            </button>
                            <button
                                onClick={() => handleSelect("written")}
                                className="w-full py-2 px-4 bg-[#2F80ED] text-white rounded-xl hover:bg-opacity-90 transition"
                            >
                                Завдання з розгорнутою відповіддю
                            </button>
                        </div>
                        <button
                            onClick={() => setModalOpen(false)}
                            className="mt-4 text-sm text-gray-500 hover:underline text-center"
                        >
                            Скасувати
                        </button>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default CreateTest;