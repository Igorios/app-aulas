import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { useAlunos } from "../../../../../data/hooks/alunos";

export default function CreateAluno() {
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const { createAluno } = useAlunos();

  const [aluno, setAluno] = useState({
    nome: "",
    nascimento: date || "",
    genero: "",
    turma_id: 1,
  });

  const handleSetValue = (value, name) => {
    setAluno((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleGenderChange = (itemValue, itemIndex) => {
    handleSetValue(itemValue, "genero");
  };

  //pegando data
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    const formattedDate = currentDate.toISOString().split("T")[0];

    handleSetValue(formattedDate, "nascimento");
  };

  console.log(aluno);

  const handleClear = () => {
    setAluno({
      nome: "",
      nascimento: "",
      genero: "",
      turma_id: 1,
    });
    setDate(null); 
  };

  const handleCreateAluno = async () => {
    try {
      const response = await createAluno(aluno);
      if (response !== null) {
        alert("Aluno registrado com sucesso");
        handleClear();
      }
    } catch (e) {
      console.log(e);
      alert("Erro ao registrar aluno");
    }
  };

  return (
    <>
      <ScrollView className="bg-gray-200 flex-1 p-10">
        <View className="mb-4">
          <Text className="font-medium mb-2 text-sm text-gray-700">Nome</Text>
          <TextInput
            onChangeText={(text) => handleSetValue(text, "nome")}
            value={aluno.nome}
            className="h-14 border border-gray-300 rounded-md px-4 bg-gray-100"
            placeholder="Nome..."
            keyboardType="default"
          />
        </View>

        <Text className="font-medium mb-2 text-sm text-gray-700">
          Selecione o gênero
        </Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={aluno.genero}
            style={styles.picker}
            onValueChange={handleGenderChange}
          >
            <Picker.Item label="Selecione o gênero..." value="" />
            <Picker.Item label="Masculino" value="M" />
            <Picker.Item label="Feminino" value="F" />
          </Picker>
        </View>

        <View className="mb-4">
          <Text className="font-medium mb-2 text-sm text-gray-700">
            Data de Nascimento
          </Text>
          {date !== null && (
            <Text className="font-semibold text-base">
              {date.toLocaleDateString()}
            </Text>
          )}

          <TouchableOpacity
            style={styles.botaoData}
            onPress={() => setShow(true)}
          >
            <Text style={styles.textoBotaoData}>Selecione a data</Text>
          </TouchableOpacity>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date || new Date()}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
              onClose={() => setShow(false)}
            />
          )}
        </View>

        <TouchableOpacity
          onPress={handleCreateAluno}
          className="items-center rounded-xl mt-5 bg-blue-500 py-1.5 border-none"
        >
          <Text className="text-white text-base">Adicionar</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 6,
    backgroundColor: "#F3F4F6",
    marginBottom: 10,
  },
  picker: {
    padding: 10,
    paddingHorizontal: 10,
  },
  botaoData: {
    backgroundColor: "#959595",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textoBotaoData: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
