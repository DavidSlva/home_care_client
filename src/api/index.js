import axios from "axios"
import { API_ROUTE } from "../config/config";

export const getApi = (url) => {
    return axios.get(`${API_ROUTE}${url}`);
}

/**
 * Función para llamar a la api tipo POST
 * Usualmente utilizada para formularios
 * @param {String} url - Dirección de la APi a la que se le hará la consulta
 * @param {Object} body - Datos que se enviarán a la API
 * @return {Promise} - Devuelve el resultado de la consulta
 * @example
 * // Ejemplo de uso:
 * const response = await postApi('/auth/login', body)
 * // EL AWAIT ES IMPORTANTEEEEEEEEE
 */



/*
{
    "nombre": "a",
    "rut": "123",
    "edad": 213,
    "numero": 1234,
    "fecha_nacimiento": "2023-06-28T05:34:07.266Z",
    "mail": "m@gmail.com",
    "contrasena": "1234"
}
*/
 
export const postApi = (url, body) => {
    return axios.post(`${API_ROUTE}${url}`, body, {
        headers: {'Content-Type': 'application/json'}
    })
}