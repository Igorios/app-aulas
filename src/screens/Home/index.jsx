import { Button, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <>
      <Text>Pagina home do aplicativo</Text>

      <View className="mt-10">
        <Button
          title="Veja os alunos"
          onPress={() => navigation.navigate("Alunos")}
        />
        
      </View>
    </>
  );
}
