import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Alunos from "./src/screens/Alunos";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
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
