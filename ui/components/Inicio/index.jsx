import React, { useEffect } from "react";
import { Text } from "react-native";
import { useAlunos } from "../../../data/hooks/alunos";

export default function Inicio() {

  const { alunos, getAllAlunos } = useAlunos();

  useEffect(() => {
    const fetchData = async () => {
        await getAllAlunos();
    };re
    fetchData();
    
}, []);


  return (
    <>
      <Text className="text-red-600 text-3xl">Teste do app</Text>
      <Text className="text-red-600 mt-2">Instalando o applicativo com react native!!!</Text>
    </>
  );
}
