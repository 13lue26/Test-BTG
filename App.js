import { createContext, useContext, useEffect, useState } from "react";
import { View, ActivityIndicator, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import { onAuthStateChanged } from "firebase/auth";

import Login from "./screens/Login";
import Register from "./screens/Register";
import TabScreen from "./screens/TabScreen";
import { auth } from "./config/firebase";
// import FacialAuth from './screen/FacialRecogonition'; // masih belum maksimal

const Stack = createNativeStackNavigator();
const AuthenthicateUserContext = createContext();

const AuthenthicateUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenthicateUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenthicateUserContext.Provider>
  );
};

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={TabScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const { user, setUser } = useContext(AuthenthicateUserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authenticateUser) => {
      authenticateUser ? setUser(authenticateUser) : setUser(null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <ChatStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <PaperProvider>
//       <AuthenthicateUserProvider>
//         <RootNavigator />
//       </AuthenthicateUserProvider>
//     </PaperProvider>
//   );
// }

// test menggunakan tailwind css
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { Text, View } from 'react-native';

import Payment from "./ScreenBooking/Payment";
import TambahDataTamu from "./ComponentBooking/TambahDataTamu";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pemesanan" component={Payment} />
        <Stack.Screen name="Tambah Data Tamu" component={TambahDataTamu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
