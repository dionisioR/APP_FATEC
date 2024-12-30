import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import BarraDeTitulo from "../BarraDeTitulo";

export default function CardAulas({ item }) {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const navigation = useNavigation();

  const [nomeDisciplina, setNomeDisciplina] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [ementa, setEmenta] = useState("");
  const [criteriosAvaliacao, setCriteriosAvaliacao] = useState("");
  const [horario, setHorario] = useState("");
  const [aulasDadas, setAulasDadas] = useState("");
  const [nomeProfessor, setNomeProfessor] = useState("");

  useEffect(() => {
    setNomeDisciplina(item.nomeDisciplina);
    setObjetivo(item.objetivo);
    setEmenta(item.ementa);
    setCriteriosAvaliacao(item.criteriosAvaliacao);
    setHorario(item.horario);
    setAulasDadas(item.aulasDadas);
    setNomeProfessor(item.nomeProfessor);
  }, [item]);

  console.log(item.nomeDisciplina);
  console.log(nomeDisciplina);
  return (
    <View style={styles.container}>
      <View style={styles.containerProf}>

        <View style={styles.containerTituloDisciplinaHor}>
          <Text style={styles.titulo}>Disciplina: {nomeDisciplina}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.txtTitulo}>Professor: {nomeProfessor} </Text>

            <View style={{ textAlign: 'right', width: 120, flexDirection: 'row', display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
              <FontAwesome name="clock-o" size={20} color="#000" />
              <Text style={styles.txtHorario}>

                {horario}</Text>
            </View>

          </View>


          <View>
            <Text style={{ color: 'darkred' }}>Faltas: 2 de 10</Text>
          </View>

          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
              <Text style={{ fontWeight: 'bold', backgroundColor: '#919191', padding: 8, margin: 5, color: '#fff', borderRadius: 10, textAlign: 'center' }}>   <FontAwesome name="object-group" size={14} />  Objetivo / Ementa</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setOpenModal2(!openModal2)}>
              <Text style={{ fontWeight: 'bold', backgroundColor: '#919191', padding: 8, margin: 5, color: '#fff', borderRadius: 10, textAlign: 'center' }}>  <Entypo name="open-book" size={18} />  Últimas Aulas</Text>
            </TouchableOpacity>
          </View>


        </View>

      </View>


      {/* Modal para visualizar os dados - Objetivo - Ementa - Critérios de avaliação */}
      <Modal
        style={styles.modal}
        visible={openModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => { }}
      >
        <View style={styles.contentModal}>
          <View style={styles.headerModel}></View>
          <ScrollView>
            <View style={[styles.bodyModel, { marginTop: 15 }]}>
              <BarraDeTitulo texto={nomeDisciplina} color="#919191" />

              <Text style={styles.tituloModal}>Objetivo</Text>
              <Text style={styles.textoModal}>{objetivo}</Text>
              <Text style={styles.tituloModal}>Ementa</Text>
              <Text style={styles.textoModal}>{ementa}</Text>
              <Text style={styles.tituloModal}>Critérios de avaliação</Text>
              <Text style={styles.textoModal}>{criteriosAvaliacao}</Text>
            </View>
          </ScrollView>

          <View style={styles.footerModel}>
            <TouchableOpacity
              style={styles.closeModal}
              onPress={() => {
                setOpenModal(false);
              }}
            >
              <Text style={styles.closeModalText}>Fechar</Text>
              <AntDesign name="closecircle" style={styles.closeModalIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para visualizar os dados - últimas aulas - faltas */}
      <Modal
        style={styles.modal}
        visible={openModal2}
        animationType="slide"
        transparent={true}
        onRequestClose={() => { }}
      >
        <View style={styles.contentModal}>
          <View style={styles.headerModel}></View>
          <ScrollView>
            <View style={[styles.bodyModel, { marginTop: 15 }]}>
              <BarraDeTitulo texto={nomeDisciplina} color="#919191" />

              <Text style={styles.tituloModal}>Últimas aulas</Text>

              <View style={styles.containerAulas}>
                <Text style={styles.dataAula}>21/06</Text>
                <Text style={styles.conteudoAula}>
                  Introdução:Matemática Discreta
                </Text>
              </View>
              <View style={styles.containerAulas}>
                <Text style={styles.dataAula}>14/06</Text>
                <Text style={styles.conteudoAula}>
                  Investigação das propriedades dos números inteiros e seus
                  divisores.
                </Text>
              </View>
              <View style={styles.containerAulas}>
                <Text style={styles.dataAula}>07/06</Text>
                <Text style={styles.conteudoAula}>
                  Análise de estruturas que consistem em vértices
                </Text>
              </View>
              <View style={styles.containerAulas}>
                <Text style={styles.dataAula}>31/05</Text>
                <Text style={styles.conteudoAula}>
                  Investigação das regras formais do raciocínio.
                </Text>
              </View>
              <View style={styles.containerAulas}>
                <Text style={styles.dataAula}>24/05</Text>
                <Text style={styles.conteudoAula}>
                  Estudo das propriedades dos conjuntos.
                </Text>
              </View>

              <Text style={[styles.tituloModal, { marginTop: 30 }]}>
                Faltas
              </Text>
              <View style={styles.containerFaltas}>
                <Text style={styles.txtFalta}>28/06</Text>
                <Text style={styles.txtFalta}>21/06</Text>
                <Text style={styles.txtFalta}>14/06</Text>
              </View>
            </View>
          </ScrollView>

          <View style={styles.footerModel}>
            <TouchableOpacity
              style={styles.closeModal}
              onPress={() => {
                setOpenModal2(false);
              }}
            >
              <Text style={styles.closeModalText}>Fechar</Text>
              <AntDesign name="closecircle" style={styles.closeModalIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 12,

    borderWidth: 1,
    borderColor: "#919191",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 30,

    // flexDirection: "row",
  },
  imagem: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    // maxWidth: 295,
  },

  containerProf: {
    flexDirection: "row",
  },

  containerTituloDisciplinaHor: {
    width: Dimensions.get("window").width * 0.95,
  },
  containerText: {
    // flexDirection: 'row',
    justifyContent: "space-around",
    marginTop: 20,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    paddingTop: 25,
  },
  containerTxt: {},
  containerBloco: {
    flexDirection: "row",
    // width: Dimensions.get('window').width * 0.8,
    marginBottom: 15,
    // backgroundColor: "#0B9247",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
  },
  txtTitulo: {
    fontSize: 18,
  },
  txtHorario: {
    fontSize: 13,
    color: "#000",
    marginLeft: 10,
    marginTop: 2,
  },
  icon: {
    fontSize: 30,
    color: "#fff",
    marginVertical: 10,
    marginLeft: 20,
    backgroundColor: "#0B9247",
    padding: 20,
    borderRadius: 100,
  },
  txt: {
    color: "#000",
    fontSize: 15,
    marginLeft: 15,
  },
  modal: {
    backgroundColor: "#000",
  },
  contentModal: {
    flex: 1,
    backgroundColor: "#fff",
    opacity: 0.96,
    margin: 15,
    borderWidth: 2,
    borderColor: "#919191",
    borderRadius: 8,
  },
  headerModel: {},
  bodyModel: {
    flex: 1,
  },
  footerModel: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 10,
    // alignItems: "center",
    // padding: 10,
  },
  closeModal: {
    flexDirection: "row",
    fontSize: 30,
    color: "#fff",
    marginVertical: 10,
    marginLeft: 20,
    backgroundColor: "#910000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    justifyContent: "flex-end",
  },
  closeModalIcon: {
    color: "#fff",
    fontSize: 25,
  },
  closeModalText: {
    color: "#fff",
    fontSize: 18,
    marginRight: 20,
    fontWeight: "bold",
  },
  tituloModal: {
    fontSize: 20,
    marginTop: 10,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  textoModal: {
    fontSize: 16,
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  containerAulas: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: 20,
    marginTop: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  dataAula: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  conteudoAula: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
    maxWidth: 300,
  },
  containerFaltas: {
    flexDirection: "row",
    marginTop: 15,
    paddingBottom: 10,
  },
  txtFalta: {
    display: 'flex',
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginHorizontal: 20,
    backgroundColor: "#373434",
    color: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
