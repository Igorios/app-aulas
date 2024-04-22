import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useAlunos } from "../../../data/hooks/alunos";

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
    <View className="mt-20 items-center justify-center bg-white">

      {alunos.map((aluno) => (
        <View key={aluno.idAluno} className="mb-5">
          <Text>
            <Text> Nome: <Text className="font-bold">{aluno.nomeAluno}</Text></Text>
            <Text> Nascido(a) em: <Text className="font-bold">{aluno.nascimento}</Text></Text>
          </Text>
          <View className="border-b-2 border-gray-200" />
        </View>
      ))}

    </View>
    </>
  );
}