'use client'

import Image from "next/image"
import { useState, useEffect } from "react"
import { FiX, FiZoomIn, FiZoomOut } from "react-icons/fi"

const AdditionalDocs = () => {
    const [openFull, setOpenFull] = useState(false)
    const [photo, setPhoto] = useState('')
    const [zoomLevel, setZoomLevel] = useState(1)
    const [isDragging, setIsDragging] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [startPos, setStartPos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        if (openFull) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [openFull])

    const openFullscreen = (img: string) => {
        setPhoto(img)
        setOpenFull(true)
        setZoomLevel(1)
        setPosition({ x: 0, y: 0 })
    }

    const closeFullscreen = () => {
        setOpenFull(false)
    }

    const handleZoomIn = () => {
        setZoomLevel(prev => Math.min(prev + 0.25, 3))
    }

    const handleZoomOut = () => {
        setZoomLevel(prev => Math.max(prev - 0.25, 1))
        if (zoomLevel <= 1) {
            setPosition({ x: 0, y: 0 })
        }
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoomLevel > 1) {
            setIsDragging(true)
            setStartPos({
                x: e.clientX - position.x,
                y: e.clientY - position.y
            })
        }
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return
        setPosition({
            x: e.clientX - startPos.x,
            y: e.clientY - startPos.y
        })
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    return (
        <div className='w-full'>
            <div className='flex'>
                <div className='w-1/2 h-fit overflow-hidden cursor-pointer' onClick={() => openFullscreen('/additionalDocs1.bmp')}>
                    <Image 
                        src='/additionalDocs1.bmp'
                        alt='Документ 1'
                        width={500} 
                        height={500}
                        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                    />
                </div>
                <div className='w-1/2 h-fit overflow-hidden cursor-pointer' onClick={() => openFullscreen('/additionalDocs2.bmp')}>
                    <Image 
                        src='/additionalDocs2.bmp'
                        alt='Документ 2'
                        width={500} 
                        height={500}
                        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                    />
                </div>
            </div>
            <div className='w-1/2 h-fit overflow-hidden cursor-pointer' onClick={() => openFullscreen('/additionalDocs3.bmp')}>
                <Image 
                    src='/additionalDocs3.bmp'
                    alt='Документ 3'
                    width={1000} 
                    height={500}
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
            </div>

            {openFull && (
                <div 
                    className="fixed inset-0 bg-black/90 z-[1000] flex flex-col overflow-hidden"
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    <div className="flex-1 relative overflow-hidden">
                        <div 
                            className="absolute inset-0 flex items-center justify-center"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            style={{
                                cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                            }}
                        >
                            <div 
                                className="relative transition-transform duration-300"
                                style={{ 
                                    transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                                    transformOrigin: 'center center'
                                }}
                            >
                                <Image 
                                    src={photo}
                                    alt="Документ у повноекранному режимі"
                                    width={2000}
                                    height={2000}
                                    className="max-w-[90vw] max-h-[90vh] object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-3 flex justify-center items-center gap-4">
                        <button 
                            onClick={handleZoomOut}
                            className="text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                            title="Зменшити"
                            disabled={zoomLevel <= 1}
                        >
                            <FiZoomOut size={24} />
                        </button>
                        <span className="text-white text-sm">
                            Масштаб: {zoomLevel.toFixed(2)}x
                        </span>
                        <button 
                            onClick={handleZoomIn}
                            className="text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                            title="Збільшити"
                            disabled={zoomLevel >= 3}
                        >
                            <FiZoomIn size={24} />
                        </button>
                        <button 
                            onClick={closeFullscreen}
                            className="text-white p-2 rounded-full hover:bg-gray-700 transition-colors ml-4"
                            title="Закрити"
                        >
                            <FiX size={24} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdditionalDocs