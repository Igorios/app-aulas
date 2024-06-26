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
        const { status, data } = await alunosService.createAluno(aluno)

       
        
    }, [])

    const getAlunoById = useCallback(async(id) => {
        const { status, data } = await alunosService.getAlunosById(id);

        if (status !== 200){
            throw new Error('Erro ao consultar dados da API')
        }
        setAlunos(data);
        return data;

    }, []);

    const putAlunoById = async (id, aluno) => {
        const { status, data } = await alunosService.putAlunoById(id, aluno);
    
        if (status !== 200) {
          throw new Error('Erro ao atualizar aluno');
        }
    
        setAlunos(data)
        return data;
      };

    return {
        alunos,
        getAllAlunos,
        getAlunoById,
        createAluno,
        putAlunoById
    }


}
