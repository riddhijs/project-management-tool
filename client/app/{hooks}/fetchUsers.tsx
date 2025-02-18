"use client"
import { useEffect, useState } from "react"

const fetchData = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/0.8/?results=20')
        if (!response.ok) {

            const er = new Error('something went wrong')
            throw er
        }
        const responseJson = await response.json()
        return responseJson
    }
    catch (e) {
        throw e
    }

}
export const useFetchUserData = () => {
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetchData().then(res => {
            setUserData(res?.results)
        })
            .catch((err) => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return { userData, loading, error }
}