import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { AntDesign, Ionicons, FontAwesome  } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
export default function CustonDrawer(props) {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#910000" }}
      >
        <View style={styles.perfil}>
          <Image source={require("../assets/perfil.png")} style={styles.img} />
          <Text style={styles.title}>Rafaela</Text>

          <View style={{ flexDirection: "row" }}>
         
            <FontAwesome name="id-card" size={18} color="white" />
            <Text style={styles.subtitle}>R.A.: 00001-0</Text>
          </View>
        </View>
        <View style={styles.containerDrawer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={styles.footer}>
        {/* <TouchableOpacity onPress={()=>{}} style={styles.btn}>
          <Ionicons name="share-social-outline" size={22} color={"#910000"} />
          <Text style={styles.btnText}>Compartilhar</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={()=>{navigation.navigate('Welcome')}} style={styles.btn}>
          <Ionicons name="exit" size={22} color={"#000"} />
          <Text style={styles.btnText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  perfil: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
    marginTop:20
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#fff",
    marginBottom: 20,
    marginLeft: 10,
  },
  containerDrawer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  btn:{
    paddingVertical:10,
    flexDirection: 'row'
  },
  btnText:{
    fontSize:18,
    paddingLeft:8,
    color:"#000"
  }
});