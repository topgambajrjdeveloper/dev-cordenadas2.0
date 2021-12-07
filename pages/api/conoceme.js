import { API_URL } from '../../utils/constants'

export async function getAboutMeApi() {
    try {
        const url = `${API_URL}/api/about/`;
        console.log(url);        
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

