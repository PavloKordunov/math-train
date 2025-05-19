import { memo } from "react";

const TestBasicInfo = ({test, setTest, formatDateForInput}: any) => {
    return (
        <div className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Назва тесту</label>
            <input
            type="text"
            value={test.title}
            onChange={(e) => setTest({ ...test, title: e.target.value })}
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            placeholder="Наприклад: Тест №3 — Інтеграли"
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Опис тесту</label>
            <textarea
            value={test.description}
            onChange={(e) => setTest({ ...test, description: e.target.value })}
            className="resize-none w-full border border-gray-300 rounded-xl px-4 py-2"
            placeholder="Короткий опис, наприклад: Тест охоплює теми похідних, інтегралів і графіків функцій."
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Тривалість (хв)</label>
            <input
            type="number"
            value={test.timeLimit}
            onChange={(e) => setTest({ ...test, timeLimit: Number(e.target.value) })}
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            />
        </div>

        <div>
            <label className="block text-gray-700 font-medium mb-1">Крайній термін проходження</label>
            <input
            type="datetime-local"
            value={formatDateForInput(test.endTime)}
            onChange={(e) => {
                const isoDate = new Date(e.target.value).toISOString();
                setTest({ ...test, endTime: isoDate });
              }}
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            />
        </div>
    </div>
    )
} 

export default memo(TestBasicInfo)