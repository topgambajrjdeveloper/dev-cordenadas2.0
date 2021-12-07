import { useState } from "react";
import { getProjectsApi } from '../pages/api/proyectos'

export default function useProjects() {
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [proyectos, setProjects] = useState(null)

    const getProjects = async () => {
        try {
            setLoading(true)
            const result = await getProjectsApi()
            setLoading(false)
            setProjects(result)
        } catch (error) {
            throw error
        }
    }

    return {
        loading,
        error,
        proyectos,
        getProjects
    }
}