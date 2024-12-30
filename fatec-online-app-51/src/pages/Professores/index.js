import React from "react";
import { View, Text, StyleSheet, FlatList, Image} from "react-native";
import FabButton from "../../components/FabButton";
import BarraDeTitulo from "../../components/BarraDeTitulo";
import CardProfessor from "../../components/CardProfessor";

import equipeEscola from "../../db/listaProfessores";

export default function Professores() {
  return (
    <View style={styles.container}>
      <BarraDeTitulo texto="Professores" color="#910000" />

      <FlatList
      data={equipeEscola}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <CardProfessor professor={item} />}
      />

      <FabButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
  },
});
