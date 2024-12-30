import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('j@g.com');
    const [ra, setRa] = useState('1234');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            // const response = await fetch('http://192.168.21.184:5000/aluno');
            const response = await fetch('http://192.168.21.184:5000/aluno?alu_email=email&alu_ra=ra');
            const data = await response.json();

            if (data.alu_email === email && data.alu_ra === ra) {
                console.log(`Email: ${email}, RA: ${ra}`);
                navigation.navigate('VerificationCode', { email, ra });
            } else {
                setErrorMessage('E-mail ou RA inválidos.');
                setTimeout(() => {
                    setErrorMessage('');
                }, 5000);
            }
        } catch (error) {
            console.error('Erro ao verificar usuário:', error);
            setErrorMessage('Ocorreu um erro ao tentar acessar. Tente novamente mais tarde.');
            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'rgb(178,0,0)'} barStyle={'light-content'} />
            <Animatable.View animation={'fadeInLeft'} delay={500} style={styles.containerHeader}>
                <Animatable.Image animation={"flipInY"} source={require('../../assets/logo_fatec_br.png')} style={styles.image} />
            </Animatable.View>
            <Animatable.View style={styles.containerForm} animation={'fadeInUp'}>
                <Text style={styles.title}>E-mail:</Text>
                <TextInput
                    placeholder="Digite seu email"
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.title}>RA:</Text>
                <TextInput
                    placeholder="Digite o número de seu RA"
                    style={styles.input}
                    keyboardType="numeric"
                    value={ra}
                    onChangeText={setRa}
                />
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>
                </View>
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(178,0,0)",
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        alignItems: 'center',
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    containerButton: {
        alignItems: 'center',
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: "rgb(178,0,0)",
        width: "80%",
        borderRadius: 8,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: Dimensions.get('window').width / 2,
        resizeMode: "contain",
        height: Dimensions.get('window').width / 4,
    },
    errorMessage: {
        color: "red",
        textAlign: "center",
        fontSize: 16,
        marginTop: 10,
    },
});
