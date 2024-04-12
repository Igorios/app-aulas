import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './ui/components/Inicio';
import tailwind from 'react-native-tailwindcss';

export default function App() {
  return (
    <View className="flex-1  items-center justify-center bg-white">
      <Inicio/>
      <StatusBar style="auto" />
    </View>
  );
}
