import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function ExibirAluno() {

    const { idAluno } = useLocalSearchParams();
    console.log(idAluno);


    return<>
        <Text>Detalhes do aluno: {idAluno}</Text>
    </>
}