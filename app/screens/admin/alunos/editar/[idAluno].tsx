import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useAlunos } from "../../../../../data/hooks/alunos";
import Loading from "../../../../../ui/components/Loading";
import { formatarData } from "../../../../../ui/utils";

export default function EditarAluno() {
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const { idAluno } = useLocalSearchParams();
  const navigation = useNavigation();
  const { putAlunoById, alunos, getAlunoById } = useAlunos();

  const [aluno, setAluno] = useState({
    id: idAluno,
    nome: "",
    nascimento: date || "",
    genero: "",
    turma_id: 1,
  });

  const fetchDetalhesAlunos = async () => {
    try {
      const data = await getAlunoById(idAluno);
      setAluno({
        id: data.idAluno || idAluno,
        nome: data.nome || "",
        nascimento: data.nascimento || date || "",
        genero: data.genero || "",
        turma_id: 1,
      });
  

      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar dados da Api.", error);
    }
  };

  useEffect(() => {
    fetchDetalhesAlunos();
  }, [idAluno]);

  const handleSetValue = (value, name) => {
    setAluno((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    const formattedDate = currentDate.toISOString().split("T")[0];
  };

  const handleUpdateAluno = async () => {
      console.log(aluno)
    try {
    
      await putAlunoById(idAluno, aluno);

      alert("Aluno atualizado com sucesso");
     
    } catch (e) {
        console.log("Erro: "+e);
        alert("Erro ao atualizar o aluno");
    }
  }


  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Editando`,
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ScrollView className="bg-gray-200 flex-1 p-10">
            <View className="mb-4">
              <Text className="font-medium mb-2 text-sm text-gray-700">
                Nome
              </Text>
              <TextInput
                value={aluno.nome}
                onChangeText={(text) => handleSetValue(text, "nome")}
                className="h-14 border border-gray-300 rounded-md px-4 bg-gray-100"
                keyboardType="default"
              />
            </View>

            <Text className="font-medium mb-2 text-sm text-gray-700">
              Selecione o gênero
            </Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={aluno.genero}
                onValueChange={(itemValue) =>
                  setAluno((prevState) => ({
                    ...prevState,
                    genero: itemValue,
                  }))
                }
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
              {aluno.nascimento && (
                <Text>{formatarData(aluno.nascimento)}</Text>
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

            <TouchableOpacity className="items-center rounded-xl mt-5 bg-blue-500 py-1.5 border-none"
            onPress={handleUpdateAluno}
            >
              <Text className="text-white text-base">Editar</Text>
            </TouchableOpacity>
          </ScrollView>
        </>
      )}
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
