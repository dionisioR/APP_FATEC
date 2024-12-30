import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import FabButton from "../../components/FabButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BarraDeTitulo from "../../components/BarraDeTitulo";
import CardAulas from "../../components/CardAulas";
import aulaSemestre from "../../db/aulasSemestre";

export default function DisciplinaSemestre() {
  const [selectedDay, setSelectedDay] = useState(null);
  const diasSemanaNomes = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];


  const [userData, setUserData] = useState(null);

  // Função para carregar os dados do AsyncStorage
  const loadUserData = async () => {

    try {

      const savedData = await AsyncStorage.getItem("@user_data");
      console.log(savedData);
      if (savedData) {
        console.log('*************************');

        setUserData(JSON.parse(savedData));
        console.log("Dados carregados do AsyncStorage - Aulas Matriculadas no semestre:", savedData);
      } else {
        navigation.goBack()
        console.log("Nenhum dado encontrado no AsyncStorage - Aulas Matriculadas no semestre.");
      }
    } catch (error) {
      navigation.goBack()
      console.error("Erro ao carregar dados - Aulas Matriculadas no semestre:", error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);



  useEffect(() => {
    const hoje = new Date(
      new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    );
    const diaDaSemana = hoje.getDay();

    switch (diaDaSemana) {
      case 0:
        setSelectedDay(1);
        break;
      case 1:
        setSelectedDay(1);
        break;
      case 2:
        setSelectedDay(2);
        break;
      case 3:
        setSelectedDay(3);
        break;
      case 4:
        setSelectedDay(4);
        break;
      case 5:
        setSelectedDay(5);
        break;
      case 6:
        setSelectedDay(5);
        break;
      default:
        setSelectedDay(1);
        break;
    }
  }, []);

  const diasSemana = [
    { diaAbreviado: "S", icon: "cursor-default-click" },
    { diaAbreviado: "T", icon: "cursor-default-click" },
    { diaAbreviado: "Q", icon: "cursor-default-click" },
    { diaAbreviado: "Q", icon: "cursor-default-click" },
    { diaAbreviado: "S", icon: "cursor-default-click" },
  ];

  const handleClick = (index) => {
    setSelectedDay(index);
  };

  function renderCardAulas() {
    console.log(diasSemanaNomes[selectedDay]);
    switch (diasSemanaNomes[selectedDay]) {
      case "Segunda":
        return (
          <>
            {/* <CardAulas id="1" nomeProfessor="Prof. Carlos Souza" nomeDisciplina = "Matemática Discreta" /> */}
            <CardAulas item={aulaSemestre[0]} />
            <CardAulas item={aulaSemestre[1]} />
            <CardAulas item={aulaSemestre[2]} />
          </>
        );
      case "Terça":
        return (
          <>
            <CardAulas item={aulaSemestre[4]} />
            <CardAulas item={aulaSemestre[5]} />

          </>
        );
      case "Quarta":
        return (
          <>
            <CardAulas item={aulaSemestre[8]} />
            <CardAulas item={aulaSemestre[6]} />
            <CardAulas item={aulaSemestre[7]} />
          </>
        );
      case "Quinta":
        return (
          <>
            <CardAulas item={aulaSemestre[9]} />
            <CardAulas item={aulaSemestre[1]} />
          </>
        );
      case "Sexta":
        return (
          <>
            <CardAulas item={aulaSemestre[3]} />
            <CardAulas item={aulaSemestre[2]} />
          </>
        );
      default:
        return <CardAulas item={aulaSemestre[5]} />
    }
  }
  return (
    <View style={styles.container}>
      <BarraDeTitulo texto="Aulas matriculadas no semestre" color="#910000" />

      <View style={styles.containerDiasSemana}>
        {diasSemana.map((dia, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dia,
              selectedDay === index && { backgroundColor: "#919191" },
            ]}
            onPress={() => handleClick(index)}
          >
            <Text
              style={[
                styles.textoDia,
                selectedDay === index && { color: "#fff" },
              ]}
            >
              {dia.diaAbreviado}
            </Text>
            {selectedDay === index && (
              <MaterialCommunityIcons
                name={dia.icon}
                style={[styles.icon, { color: "#fff" }]}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView>
        {/* <View style={styles.containerTextoDiaSemana}>
          <Text style={styles.textoDiaSemana}>
            {diasSemanaNomes[selectedDay]}
          </Text>
        </View> */}

        {/* -------------------------------------- */}

        {renderCardAulas()}

        {/* -------------------------------------- */}
      </ScrollView>

      <FabButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  containerDiasSemana: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginTop: 30,
    marginBottom: 20,
  },
  dia: {
    padding: 10,
    backgroundColor: "#910000",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  textoDia: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
  icon: {
    fontSize: 15,
    position: "absolute",
    bottom: 10,
    right: 5,
  },
  containerTextoDiaSemana: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  textoDiaSemana: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#910000",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
});
