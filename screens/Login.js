import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { FadeInUp } from 'react-native-reanimated';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // console.log(form)

    const [passwordVisible, setPasswordVisible] = useState(false)

    // untuk melihat password jika di tekan
    const showPassword = () => {
        setPasswordVisible(!passwordVisible)
    }

    // untuk berpindah hal ke - REGISTER
    const moveToRegister = () => {
        navigation.navigate("Register")
    }

    // ======== THEN CATCH ==============
    // const handleLogin = () => {
    //     console.log("<<<<< masuk")
    //     if (email !== "" && password !== "") {
    //         signInWithEmailAndPassword(auth, email, password)
    //             .then((data) => {

    //                 console.log(data, "<<<<<<<<<<<")

    //                 const result = JSON.stringify(data.user.stsTokenManager.accessToken)
    //                 console.log(result, "<<<<<<<<<<<<<")

    //                 // AsyncStorage.setItem("access_token", data._tokenResponse.idToken)
               
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //                 Alert.alert("Login Error", "Email or Password Invalid")
    //             })
    //     }
    // }


    // ========== ASYNC AWAIT =================
    const handleLogin = async () => {
        try {

            const data = await signInWithEmailAndPassword(auth, email, password)
            const convertToken = JSON.stringify(data.user.stsTokenManager.accessToken)

            if(data){
                Alert.alert("Login Success", "Welcome Back Again")
            }

        } catch (error) {
            console.log(error)
            Alert.alert("Login Error", "Email or Password Invalid")

        }
    }

    // console.log(access_token, "<<<<<<<<< ACCESS_TOKEN")
    return (
        <View className="h-full w-full">
            <Image className="h-full w-full absolute"
                source={require("../assets/mobile2.jpeg")}
            />

            <View className="flex-row justify-around">
                <Animated.Image
                    entering={FadeInUp.delay(500).duration(200).springify()}
                    className='h-[250] w-[90]'
                    source={require('../assets/light.png')}
                />

                <Animated.Image
                    entering={FadeInUp.delay(600).duration(500).springify()}
                    className='h-[170] w-[65]'
                    source={require('../assets/light.png')}
                />
            </View>

            <Text className="text-white text-5xl font-medium px-3">
                Welcome Back!
            </Text>



            {/* Login Form */}
            <View className="px-3">
                <TextInput
                    outlineColor='gray'
                    activeOutlineColor='gray'
                    mode='outlined'
                    label="E-mail"
                    value={email}
                    onChangeText={(input) => setEmail(input)}
                    placeholder='Jhondoe@gmail.com'
                    placeholderTextColor='gray'
                    left={<TextInput.Icon
                        icon='email-outline'
                    />}
                />

                <TextInput
                    outlineColor='gray'
                    activeOutlineColor='gray'
                    mode='outlined'
                    label="Password"
                    secureTextEntry={!passwordVisible}
                    right={<TextInput.Icon
                        icon='eye'
                        onPress={showPassword}
                    />}
                    left={<TextInput.Icon
                        icon='lock-outline'
                    />}
                    value={password}
                    onChangeText={(input) => setPassword(input)}
                />

            </View>



            <Text className="px-3 py-3 text-blue-500">
                Forgot Password ?
            </Text>


            {/* Button Login */}
            <View className="px-3">
                <Button
                    className="bg-cyan-600"
                    mode="contained"
                    onPress={handleLogin}>
                    Login
                </Button>

            </View>


            {/* redirect to Register Form */}
            <View className="flex-row pt-5 px-3">
                <Text style={styles.checkAccount}>Don't have an account?</Text>
                <TouchableOpacity onPress={moveToRegister}>
                    <Text style={styles.text_register}>Register</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        // backgroundColor: ""
    },
    header: {
        marginVertical: 10,
        paddingBottom: 20
    },
    text_header: {
        fontSize: 30,
        color: "#4A90E2",
        fontWeight: "800"
    },
    text_forget_pass: {
        marginVertical: 10,
        fontWeight: "500",
        color: "#4A90E2",
    },
    checkAccount: {
        color: 'black',
        fontWeight: "300"
    },
    register: {
        flex: 0.2,
        marginVertical: 10,
        flexDirection: 'row'
    },
    text_register: {
        color: 'blue',
        textDecorationLine: "underline",
        marginHorizontal: 5
    },
    btn: {
        marginVertical: 10,
        backgroundColor: "#4A90E2",
    }
})