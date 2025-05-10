const CreateTaskModal = ({handleSelect, setModalOpen}: any) => {
    return (
        <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-1000">
        <div className="bg-white rounded-2xl p-6 w-[90%] max-w-[600px] shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Оберіть тип завдання</h3>
            <div className="flex flex-col gap-3">
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
                        З розгорнутою відповіддю
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
    )
}

export default CreateTaskModal