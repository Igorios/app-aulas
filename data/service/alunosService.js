import { Api } from "../providers";

const getAllAlunos = () => Api.get('/alunos');
const getAlunosById = (id) => Api.get(`/alunos/${id}`);
const createAluno = (aluno) => Api.post('/alunos', aluno)

export const alunosService = {
    getAllAlunos,
    getAlunosById,
    createAluno
}
