import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigation = useNavigation()

  const [passwordVisible, setPasswordVisible] = useState(false)

  const showPassword = () => {
    setPasswordVisible(!passwordVisible)
  }


  // =========== THEN CATCH =======================
  // const handRegister = () => {
  //   if (email !== "" && password !== "") {
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((data) => {
  //         console.log(data, "<<<<<<<<<<<<<< DATA")
  //         console.log("Register Success")
  //         // navigation.navigate("Login")
  //       })
  //       .catch((err) => {
  //         console.log(err, "<<<<<<<<<<<<<<")
  //         Alert.alert("Register  Error", "Email Or Password or Username Invalid")
  //       })
  //   }
  // }


  // =========== ASYNC AWAIT ====================
  const handRegister = async() => {
    try {

      const data = await createUserWithEmailAndPassword(auth, email, password)
      console.log(data)

      if(data){
        Alert.alert("Register Success")
      }
      
    } catch (error) {
      console.log(error, "<<<<<<<<<<<<<<")
      Alert.alert("Register  Error", "Email Or Password or Username Invalid")
    }
  }

  // console.log(formInput, "<<<<<<<<<<<<<<<< REGISTER")

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>
          Create Account
        </Text>

        <Text style={styles.text_register}>
          Register to get started.
        </Text>

        <TextInput
          mode='outlined'
          label='Name'
          placeholder='Jhon Doe'
          placeholderTextColor="gray"
          value={name}
          left={<TextInput.Icon
            icon='account-outline'
          />}
          onChangeText={(input) => setName(input)}
        />

        <TextInput
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

        <Button
          style={styles.btn}
          mode="contained"
          onPress={handRegister}>
          Register
        </Button>

        <View className="flex-row pt-2 px-3">
          <Text style={styles.checkAccount}>Already have Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.text_login}>Login</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
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
  text_register: {
    fontWeight: 'bold',
    marginHorizontal: 2
  },
  btn: {
    marginVertical: 10,
    backgroundColor: "#4A90E2",
  },
  text_login: {
    fontWeight : "600",
    color: "blue",
    textDecorationLine: "underline",
    marginHorizontal : 5
  }
})