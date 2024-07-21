import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
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
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    const fetchData = async () => {
      await fetchDetalhesAlunos();
      setLoading(false);
    };
    fetchData();

    setRefreshing(false);
    
  }, []);

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
        <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        >

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
              <Link 
                className="text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-center text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-44 p-1 mt-5"
                href={`/screens/admin/alunos/editar/${detalheAluno?.idAluno}`}>
                    Editar Aluno
                </Link>
            </View>
          </View>

        </ScrollView>
        </>
      )}
    </>
  );
}
