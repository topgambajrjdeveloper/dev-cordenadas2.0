import { useState } from "react";
import { getExperienciaApi } from '../pages/api/experiencia'

export default function useAboutMe() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [experiencia, setExperiencia] = useState(null)

    const getExperiencia = async () => {
        try {
            setLoading(true)
            const result = await getExperienciaApi()
            setLoading(false)
            setExperiencia(result)
        } catch (error) {
            throw error
        }
    }

    return {
        loading,
        error,
        experiencia,
        getExperiencia
    }
}