import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BarraDeTitulo(props) {
  return (
    <View style={[styles.containerTitle, { backgroundColor: props.color }]}>
      <Text style={[styles.text, { color: "#fff" }]}>{props.texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
