import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Login from '../pages/Login'
import Welcome from "../pages/Welcome"
import VerificationCode from "../pages/VerificationCode"
import ObjEmentaCritAv from '../pages/ObjEmentaCritAv'
import DrawerRouter from './DrawerRouter'

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} options={{title:'', headerShown:false}} />
            <Stack.Screen name="VerificationCode" component={VerificationCode} />
            <Stack.Screen name="AvisoAula" component={ObjEmentaCritAv} />
            <Stack.Screen name="Home" component={DrawerRouter} />
        </Stack.Navigator>
    )
}   