const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getAllStudents =async ( ) => {
    try {
        const res = await fetch(`${API_URL}/api/student`, {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        })

        const data = await res.json()
        console.log(data)
        
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getAllTest = async() => {
    try {
        const res = await fetch(`${API_URL}/api/test`, {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        })

        const data = await res.json()

        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getStudentById = async(studentId: any) => {
    try {
        const res = await fetch(`${API_URL}/api/student/${studentId}`, {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache'
            }
        })
        const data = await res.json()

        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const geAllTests = async() => {
    try {
        const res = await fetch(`${API_URL}/api/test`, {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache'
            }
        })
        const data = await res.json()

        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getAllStudentPerfomenceById = async(studentId: any) => {
    try {
        const res = await fetch(`${API_URL}/api/perfomence/one/student/${studentId}`, {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache'
            }
        })
        const data = await res.json()

        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getAssignedTests = async(studentId: any) => {
    try {
        const res = await fetch(`${API_URL}/api/test/assign/${studentId}`)

        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}