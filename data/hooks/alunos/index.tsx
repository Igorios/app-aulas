import { useCallback, useState } from "react";
import { alunosService } from "../../service/alunosService";
import { AlunoInterface } from "../../@types/AlunoInterface";

export const useAlunos = () => {

    const [alunos, setAlunos] = useState<AlunoInterface[]>([]);

    const getAllAlunos = useCallback(async () => {

        const { status, data } = await alunosService.getAllAlunos();

        if (status !== 200){
            throw new Error('Erro ao consultar dados da API')
        }
        setAlunos(data);
    }, []);

    const createAluno = useCallback(async(aluno: AlunoInterface) => {
        const { status } = await alunosService.createAluno(aluno);

        return status;
    }, [])

    const getAlunoById = useCallback(async(id: number) => {
        const { status, data } = await alunosService.getAlunosById(id);

        if (status !== 200){
            throw new Error('Erro ao consultar dados da API')
        }
        setAlunos(data);
        return data;

    }, []);

    const putAlunoById = async (id: number, aluno: AlunoInterface) => {
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
