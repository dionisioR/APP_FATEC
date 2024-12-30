import React, { useEffect } from "react";
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
// import initializeDatabase  from 'database/initializeDatabase';
import initializeDatabase from "../../database/InitializeDatabase";
export default function Welcome({ navigation }) {

    const handleLogin = () => {
        initializeDatabase(); // Cria a base de dados
        navigation.navigate("Login"); // Redireciona para a tela de Login
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/student4.jpg')} style={styles.backgroundImage}>
                <StatusBar backgroundColor={'rgb(168,48,41)'} barStyle={'light-content'} />

                <View style={styles.containerLogo}>
                    <View style={styles.containerLogoInterno}>
                        <Animatable.Image animation={"flipInY"} source={require('../../assets/logo_fatec_br.png')} style={styles.image} />
                    </View>
                </View>

                <View style={styles.form}>
                    <Animatable.View delay={600} animation={"fadeInUp"} style={styles.containerForm}>
                        <Text style={styles.title}>Seja bem Vindo!!!</Text>
                        <Text style={styles.text}>Faça o Login para começar</Text>
                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    form: { flex: 1.1, backgroundColor: "rgba(168,48,41,0.7)" },
    containerForm: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: "center",
    },
    containerLogo: {
        flex: 2,
        backgroundColor: "rgba(168,48,41,0.8)",
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLogoInterno: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        borderRadius: Dimensions.get('window').width / 2,
    },
    image: { width: "100%", resizeMode: "contain" },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: { color: "rgb(102,102,102)" },
    button: {
        position: 'absolute',
        backgroundColor: "rgb(178,0,0)",
        borderRadius: 50,
        paddingVertical: 10,
        width: "60%",
        bottom: '15%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: "center"
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold"
    },
    backgroundImage: { flex: 1 },
});
