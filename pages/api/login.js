import { API_URL } from "../../utils/constants";

export async function loginApi(formvalue) {
  try {
    const url = `${API_URL}/api/auth/login/`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json"
      },
      body: JSON.stringify(formvalue)
    };
    const response = await fetch(url, params);
    if (response !== 200) {
      throw new Error("Usuario o contraseña incorreptos");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}
