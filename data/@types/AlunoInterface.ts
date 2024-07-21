import { TurmaInterface } from "./TurmaInterface"

export interface AlunoInterface {
    idAluno: number
    nome: string
    nascimento: string | any
    genero: string
    turma: TurmaInterface
}