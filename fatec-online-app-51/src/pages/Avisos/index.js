import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import FabButton from "../../components/FabButton";
import BarraDeTitulo from "../../components/BarraDeTitulo";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Avisos() {



  const [userData, setUserData] = useState(null);

  // Função para carregar os dados do AsyncStorage
  const loadUserData = async () => {
    try {
      const savedData = await AsyncStorage.getItem("@user_data");
      if (savedData) {
        setUserData(JSON.parse(savedData));
        console.log("Dados carregados do AsyncStorage - Avisos:", savedData);
      } else {
        navigation.goBack()
        console.log("Nenhum dado encontrado no AsyncStorage - Avisos.");
      }
    } catch (error) {
      navigation.goBack()
      console.error("Erro ao carregar dados - Avisos:", error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);



  const [openModalUrgente, setOpenModalUrgente] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={styles.container}>
      <BarraDeTitulo texto="Avisos" color="#910000" />

      <TouchableOpacity onPress={() => setOpenModalUrgente(!openModalUrgente)}>
        <View style={[styles.containerCardAviso]}>
          <Image
            source={require("../../assets/avisoUrgente.png")}
            style={styles.imgModal}
          />
          <View>
            <Text style={[styles.titulo, { color: "#DB290D" }]}>
              Aviso Urgente
            </Text>
          </View>
          <MaterialCommunityIcons
            name="cursor-default-click"
            size={30}
            color="#910000"
          />
        </View>
      </TouchableOpacity>

      {/* ----------------------------------------- */}
      <TouchableOpacity onPress={() => setOpenModalUrgente(!openModalUrgente)}>
        <View style={[styles.containerCardAviso, { borderColor: '#126e0e' }]}>
          <Image
            source={require("../../assets/avisoImportante.png")}
            style={[styles.imgModal, { borderColor: '#126e0e' }]}
          />
          <View>
            <Text style={[styles.titulo, { color: "#126E0E" }]}>
              Aviso Importante
            </Text>
          </View>
          <MaterialCommunityIcons
            name="cursor-default-click"
            size={30}
            color="#126E0E"
          />
        </View>
      </TouchableOpacity>


      <Modal
        style={styles.modal}
        visible={openModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => { }}
      >
        <View style={styles.containerModal}>
          <BarraDeTitulo color="#3D8142" texto="Aviso" />
          <ScrollView>
            <View style={styles.imgModalConainer}>
              <Image
                source={require("../../assets/information_green.png")}
                style={styles.imgModal}
              />
            </View>
            <Text style={[styles.descricaoModal]}>Caro(a) aluno(a).</Text>
            <Text style={[styles.descricaoModal]}>
              Informamos que devido ao feriado, as atividades acadêmicas estarão
              suspensas no período de 15/07/2021 a 01/08/2024.
            </Text>
            <Text style={[styles.descricaoModal]}>
              Durante este período, não haverá aulas presenciais ou atividades
              administrativas na instituição.
            </Text>
            <Text style={[styles.descricaoModal]}>
              As atividades serão retomadas normalmente a partir de 02/08/2024.
            </Text>
            <Text style={[styles.descricaoModal]}>
              Certifique-se de estar atualizado com as informações fornecidas
              pelos seus professores e canais oficiais da instituição.
            </Text>
            <Text style={[styles.descricaoModal]}>
              Desejamos a todos um excelente período de descanso e
              aproveitamento.{" "}
            </Text>
            <Text style={[styles.descricaoModal]}>Atenciosamente!</Text>
          </ScrollView>
          <TouchableOpacity
            onPress={() => setOpenModal(!openModal)}
            style={styles.btnFecharModal}
          >
            <Text style={styles.closeModalText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        style={styles.modal}
        visible={openModalUrgente}
        animationType="slide"
        transparent={true}
        onRequestClose={() => { }}
      >
        <View style={styles.containerModal}>
          <BarraDeTitulo color="#910000" texto="Aviso" />
          <ScrollView>
            <View style={styles.imgModalConainer}>
              <Image
                source={require("../../assets/information_red.png")}
                style={styles.imgModal}
              />
            </View>
            <Text style={[styles.descricaoModal]}>Prezado(a) aluno.</Text>
            <Text style={styles.descricaoModal}>
              Informamos que há uma pendência urgente relacionada à sua
              matrícula.
            </Text>
            <Text style={styles.descricaoModal}>
              É essencial que você entre em contato com a secretaria acadêmica
              imediatamente para resolver esta questão.
            </Text>
            <Text style={styles.descricaoModal}>
              Por favor, dirija-se à secretaria acadêmica ou entre em contato
              pelo telefone da secretaria o mais rápido possível.
            </Text>
            <Text style={styles.descricaoModal}>
              Não deixe de tomar essa providência para evitar possíveis
              complicações em sua situação acadêmica.
            </Text>
          </ScrollView>
          <TouchableOpacity
            onPress={() => setOpenModalUrgente(!openModalUrgente)}
            style={styles.btnFecharModal}
          >
            <AntDesign name="closecircle" style={styles.iconFechar} />
            <Text style={styles.closeModalText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <FabButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  containerCardAviso: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#910000",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginEnd: 10,
  },
  resumo: {
    fontSize: 18,
    color: "#000",
    marginLeft: 20,
    marginTop: 5,
  },
  alert: {
    fontSize: 18,
    color: "#000",
    marginLeft: 20,
    marginTop: 5,
    fontWeight: "600",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerModal: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    borderWidth: 0.5,
  },
  closeModalText: {
    color: "#fff",
    fontSize: 18,
    marginRight: 20,
    fontWeight: "bold",
  },
  descricaoModal: {
    fontSize: 20,
    color: "#000",
    marginLeft: 20,
    marginTop: 5,
  },
  btnFecharModal: {
    backgroundColor: "#910000",
    padding: 10,
    marginTop: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconFechar: {
    color: "#fff",
    fontSize: 25,
    marginRight: 20,
    fontWeight: "bold",
  },
  imgModalConainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#fff",
  },
  imgModal: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#910000",
    marginHorizontal: 30,
  },
});
