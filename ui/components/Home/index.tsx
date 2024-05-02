import { Text, View, Image } from "react-native";

export default function Home() {
  return (
    <>
      <View className="p-10">
        <View>
          <Text className="text-center text-3xl">Gerenciamento de turmas e alunos</Text>
          <Text className="text-center pt-2 text-sm">
            Organize as suas turmas, adicione os alunos e tenha um controle
            total dos dados
          </Text>
        </View>
        <View className="justify-center items-center my-6">
            <Image className="w-48 h-52" source={require("../../../assets/imagem-parceiro.png")} />
        </View>
      </View> 
    </>
  );
}
