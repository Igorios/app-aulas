import { Link } from "expo-router";
import { Text, View } from "react-native";
import Home from "../ui/components/Home";
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <>
      <View>

        <Home />

        <View className="ml-10 mt-5">
          <Text className="text-2xl mb-2">Conheça os alunos</Text>
          <Text className="text-sm py-2">Tenha a lista de todos os alunos, além de todas as {'\n'} informações detalhadas deles.</Text>
          <Link className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-center text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-44 p-3" href="/screens/alunos/todosAlunos">
            <Text>Visualizar os Alunos <AntDesign name="arrowright" color="white" /></Text>
          </Link>
          <Link className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-center text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-44 p-3" href="/screens/(tabs)">
            <Text>Painel administrativo <AntDesign name="arrowright" color="white" /></Text>
          </Link>
        </View>

      </View>
    </>
  );
}
