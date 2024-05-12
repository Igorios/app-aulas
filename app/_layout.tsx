import { Stack } from "expo-router";

export default function Layout() {
  return <>
    <Stack
        screenOptions={{
            headerStyle: {
                backgroundColor: "#4b4b4b"
            },
            headerTintColor: "#fff"
        }}
    >
        <Stack.Screen name="index" options={{title: "Home"}}/>
        <Stack.Screen name="screens/sobre/index" options={{title: "Sobre o App"}}/>
        <Stack.Screen name="screens/alunos/todosAlunos/index" options={{title: "Alunos"}}/>
        <Stack.Screen name="screens/(tabs)" options={{headerShown: false}} />
    </Stack>
    
    </>;
}
