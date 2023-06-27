import axios from "axios"
import { API_ROUTE } from "../config/config";

export const getApi = (url) => {
    return axios.get(`${API_ROUTE}${url}`);
}

export const postApi = (url, body) => {
    return axios.post(`${API_ROUTE}${url}`, body, {
        headers: {'Content-Type': 'application/json'}
    })
}