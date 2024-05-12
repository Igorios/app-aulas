import { Api } from "../providers";

const getAllAlunos = () => Api.get('/alunos');
const getAlunosById = (id) => Api.get(`/alunos/${id}`);

export const alunosService = {
    getAllAlunos,
    getAlunosById
}
