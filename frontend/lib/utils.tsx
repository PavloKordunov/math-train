const API_URL = process.env.NEXT_PUBLIC_API_URL
export const getAllStudentsByTeacherID = async (id: string) => {
    try {
        const res = await fetch(`${API_URL}/api/student/teacher/${id}`, {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                Pragma: 'no-cache',
                Expires: '0',
            },
            next: {
                tags: ['students'],
            },
        })

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }

        const data = await res.json()
        return data.data
    } catch (error) {
        console.error('Error fetching students:', error)
        return []
    }
}

export const getAllTest = async (teacherId: string) => {
    try {
        const res = await fetch(`${API_URL}/api/test/teacher/${teacherId}`, {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                Pragma: 'no-cache',
                Expires: '0',
            },
            next: {
                tags: ['tests'],
            },
        })

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }

        const data = await res.json()
        return data
    } catch (error) {
        console.error('Error fetching tests:', error)
        return []
    }
}

export const getStudentById = async (studentId: any) => {
    try {
        const res = await fetch(`${API_URL}/api/student/${studentId}`, {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache',
            },
        })
        const data = await res.json()

        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const geAllTests = async () => {
    try {
        const res = await fetch(`${API_URL}/api/test`, {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache',
            },
        })
        const data = await res.json()

        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getAllStudentPerfomenceById = async (studentId: any) => {
    try {
        const res = await fetch(
            `${API_URL}/api/perfomence/one/student/${studentId}`,
            {
                cache: 'no-store',
                headers: {
                    'Cache-Control': 'no-cache',
                },
            }
        )
        const data = await res.json()

        console.log('Performance: ', data)
        return data.data
    } catch (error) {
        console.log(error)
    }
}

export const getAssignedTests = async (studentId: any) => {
    try {
        const res = await fetch(
            `${API_URL}/api/test/assign/student/${studentId}`
        )

        const data = await res.json()
        console.log('Assigned: ', data)
        return data.data
    } catch (error) {
        console.log(error)
    }
}
