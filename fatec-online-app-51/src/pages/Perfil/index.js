import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import FabButton from "../../components/FabButton";
import BarraDeTitulo from "../../components/BarraDeTitulo";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Perfil() {

  const [userData, setUserData] = useState(null);

  // Função para carregar os dados do AsyncStorage
  const loadUserData = async () => {
    try {
      const savedData = await AsyncStorage.getItem("@user_data");
      if (savedData) {
        setUserData(JSON.parse(savedData));
        console.log("Dados carregados do AsyncStorage - Perfil:", savedData);
      } else {
        navigation.goBack()
        console.log("Nenhum dado encontrado no AsyncStorage - Perfil.");
      }
    } catch (error) {
      navigation.goBack()
      console.error("Erro ao carregar dados - Perfil:", error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);



  return (
    <View style={styles.container}>
      <BarraDeTitulo texto="Perfil / Dados acadêmicos" color="#910000" />
      <ScrollView>
        <View style={styles.containerPerfil}>
          <View style={styles.containerImagePerfil}>
            <Image
              source={require("../../assets/perfil.png")}
              style={styles.imagePerfil}
            />
          </View>

          <View style={styles.containerInfoPerfil}>
            <View style={styles.tituloCurso}>
              <Text style={styles.titulo}>
                Curso Superior de Tecnologia em Análise e Desenvolvimento de
                Sistemas
              </Text>
            </View>

            <View style={styles.containerInfo}>
              <Text style={styles.infoTitulo}>Nome:</Text>
              <Text style={styles.info}>Rafaela da Silva Santos</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={styles.infoTitulo}>Status da matrícula:</Text>
              <Text style={styles.info}>Matriculado</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={styles.infoTitulo}>Data do vestibular:</Text>
              <Text style={styles.info}>23/06/2021</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={styles.infoTitulo}>Classificação:</Text>
              <Text style={styles.info}>10º</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={styles.infoTitulo}>Pontos:</Text>
              <Text style={styles.info}>50.98</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={styles.infoTitulo}>Sigla:</Text>
              <Text style={styles.info}>ADS</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={styles.infoTitulo}>Turno</Text>
              <Text style={styles.info}>Tarde / Noite</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={styles.infoTitulo}>Semestres percorridos</Text>
              <Text style={styles.info}>6</Text>
            </View>

          </View>
        </View>
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
  containerPerfil: {},
  containerImagePerfil: {
    marginTop: 30,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imagePerfil: {
    marginTop: 30,
    width: 150,
    height: 150,
    borderRadius: 50,
    borderWidth: 2,
    marginHorizontal: 20,
  },
  containerInfoPerfil: {
    marginTop: 20,
    marginHorizontal: 30,
    width: Dimensions.get("window").width * 0.83,
  },
  tituloCurso: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#910000",
    textAlign: "center",
    borderBottomColor: '#919191',
    borderBottomWidth: 1,
    paddingBottom:10
  },
  containerInfo: {
    width:'80%',
    flexDirection: "row",
    justifyContent:'flex-start',
    marginTop: 5,
    marginHorizontal: 10,
  },
  infoTitulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    fontSize: 18,
    marginLeft: 15,
    flexWrap: 'wrap',
  },
});
