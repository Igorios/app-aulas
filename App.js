import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Inicio from "./ui/components/Inicio";
import tailwind from "react-native-tailwindcss";
import Header from "./ui/components/Header";

export default function App() {
  return (
    <View>
      <Header />
      <Inicio />
    </View>
  );
}
