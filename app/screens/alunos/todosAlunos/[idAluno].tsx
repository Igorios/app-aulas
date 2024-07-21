import { useLocalSearchParams, useNavigation } from "expo-router";
import { Text, View } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { AlunoInterface } from "../../../../data/@types/AlunoInterface";
import { useAlunos } from "../../../../data/hooks/alunos";
import { formatarData } from "../../../../ui/utils";
import Loading from "../../../../ui/components/Loading";

export default function ExibirAluno() {
    
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const { idAluno } = useLocalSearchParams();
  const { getAlunoById } = useAlunos();
  const [detalheAluno, setDetalheAlunos] = useState<AlunoInterface>();

  const fetchDetalhesAlunos = async () => {
    try {
      const data = await getAlunoById(Number(idAluno));
      setDetalheAlunos(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar dados da Api.", error);
    }
  };

  useEffect(() => {
    fetchDetalhesAlunos();
  }, [idAluno]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Aluno ${detalheAluno?.nome}`,
    });
  }, [navigation, detalheAluno?.nome]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <View className="bg-gray-800 w-full h-40 flex items-center justify-center">
            <View>
              <Text className="text-zinc-200 text-2xl mb-6 text-center font-medium">
                {detalheAluno?.nome}
              </Text>
            </View>
          </View>
          <View className="bg-gray-200 w-full h-screen -mt-10 rounded-t-3xl">
            <View className="p-5">
              <View className="items-start">
                <Text className="font-semibold text-2xl mb-5">Descrição</Text>

                <Text>
                  Nome:{" "}
                  <Text className="font-bold">{detalheAluno?.nome}</Text>
                </Text>
                <Text>
                  Nasceu em:{" "}
                  <Text className="font-bold">
                    {formatarData(detalheAluno?.nascimento)}
                  </Text>
                </Text>
                <Text>
                  Gênero:{" "}
                  <Text className="font-bold">{detalheAluno?.genero}</Text>
                </Text>
                <Text>
                  Pertence a turma:{" "}
                  <Text className="font-bold">
                    {detalheAluno?.turma.descricao}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </>
      )}
    </>
  );
}
