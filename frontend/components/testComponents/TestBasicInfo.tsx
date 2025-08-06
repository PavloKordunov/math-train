import { title } from 'process'
import { memo } from 'react'

const TestBasicInfo = ({ test, setTest, errors, setErrors }: any) => {
    return (
        <div className="bg-[#F0F4F8] shadow-md rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                    Назва тесту
                </label>
                <input
                    type="text"
                    value={test.title}
                    onChange={(e) => {
                        setTest({ ...test, title: e.target.value })
                        if (errors.title && e.target.value.trim() !== '') {
                            setErrors((prev: any) => ({ ...prev, title: '' }))
                        }
                    }}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                    placeholder="Наприклад: Тест №3 — Інтеграли"
                />
                {errors.title && (
                    <p className="text-sm text-red-600 mt-1">{errors.title}</p>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                    Опис тесту
                </label>
                <textarea
                    value={test.description}
                    onChange={(e) =>
                        setTest({ ...test, description: e.target.value })
                    }
                    className="resize-none w-full border border-gray-300 rounded-xl px-4 py-2"
                    placeholder="Короткий опис, наприклад: Тест охоплює теми похідних, інтегралів і графіків функцій."
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                    Тривалість (хв)
                </label>
                {console.log(typeof test.timeLimit, test.timeLimit)}
                <input
                    type="text"
                    value={test.timeLimit}
                    onChange={(e) => {
                        setTest({ ...test, timeLimit: e.target.value })
                        if (errors.timeLimit && e.target.value.trim() !== '') {
                            setErrors((prev: any) => ({
                                ...prev,
                                timeLimit: '',
                            }))
                        }
                    }}
                    onKeyDown={(e) => {
                        if (
                            !/[0-9]/.test(e.key) &&
                            e.key !== 'Backspace' &&
                            e.key !== 'Delete' &&
                            e.key !== 'ArrowLeft' &&
                            e.key !== 'ArrowRight' &&
                            e.key !== 'Tab'
                        ) {
                            e.preventDefault()
                        }
                    }}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2"
                />
                {errors.timeLimit && (
                    <p className="text-sm text-red-600 mt-1">
                        {errors.timeLimit}
                    </p>
                )}
            </div>
        </div>
    )
}

export default memo(TestBasicInfo)
