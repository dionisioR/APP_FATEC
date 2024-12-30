import React, { useRef, useState } from "react";
import { View, TextInput, Text, StyleSheet, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import initializeDatabase from '../../database/InitializeDatabase'; // cria a base de dados
// import insertDataIntoDatabase from '../../database/InsertDatabase'; // Importa a função para inserir dados na base

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function VerificationCode({ navigation, route }) {
    const [email, setEmail] = useState(route.params.email);
    const [ra, setRa] = useState(route.params.ra);

    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();
    const et5 = useRef();

    const [f1, setF1] = useState('1');
    const [f2, setF2] = useState('2');
    const [f3, setF3] = useState('3');
    const [f4, setF4] = useState('4');
    const [f5, setF5] = useState('5');

    const [errorMessage, setErrorMessage] = useState('');

    const handleVerification = async () => {
        const code = `${f1}${f2}${f3}${f4}${f5}`;

        try {
            const response = await fetch(`http://192.168.21.184:5000/aluno?alu_codigodeverificacao=${code}`);
            const result = await response.json();

            if (result.alu_ra === ra && result.alu_email === email && result.alu_codigodeverificacao === code) {
                const id = result.alu_id
                // Inicializa a base de dados local com os dados das APIs
                try {
                    await initializeDatabase();

                    await AsyncStorage.setItem(
                        "@user_data",
                        JSON.stringify({
                            id: result.alu_id,
                            ra: result.alu_ra,
                            email: result.alu_email,
                        }))
                        // Alert.alert("Sucesso", "Código verificado!");
                    console.log("Base de dados criada com sucesso!");

                    console.log(`alu_id: ${id} - alu_ra: ${ra} - alu_email: ${email}`)
                    // navigation.navigate("Home", { alu_id: id, alu_ra: ra, alu_email:email } );
                    navigation.navigate("Home", { id });

                } catch (dbError) {
                    console.error("Erro ao inicializar a base de dados:", dbError);
                    setErrorMessage('Erro ao carregar os dados. Tente novamente.');
                }
            } else {
                setErrorMessage('Código inválido. Tente novamente.');
                setTimeout(() => setErrorMessage(''), 5000);
            }
        } catch (error) {
            console.error("Erro ao conectar à API:", error);
            setErrorMessage('Erro de conexão. Tente novamente.');
            setTimeout(() => setErrorMessage(''), 5000);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'rgb(178,0,0)'} barStyle={'light-content'} />
            <View style={styles.titleView}>
                <Animatable.Image animation={"flipInY"} source={require('../../assets/logo_fatec_br.png')} style={styles.image} />
                <Text style={styles.title}>Código de verificação</Text>
            </View>
            <View style={styles.optView}>
                <View style={styles.containerInput}>
                    <TextInput
                        ref={et1}
                        style={[styles.input, { borderColor: f1.length >= 1 ? "#0B9247" : "#FF161F" }]}
                        keyboardType="number-pad"
                        secureTextEntry={true}
                        value={f1}
                        maxLength={1}
                        onChangeText={txt => { setF1(txt); if (txt.length >= 1) { et2.current.focus(); } }}
                    />
                    <TextInput
                        ref={et2}
                        style={[styles.input, { borderColor: f2.length >= 1 ? "#0B9247" : "#FF161F" }]}
                        keyboardType="number-pad"
                        secureTextEntry={true}
                        value={f2}
                        maxLength={1}
                        onChangeText={txt => { setF2(txt); if (txt.length >= 1) { et3.current.focus(); } else { et1.current.focus(); } }}
                    />
                    <TextInput
                        ref={et3}
                        style={[styles.input, { borderColor: f3.length >= 1 ? "#0B9247" : "#FF161F" }]}
                        keyboardType="number-pad"
                        secureTextEntry={true}
                        value={f3}
                        maxLength={1}
                        onChangeText={txt => { setF3(txt); if (txt.length >= 1) { et4.current.focus(); } else { et2.current.focus(); } }}
                    />
                    <TextInput
                        ref={et4}
                        style={[styles.input, { borderColor: f4.length >= 1 ? "#0B9247" : "#FF161F" }]}
                        keyboardType="number-pad"
                        secureTextEntry={true}
                        value={f4}
                        maxLength={1}
                        onChangeText={txt => { setF4(txt); if (txt.length >= 1) { et5.current.focus(); } else { et3.current.focus(); } }}
                    />
                    <TextInput
                        ref={et5}
                        style={[styles.input, { borderColor: f5.length >= 1 ? "#0B9247" : "#FF161F" }]}
                        keyboardType="number-pad"
                        secureTextEntry={true}
                        value={f5}
                        maxLength={1}
                        onChangeText={txt => { setF5(txt); }}
                    />
                </View>
                <TouchableOpacity
                    disabled={!(f1 && f2 && f3 && f4 && f5)}
                    style={[styles.btn, { backgroundColor: f1 && f2 && f3 && f4 && f5 ? "rgb(178,0,0)" : "#808080" }]}
                    onPress={handleVerification}
                >
                    <Text style={styles.btnText}>Acessar</Text>
                </TouchableOpacity>
                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "rgb(178,0,0)",
        flex: 1,
    },
    titleView: {
        flex: 0.5,
        marginTop: 45,
        alignItems: 'center'
    },
    optView: {
        width: "100%",
        flex: 1.2,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        marginBottom: 22,
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    containerInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5,
    },
    input: {
        fontSize: 24,
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 10,
        textAlign: 'center',
        fontWeight: '700'
    },
    btn: {
        width: "90%",
        height: 55,
        borderRadius: 25,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: "#fff",
        fontSize: 22,
        fontWeight: 'bold'
    },
    image: {
        width: Dimensions.get('window').width / 2,
        resizeMode: "contain",
        height: Dimensions.get('window').width / 4,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
});
