import { Api } from "../providers";
import { AlunoInterface } from "../@types/AlunoInterface";

const getAllAlunos = () => Api.get('/alunos');
const getAlunosById = (id: number) => Api.get(`/alunos/${id}`);
const createAluno = (aluno: AlunoInterface) => Api.post('/alunos', aluno)
const putAlunoById = (id: number, aluno: AlunoInterface) => Api.put(`/alunos/${id}`, aluno)

export const alunosService = {
    getAllAlunos,
    getAlunosById,
    createAluno,
    putAlunoById
}
