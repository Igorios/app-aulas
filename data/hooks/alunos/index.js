import { useCallback, useState } from "react";
import { alunosService } from "../../service/alunosService";

export const useAlunos = () => {

    const [alunos, setAlunos] = useState([]);

    const getAllAlunos = useCallback(async () => {

        const { status, data } = await alunosService.getAllAlunos();

        if (status !== 200){
            throw new Error('Erro ao consultar dados da API')
        }
        setAlunos(data);
    }, []);

    const createAluno = useCallback(async(aluno) => {
        const { status } = await siteService.createAluno(aluno)

        if (status !== 200){
           throw new Error('Erro ao enviar os dados para API')
        }
        
    }, [])

    const getAlunoById = useCallback(async(id) => {
        const { status, data } = await alunosService.getAlunosById(id);

        if (status !== 200){
            throw new Error('Erro ao consultar dados da API')
        }
        setAlunos(data);
        return data;

    }, []);

    return {
        alunos,
        getAllAlunos,
        getAlunoById,
        createAluno
    }


}
