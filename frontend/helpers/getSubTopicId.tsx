'use client'

import { createContext, useContext, useState } from 'react'

const SubTopicContext = createContext<
    | {
          subTopicId: string
          setSubTopicId: React.Dispatch<React.SetStateAction<string>>
      }
    | undefined
>(undefined)

export const SubTopicProvider = ({ children }: any) => {
    const [subTopicId, setSubTopicId] = useState('')

    return (
        <SubTopicContext.Provider value={{ subTopicId, setSubTopicId }}>
            {children}
        </SubTopicContext.Provider>
    )
}

export const useSubTopicContext = () => {
    const context = useContext(SubTopicContext)
    if (!context) {
        throw new Error(
            'useSubTopicContext must be used within SubTopicProvider'
        )
    }
    return context
}
