import { useCallback, useState } from "react";
import { alunosService } from "../../service/alunosService";

export const useAlunos = () => {

    const [alunos, setAlunos] = useState([]);

    const getAllAlunos = useCallback(async () => {

        const { status, data } = await alunosService.getAllAlunos();
        console.log(data)

        if (status !== 200){
            throw new Error('Erro ao consultar dados da API')
        }
        setAlunos(data);
    }, [])

    return {
        alunos,
        getAllAlunos
    }


}
