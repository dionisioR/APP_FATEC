import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BarraDeTitulo from "../../components/BarraDeTitulo";
export default function ObjEmentaCritAv() {
  return (
    <View style={styles.container}>
      <BarraDeTitulo texto="Objetivo" color="#910000" />
      <Text></Text>
      <BarraDeTitulo texto="Ementa" color="#910000" />
      <Text></Text>
      <BarraDeTitulo texto="Critério de Avaliação" color="#910000" />
      <Text></Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
