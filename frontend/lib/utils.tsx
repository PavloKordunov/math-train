const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getAllStudents =async ( ) => {
    try {
        const res = await fetch(`${API_URL}/api/student`)

        const data = await res.json()
        console.log(data)
        
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getAllTest = async() => {
    try {
        const res = await fetch(`${API_URL}/api/test`)

        const data = await res.json()

        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}