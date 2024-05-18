import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function Layout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Painel de controle",
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return <FontAwesome name="tags" color={color} size={size} />;
              }

              return <FontAwesome name="tag" color={color} size={size} />;
            },
          }}
        />

        <Tabs.Screen
          name="criarAluno/index"
          options={{
            title: "Registrando aluno",
            tabBarIcon: ({ focused, color, size }) => {
              return <FontAwesome name="user-plus" color={color} size={size} />;
            },
          }}
        />

        <Tabs.Screen
          name="config/settings"
          options={{
            title: "Configuração",
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return <FontAwesome name="gear" color={color} size={size} />;
              }

              return <FontAwesome name="gear" color={color} size={size} />;
            },
          }}
        />
      </Tabs>
    </>
  );
}
