import { Text, View, ScrollView } from "react-native";
import { useAlunos } from "../../../../data/hooks/alunos";
import { useEffect, useState } from "react";
import Loading from "../../../../ui/components/Loading";
import { Link } from "expo-router";

export default function dashboard() {
  const { alunos, getAllAlunos } = useAlunos();
  const [loading, setLoading] = useState(true);
  const [cont, setCont] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await getAllAlunos();
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setCont(alunos.length);
  }, [alunos]);

  return (
    <>
      <View className="p-10 bg-gray-200 h-screen">
        <Text className="text-base font-medium mb-2">Registrado {cont} alunos na plataforma:</Text>

        {loading ? (
          <Loading />
        ) : (
          <>
          <View className="h-4/6">
            <ScrollView>
              <View className="items-center">
                {alunos.map((aluno) => (
                  <View
                    key={aluno.idAluno}
                    className="mb-5 bg-gray-300 rounded-lg w-full"
                  >
                    <Link href={``}>
                      
                      <View className="ml-2 p-2">
                        <Text>
                          Nome do aluno:{" "}
                          <Text className="font-bold">{aluno.nomeAluno}</Text>
                        </Text>
                        <Text>
                          Turma:{" "}
                          <Text className="font-bold">
                            {aluno.turma.descricao}
                          </Text>
                        </Text>
                      </View>
                    </Link>
                  </View>
                ))}
              </View>
            </ScrollView>

          </View>
          </>
        )}
      </View>
    </>
  );
}
