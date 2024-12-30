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
import CardAulasConcluidas from "../../components/CardAulasConcluidas";
import aulaSemestre from "../../db/aulasSemestresDoCurso";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Historico() {


  const [userData, setUserData] = useState(null);

  // Função para carregar os dados do AsyncStorage
  const loadUserData = async () => {
    try {
      const savedData = await AsyncStorage.getItem("@user_data");
      if (savedData) {
        setUserData(JSON.parse(savedData));
        console.log("Dados carregados do AsyncStorage - Histórico:", savedData);
      } else {
        navigation.goBack()
        console.log("Nenhum dado encontrado no AsyncStorage - Histórico.");
      }
    } catch (error) {
      navigation.goBack()
      console.error("Erro ao carregar dados - Histórico:", error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);




  const [selectedSemester, setSelectedSemester] = useState(0);

  const semestres = [
    "1º",
    "2º",
    "3º",
    "4º",
    "5º",
    "6º",
  ];

  const handleClick = (index) => {
    setSelectedSemester(index);
  };

  const renderCardAulas = () => {
    const semestreSelecionado = semestres[selectedSemester];

    switch (semestreSelecionado) {
      case "1º":
        return (
          <>
            <CardAulasConcluidas item={aulaSemestre[0]} />
            <CardAulasConcluidas item={aulaSemestre[1]} />
            <CardAulasConcluidas item={aulaSemestre[2]} />
            <CardAulasConcluidas item={aulaSemestre[4]} />
            <CardAulasConcluidas item={aulaSemestre[5]} />
          </>
        );
      case "2º":
        return (
          <>
            <CardAulasConcluidas item={aulaSemestre[4]} />
            <CardAulasConcluidas item={aulaSemestre[5]} />
            <CardAulasConcluidas item={aulaSemestre[6]} />
            <CardAulasConcluidas item={aulaSemestre[7]} />
            <CardAulasConcluidas item={aulaSemestre[8]} />
          </>
        );
      case "3º":
        return (
          <>
            <CardAulasConcluidas item={aulaSemestre[8]} />
            <CardAulasConcluidas item={aulaSemestre[6]} />
            <CardAulasConcluidas item={aulaSemestre[7]} />
            <CardAulasConcluidas item={aulaSemestre[8]} />
            <CardAulasConcluidas item={aulaSemestre[9]} />
            <CardAulasConcluidas item={aulaSemestre[1]} />
          </>
        );
      case "4º":
        return (
          <>
            <CardAulasConcluidas item={aulaSemestre[9]} />
            <CardAulasConcluidas item={aulaSemestre[1]} />
            <CardAulasConcluidas item={aulaSemestre[2]} />
            <CardAulasConcluidas item={aulaSemestre[3]} />
            <CardAulasConcluidas item={aulaSemestre[4]} />
            <CardAulasConcluidas item={aulaSemestre[5]} />
          </>
        );
      case "5º":
        return (
          <>
            <CardAulasConcluidas item={aulaSemestre[3]} />
            <CardAulasConcluidas item={aulaSemestre[2]} />
            <CardAulasConcluidas item={aulaSemestre[1]} />
            <CardAulasConcluidas item={aulaSemestre[6]} />
            <CardAulasConcluidas item={aulaSemestre[7]} />
            <CardAulasConcluidas item={aulaSemestre[8]} />
            <CardAulasConcluidas item={aulaSemestre[9]} />
          </>
        );
      case "6º":
        return (
          <>
            <CardAulasConcluidas item={aulaSemestre[5]} />
            <CardAulasConcluidas item={aulaSemestre[4]} />
            <CardAulasConcluidas item={aulaSemestre[3]} />
            <CardAulasConcluidas item={aulaSemestre[2]} />
            <CardAulasConcluidas item={aulaSemestre[1]} />
            <CardAulasConcluidas item={aulaSemestre[6]} />
          </>
        );
      default:
        return <CardAulasConcluidas item={aulaSemestre[0]} />;
    }
  };

  return (
    <View style={styles.container}>
      <BarraDeTitulo texto="Disciplinas por semestre" color="#910000" />

      <View style={styles.containerSemestres}>
        {semestres.map((semestre, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.semestre,
              selectedSemester === index && { backgroundColor: "#919191" },
            ]}
            onPress={() => handleClick(index)}
          >
            <Text
              style={[
                styles.textoSemestre,
                selectedSemester === index && { color: "#fff" },
              ]}
            >
              {semestre}
            </Text>
            {selectedSemester === index && (
              <MaterialCommunityIcons
                name="cursor-default-click"
                style={[styles.icon, { color: "#fff" }]}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={{ marginTop: 15, }}>
        {renderCardAulas()}
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
  containerSemestres: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginTop: 30,
  },
  semestre: {
    padding: 10,
    backgroundColor: "#910000",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  textoSemestre: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  icon: {
    fontSize: 15,
    position: "absolute",
    bottom: 10,
    right: 5,
  },
  containerTextoSemestre: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  textoSemestreSelecionado: {
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
