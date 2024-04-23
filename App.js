import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/screens/Home";
import Alunos from "./src/screens/Alunos";
import Sobre from "./src/screens/Sobre";

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Tabs} 
          options={{
            title: "Aplicativo de Escola",
            headerTitleStyle: {
              fontSize: 16
            },
            headerStyle: {
              backgroundColor: "#4b4b4b"
            },
            headerTintColor: "#fff"
          }}
        />
        <Stack.Screen name="Alunos" component={Alunos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
