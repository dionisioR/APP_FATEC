
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { createDrawerNavigator } from "@react-navigation/drawer";


import Avisos from '../pages/Avisos'
import Historico from '../pages/Historico'
import DisciplinaSemestre from '../pages/DisciplinaSemestre'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Perfil from '../pages/Perfil'
import VerificationCode from '../pages/VerificationCode'
import Welcome from '../pages/Welcome'

import StackRoutes from "./StackRoutes";


const Drawer = createDrawerNavigator();


export default function Routes() {
  return (
    <Drawer.Navigator
    // screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
      <Drawer.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Drawer.Screen name="Código de Verificação" component={VerificationCode} options={{headerShown:false}} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Disciplinas do semestre" component={DisciplinaSemestre} />
      <Drawer.Screen name="Histórito" component={Historico} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Avisos" component={Avisos} />
      <Drawer.Screen name="HomeStack" component={StackRoutes} options={{title:'Home'}} />
    </Drawer.Navigator>
  );
}
