import { FiEyeOff } from "react-icons/fi"

const TimeTracker = () => {
    return (
        <div className="w-full bg-[#E3E2E2] shadow-md flex items-start">
            <div className="self-stretch bg-rose-600 w-2"></div>
            <div className="w-full px-15">
                <p className="mb-6 mt-4 text-black font-medium text-[18px]">НМT-2025_демоверсія обмежений у часі. Таймер праворуч показує, скільки хвилин залишилося до кінця роботи. Вибравши відповідь на завдання, не забудьте натиснути на "Зберегти відповідь" для кожного завдання. Якщо Ви цього не зробите, відповідь не буде збережено і зараховано. Перш ніж натиснути на
                "Завершити роботу над тестом", перевірте, чи зберегли всі надані відповіді.</p>
                <div className="flex gap-6 items-center justify-end mb-6">
                    <button className="bg-rose-600 text-white px-3 py-1 rounded-[21px] hover:bg-rose-700 font-semibold ">Завершити роботу над тестом</button>
                    <div className="flex gap-2 items-center">
                        <p className="text-rose-600">2:59:23</p>
                        <div className="p-1 bg-rose-600 hover:bg-rose-700">
                            <FiEyeOff size={16} color="white"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeTracker