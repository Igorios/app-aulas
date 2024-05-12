import { Text, View, ScrollView } from "react-native";
import { useAlunos } from "../../../../data/hooks/alunos";
import { useEffect } from "react";

export default function TodosAlunos() {
  const { alunos, getAllAlunos } = useAlunos();

  useEffect(() => {
    const fetchData = async () => {
      await getAllAlunos();
    };
    fetchData();
  }, []);

  return (
    <>
      <View className="bg-gray-800 w-full h-40 flex items-center justify-center">
        <View>
          <Text className="text-zinc-200 text-2xl mb-6 text-center font-medium">
            Lista de alunos
          </Text>
        </View>
      </View>
      <ScrollView className="bg-gray-200 w-full h-32 -mt-10 rounded-t-3xl">
        <View className="p-5">
          <View className="items-center">
            {alunos.map((aluno) => (
              <View
                key={aluno.idAluno}
                className="mb-5 bg-gray-300 rounded-lg w-full"
              >
                <View className="ml-2 p-5">
                  <Text>
                    Nome do aluno:{" "}
                    <Text className="font-bold">{aluno.nomeAluno}</Text>
                  </Text>
                  <Text>
                    Gênero:{" "}
                    <Text className="font-bold">{aluno.genero}</Text>
                  </Text>
                  <Text>
                    Turma:{" "}
                    <Text className="font-bold">{aluno.turma.descricao}</Text>
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}