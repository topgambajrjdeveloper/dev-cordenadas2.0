import { API_URL } from '../../utils/constants'

export async function getProjectsApi() {
    try {
        const url = `${API_URL}/api/projects/`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}