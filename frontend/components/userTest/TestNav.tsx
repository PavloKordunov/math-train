'use client'

const TestNav = ({
    active,
    setActive,
    savedAnswers,
    tasks,
    scrollToTask,
    isSmallScreen,
    isMobile,
    setIsOpen,
    timeLeft,
    showTime,
}: any) => {
    const formatTime = (seconds: number) => {
        const safeSeconds = Math.max(0, seconds)
        const min = Math.floor(safeSeconds / 60)
        const sec = safeSeconds % 60
        return `${min}:${sec < 10 ? '0' : ''}${sec}`
    }

    return (
        <div className="w-full bg-white sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                <div className="flex gap-3 md:gap-12 flex-1">
                    <p
                        onClick={() => setActive(false)}
                        className={`text-base md:text-[20px] cursor-pointer relative transition duration-200 ${
                            active === false
                                ? 'text-[#CA193A] font-bold'
                                : 'text-black font-medium'
                        }`}
                    >
                        Іспит
                        {active === false && (
                            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#CA193A]"></span>
                        )}
                    </p>
                    <p
                        onClick={() => setActive(true)}
                        className={`text-base md:text-[20px] cursor-pointer relative transition duration-200 ${
                            active === true
                                ? 'text-[#CA193A] font-bold'
                                : 'text-black font-medium'
                        }`}
                    >
                        {isSmallScreen
                            ? 'Матеріали'
                            : 'Математика:довідкові матеріали'}
                        {active === true && (
                            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#CA193A]"></span>
                        )}
                    </p>
                </div>

                {isMobile && (
                    <div className="flex gap-1 md:gap-6 items-center justify-end mb-1 md:mb-6">
                        <button
                            className="bg-rose-600 h-8 text-white px-2 md:px-3 py-1 rounded-lg md:rounded-[21px] hover:bg-rose-700 font-semibold text-xs md:text-sm lg:text-base"
                            onClick={() => {
                                setIsOpen(true)
                            }}
                        >
                            Завершити тест
                        </button>
                        <div className="flex gap-1 md:gap-2 items-center">
                            <p className="text-rose-600 text-sm md:text-base">
                                {formatTime(timeLeft)}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {isSmallScreen && !active && (
                <div>
                    <div className="bg-white border border-gray-200 border-t-0 shadow-sm p-4 flex gap-3 justify-start overflow-x-auto">
                        {tasks?.map((task: any) => {
                            const isSaved =
                                (task.type === 'multiple' &&
                                    savedAnswers.multiple[task.id]) ||
                                (task.type === 'matching' &&
                                    savedAnswers.matching[task.id]) ||
                                (task.type === 'written' &&
                                    savedAnswers.written[task.id])

                            return (
                                <button
                                    key={task.id}
                                    onClick={() => scrollToTask(task.id)}
                                    className={`
                            min-w-[44px] h-11 flex items-center justify-center rounded-[6px] text-sm font-semibold
                            transition-all duration-200 border
                            ${
                                isSaved
                                    ? 'bg-[#CA193A] text-white border-[#CA193A]'
                                    : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'
                            }
                        `}
                                >
                                    {task.number}
                                </button>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default TestNav
