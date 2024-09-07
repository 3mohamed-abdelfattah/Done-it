import api from ".";

export const login = async (email, password) => {
    try {
        const response = await api().post('/login', { email: email, password: password })
    } catch (error) {
        return error.response.data;
    }
}