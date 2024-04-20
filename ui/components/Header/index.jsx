import { Text, View } from "react-native";

export default function Header() {
    return(
        <>
        <View className="h-20 pt-8 bg-principal flex flex-row justify-between items-center">
            <View className="flex">
                <Text className="pl-2 text-white">Aplicativo de Escola</Text>
            </View>
            <View className="flex">
                <Text className="pr-2 text-white">Bom dia</Text>
            </View>
        </View>
        </>
    )
}

