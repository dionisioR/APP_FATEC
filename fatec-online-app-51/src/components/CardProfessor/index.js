import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
export default function CardProfessor({ professor }) {
  const fotoperfil = "../../assets/avatar_menino2.png";
  return (
    <View style={styles.container}>

      <Image
        source={require("../../assets/perfil.png")}
        style={styles.imagem}
        alt={professor.nome}
      />

      <View>
        <Text numberOfLines={3} style={styles.titulo}>
          {professor.nome}
        </Text>
        <Text>{professor.cargo}</Text>
        <Text>{professor.linkCurriculo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 12,

    borderWidth: 1,
    borderColor: "#919191",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",

    flexDirection: "row",
  },
  imagem: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    maxWidth: 295,
  },
});
