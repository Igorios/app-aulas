import { Link } from "expo-router";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Settings() {

    return(
        <View className="p-10 bg-gray-200 h-screen">
            <Text className="mb-5 text-lg">Configuração do APP</Text>
            <Link className="text-lg" href={"/"}>
                Voltar para a página inicial {" "}
                 <FontAwesome color={"rgb(31 41 55)"} name="home" size={25}   />
            </Link>
        </View>
    );


}