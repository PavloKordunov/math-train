import { ReactNode } from 'react'

interface EmptyStateProps {
    icon: ReactNode
    title: string
    description: string
    action?: ReactNode
}

export default function EmptyState({
    icon,
    title,
    description,
    action,
}: EmptyStateProps) {
    return (
        <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 flex items-center justify-center text-gray-400 mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-4">{description}</p>
            {action && <div>{action}</div>}
        </div>
    )
}
