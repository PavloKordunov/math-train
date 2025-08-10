function renderBoldText(text: string) {
    const parts: React.ReactNode[] = []
    const regex = /\*\*(.+?)\*\*/g
    let lastIndex = 0
    let match
    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index))
        }
        parts.push(<strong key={match.index}>{match[1]}</strong>)
        lastIndex = regex.lastIndex
    }
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex))
    }
    return (
        <div className={`text-xl  max-w-full break-words whitespace-pre-wrap`}>
            <span>{parts}</span>
        </div>
    )
}
export default renderBoldText
