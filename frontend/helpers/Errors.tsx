import React from 'react'

export class ErrorBoundary extends React.Component<
    React.PropsWithChildren<{}>
> {
    state = { hasError: false }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: any, errorInfo: any) {
        if (error.message?.includes('Typesetting failed')) {
        }
    }

    render() {
        if (this.state.hasError) return null
        return this.props.children
    }
}
