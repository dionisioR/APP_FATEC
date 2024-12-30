import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, Button, Alert } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import FabButton from "../../components/FabButton";
import BarraDeTitulo from "../../components/BarraDeTitulo";
import AsyncStorage from "@react-native-async-storage/async-storage";


const API_AVISOS = "http://192.168.21.184:5000/avisos";
const API_AVISOS_ALUNO = "http://192.168.21.184:5000/avisos_aluno";

export default function Home({ navigation, route }) {

  // dados do aluno
  const [userData, setUserData] = useState(null);
  // dados das APIs
  const [avisosGerais, setAvisosGerais] = useState([]);
  const [avisosAluno, setAvisosAluno] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  // ----------------------------------------------------------------
  // Função para carregar os dados do AsyncStorage
  const loadUserData = async () => {
    try {
      const savedData = await AsyncStorage.getItem("@user_data");
      if (savedData) {
        setUserData(JSON.parse(savedData));
        // console.log("Dados carregados do AsyncStorage:", savedData);
      } else {
        Alert.alert("Erro", "Nenhum dado encontrado. Retornando à tela inicial.");
        navigation.goBack();
        // console.log("Nenhum dado encontrado no AsyncStorage.");
      }
    } catch (error) {
      Alert.alert("Erro", "Erro ao carregar dados. Retornando à tela inicial.");
      navigation.goBack();

      // console.error("Erro ao carregar dados:", error);
    }
  };

  //----------------------------------------------------------------
  // função parapegar os avisos dos parâmetros
  const fetchAvisos = async () => {
    try {
      const today = new Date();
      const responseGerais = await fetch(API_AVISOS);
      const dataGerais = await responseGerais.json();
      const filteredGerais = dataGerais.filter(
        (aviso) => new Date(aviso.avi_datafim) >= today
      );
      setAvisosGerais(filteredGerais);

      if (userData) {
        const responseAluno = await fetch(API_AVISOS_ALUNO);
        const dataAluno = await responseAluno.json();
        const filteredAluno = dataAluno.filter(
          (aviso) =>
            new Date(aviso.avialu_datafim) >= today &&
            aviso.alu_id === userData.id
        );
        setAvisosAluno(filteredAluno);
      }
    } catch (error) {
      Alert.alert("Erro", "Erro ao carregar avisos.");
    } finally {
      setIsLoading(false);
    }
  };


  // AsyncStorage
  useEffect(() => {
    loadUserData();
  }, []);


  // API
  useEffect(() => {
    if (userData) {
      fetchAvisos();
    }
  }, [userData]);


  const retorno = () => {
    navigation.navigate("Welcome")
  }
  return (
    <View style={styles.container}>
      {userData ? (
        <>
          <ScrollView style={styles.containerScrow}>


            {/* Renderizar Avisos do Aluno */}
            <BarraDeTitulo texto="ATENÇÃO" color="#910000" />
            <View style={styles.containerScrollView}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              >
                {avisosAluno.map((aviso) => (
                  <View key={aviso.id} style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    margin: 10,
                    borderRadius: 10,
                    borderColor: "#919191",
                    maxWidth: "80%",
                  }}
                  >
                    <Image
                      source={require("../../assets/falta1.png")}
                      style={{ width: 90, height: 90 }}
                    />
                      <View style={{display:"flex", justifyContent:'center', marginStart:10}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Aviso:</Text>
                        <Text style={{ fontSize: 18, maxWidth:'95%' }}>  {aviso.avialu_descricao}</Text>
                      </View>

                  </View>
                ))}

                {avisosGerais.map((aviso) => (
                  <View key={aviso.id} style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    margin: 10,
                    borderRadius: 10,
                    borderColor: "#919191",
                    maxWidth: "80%",
                  }}
                  >
                    <Image
                      source={require("../../assets/falta1.png")}
                      style={{ width: 90, height: 90 }}
                    />
                      <View style={{display:"flex", justifyContent:'center', marginStart:10}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Aviso:</Text>
                        <Text style={{ fontSize: 18, maxWidth:'95%' }}>  {aviso.avialu_descricao}</Text>
                      </View>

                  </View>
                ))}
              </ScrollView>
            </View>


            {/* ------------------------------------------------------- */}
            <BarraDeTitulo texto="ATENÇÃO" color="#910000" />

            <View style={styles.containerScrollView}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    margin: 10,
                    borderRadius: 10,
                    borderColor: "#919191",
                  }}
                >
                  <Image
                    source={require("../../assets/falta1.png")}
                    style={{ width: 100, height: 100 }}
                  />
                  <View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Professor(a):</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>José Silva </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Disciplina:</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>Cálculo </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Dia:</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>26/06/2024 </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Horário:</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>19h00 </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    margin: 10,
                    borderRadius: 10,
                    borderColor: "#919191",
                  }}
                >
                  <Image
                    source={require("../../assets/falta2.png")}
                    style={{ width: 100, height: 100 }}
                  />
                  <View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Professor(a):</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>Kátia </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Disciplina:</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>Matemática </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Dia:</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>27/06/2024 </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Horário:</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>19h00 </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    margin: 10,
                    borderRadius: 10,
                    borderColor: "#919191",
                  }}
                >
                  <Image
                    source={require("../../assets/falta1.png")}
                    style={{ width: 100, height: 100 }}
                  />
                  <View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Professor(a):</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>Bruno </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Disciplina:</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>Banco de dados </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Dia:</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>30/06/2024 </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Horário:</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>19h00 </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    margin: 10,
                    borderRadius: 10,
                    borderColor: "#919191",
                  }}
                >
                  <Image
                    source={require("../../assets/falta2.png")}
                    style={{ width: 100, height: 100 }}
                  />
                  <View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Professor(a):</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>Tatiane </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Disciplina:</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>Algoritmo </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Dia:</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>27/06/2024 </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Horário:</Text>
                      <Text style={{ fontSize: 18, marginLeft: 15 }}>19h00 </Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>

            <BarraDeTitulo texto="Eventos" color="#034EA2" />

            <View style={styles.containerScrollView}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                <Image
                  source={require("../../assets/avisos/Avisos04.png")}
                  style={styles.boxEventosProgramacoes}
                />
                <Image
                  source={require("../../assets/avisos/Avisos05.png")}
                  style={styles.boxEventosProgramacoes}
                />
                <Image
                  source={require("../../assets/avisos/Avisos06.png")}
                  style={styles.boxEventosProgramacoes}
                />
                <Image
                  source={require("../../assets/avisos/Avisos07.png")}
                  style={styles.boxEventosProgramacoes}
                />
              </ScrollView>
            </View>

            <BarraDeTitulo texto="Outros" color="#0B9247" />

            <View style={styles.containerScrollView}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                <Image
                  source={require("../../assets/avisos/Avisos02.png")}
                  style={styles.boxAvisosImportantes}
                />
                <Image
                  source={require("../../assets/avisos/Avisos01.png")}
                  style={styles.boxAvisosImportantes}
                />
                <Image
                  source={require("../../assets/avisos/Avisos03.png")}
                  style={styles.boxAvisosImportantes}
                />
                <Image
                  source={require("../../assets/avisos/Avisos02.png")}
                  style={styles.boxAvisosImportantes}
                />
                <Image
                  source={require("../../assets/avisos/Avisos01.png")}
                  style={styles.boxAvisosImportantes}
                />
                <Image
                  source={require("../../assets/avisos/Avisos03.png")}
                  style={styles.boxAvisosImportantes}
                />
              </ScrollView>
            </View>
          </ScrollView>

          <FabButton style={{ bottom: 80, right: 60 }} />
        </>
      ) : (
        <View style={styles.containerErro}>
          <Ionicons name="cloud-download-outline" size={34} color="black" />
          <Text style={styles.text}>Carregando dados...</Text>
          <Button onPress={retorno} title="Cancelar" color="#f00000" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  containerLogo: {
    width: "100%",
  },
  logo: {
    width: 70,
    height: 50,
    marginStart: 5,
    marginTop: 5,
    resizeMode: "contain",
  },
  containerScrow: {
    marginHorizontal: 5,
    // borderWidth: 1
  },
  containerScrollView: {
    marginBottom: 20,
  },
  containerTitle: {
    borderRadius: 5,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 5,
    paddingLeft: 15,
  },
  boxAvisosImportantes: {
    height: 100,
    width: 200,
    borderWidth: 1,
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 30,
    borderRadius: 8,
  },
  boxEventosProgramacoes: {
    height: 100,
    width: 100,
    borderWidth: 1,
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 30,
    borderRadius: 8,
  },
  containerErro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  }
});
