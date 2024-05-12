import { useLocalSearchParams, useNavigation } from "expo-router";
import { Text, View } from "react-native";
import { useAlunos } from "../../../../data/hooks/alunos";
import { useEffect, useLayoutEffect, useState } from "react";

export default function ExibirAluno() {
  const navigation = useNavigation();

  const { idAluno } = useLocalSearchParams();
  const { getAlunoById } = useAlunos();
  const [detalheAluno, setDetalheAlunos] = useState();

  const fetchDetalhesAlunos = async () => {
    try {
      const data = await getAlunoById(idAluno);
      setDetalheAlunos(data);
    } catch (error) {
      console.error("Erro ao buscar dados da Api.", error);
    }
  };

  useEffect(() => {
    fetchDetalhesAlunos();
  }, [idAluno]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Aluno ${detalheAluno?.nomeAluno}`,
    });
  }, [navigation, detalheAluno?.nomeAluno]);

  return (
    <>
      <View className="bg-gray-800 w-full h-40 flex items-center justify-center">
        <View>
          <Text className="text-zinc-200 text-2xl mb-6 text-center font-medium">
            {detalheAluno?.nomeAluno}
          </Text>
        </View>
      </View>
      <View className="bg-gray-200 w-full h-screen -mt-10 rounded-t-3xl">
        <View className="p-5">
          <View className="items-start">

            <Text className="font-semibold text-2xl mb-5">Descrição</Text>
            
            <Text>
              Nome:{" "}
              <Text className="font-bold">{detalheAluno?.nomeAluno}</Text>
            </Text>
            <Text>
              Nasceu em:{" "}
              <Text className="font-bold">{detalheAluno?.nascimento}</Text>
            </Text>
            <Text>
              Gênero:{" "}
              <Text className="font-bold">{detalheAluno?.genero}</Text>
            </Text>
            <Text>
                Pertence a turma::{" "}
              <Text className="font-bold">{detalheAluno?.turma.descricao}</Text>
            </Text>


          </View>
        </View>
      </View>
    </>
  );
}
