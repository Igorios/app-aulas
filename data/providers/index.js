import axios from "axios";

export const Api = axios.create({
    baseURL: 'https://api-alunos.igorborgesweb.com/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    }
})
