import { NavigationContainer } from "@react-navigation/native"; 
import { Link } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

import Home from "./screens/home";
import Alunos from "./screens/alunos";
import Sobre from "./screens/sobre";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Sobre" component={Sobre} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <View className="p-10">
        <Link className="mb-5" href="/screens/sobre">
          Ir para a página SOBRE 
        </Link>
        <Link className="" href="/screens/dashboard">
          Ir para a página Painel de Controle 
        </Link>
      </View>
    </>
  );
}
