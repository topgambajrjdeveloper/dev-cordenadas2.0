import { useState } from "react";
import { getAboutMeApi } from '../pages/api/conoceme'

export default function useAboutMe() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [aboutMe, setAboutMe] = useState(null)

    const getAboutMe = async () => {
        try {
            setLoading(true)
            const result = await getAboutMeApi()
            setLoading(false)
            setAboutMe(result)
        } catch (error) {
            throw error
        }
    }

    return {
        loading,
        error,
        aboutMe,
        getAboutMe
    }
}