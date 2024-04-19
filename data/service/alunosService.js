import { Api } from "../providers";

const getAllAlunos = () => Api.get('/alunos');
console.log(getAllAlunos);

export const alunosService = {
    getAllAlunos
}
