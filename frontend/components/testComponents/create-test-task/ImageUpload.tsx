import { MdDelete, MdImage } from 'react-icons/md'
import { useRef, useState } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const ImageUpload = ({
    setQuestion,
    typeAnswer,
    id,
    setEditedImages,
    className,
}: any) => {
    const [loading, setLoading] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => inputRef.current?.click()

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('file', file)

        try {
            setLoading(true)
            const res = await fetch(`${API_URL}/api/upload`, {
                method: 'POST',
                body: formData,
            })
            if (!res.ok) throw new Error('Помилка завантаження зображення')
            const data = await res.json()
            setEditedImages((prev: any) => [...prev, data.publicUrl])
            setQuestion((prev: any) => {
                if (id === 'title') {
                    return { ...prev, image: data.publicUrl }
                } else if (typeAnswer === 'matching') {
                    return {
                        ...prev,
                        pairs: prev.pairs.map((pair: any) => {
                            if (id === `left${pair.left.id}`) {
                                return {
                                    ...pair,
                                    left: {
                                        ...pair.left,
                                        image: data.publicUrl,
                                    },
                                }
                            } else if (id === `right${pair.right.id}`) {
                                return {
                                    ...pair,
                                    right: {
                                        ...pair.right,
                                        image: data.publicUrl,
                                    },
                                }
                            }
                            return pair
                        }),
                    }
                } else {
                    return {
                        ...prev,
                        answers: prev.answers.map((ans: any) =>
                            ans.id === id
                                ? { ...ans, image: data.publicUrl }
                                : ans
                        ),
                    }
                }
            })
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="inline-block relative">
            {loading ? (
                <span className="text-sm text-gray-500">Завантаження...</span>
            ) : (
                <button
                    type="button"
                    onClick={handleClick}
                    className={`${className} p-1.5 bg-gray-200 border border-gray-400 rounded absolute `}
                >
                    <MdImage size={18} />
                </button>
            )}
            <input
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
            />
        </div>
    )
}

export default ImageUpload
