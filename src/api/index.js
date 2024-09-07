import { axios } from 'axios';
import Cookies from 'js-cookie';

const api = () => {
    const tokens = Cookies.get('token');

    return axios.create({
        baseURL: 'https://dummyjson.com',
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${tokens}`,
        }
    })
}

export default api;