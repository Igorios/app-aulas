import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Settings() {

    return(
        <View className="p-10">
            <Text className="mb-5">Configuração do arquivo config do APP</Text>
            <Link href={"/"}>Volte para a página HOME do APP</Link>
        </View>
    );


}