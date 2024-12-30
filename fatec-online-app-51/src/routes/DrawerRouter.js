import React from "react";
import { Image, View, Linking } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

import Avisos from "../pages/Avisos";
import Historico from "../pages/Historico";
import DisciplinaSemestre from "../pages/DisciplinaSemestre";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import Professores from "../pages/Professores";
import Carteira from "../pages/Carteira";

import CustonDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    // <Drawer.Navigator screenOptions={{drawerPosition: 'right'}}></Drawer.Navigator>
    <Drawer.Navigator

      drawerContent={(props) => <CustonDrawer {...props} />}

      screenOptions={{
        drawerPosition: 'right',
        drawerLabelStyle: { marginLeft: -10 },
        drawerActiveBackgroundColor: "#910000",
        drawerInactiveBackgroundColor: "#efefef",
        drawerActiveTintColor: "#f1f1f1",
        drawerInactiveTintColor: "#000",
        headerTitle: () => (
          <Image
            source={require("../assets/logoFundoTransp.png")}
            style={{ width: 50, height: 30, resizeMode: "contain", marginTop: 15, }}
          />
        ),
      }}

    >
      <Drawer.Screen
        name="Início"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Carteira de estudante"
        component={Carteira}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="id-card" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Meu horário"
        component={DisciplinaSemestre}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="notebook" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Histórico"
        component={Historico}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="file-document"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Professores"
        component={Professores}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="chalkboard-teacher" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Avisos "
        component={Avisos}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
        }}
      />

      {/* <Drawer.Screen
        name="Fatec Online"
        component={View} // Colocamos um View vazio, pois queremos apenas acionar o link
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="link" size={24} color={color} />
          ),
          drawerLabel: "Fatec Online",
          // Adicionando a função para abrir o link
          onPress: () => {
            Linking.openURL("https://www.fateconline.com.br/sistema/").catch((err) =>
              console.error("Failed to open URL: ", err)
            );
          },
        }}
      /> */}

    </Drawer.Navigator>
  );
}
