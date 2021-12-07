import { API_URL } from '../../utils/constants'

export async function getExperienciaApi() {
    try {
        const url = `${API_URL}/api/experience/`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}
