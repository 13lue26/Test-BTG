import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Dialog, Portal, Button } from 'react-native-paper';
import PopUpSignOut from '../components/PopUpSignOut';

const Setting = () => {

  const [visible, setVisble] = useState(false)

  const hideDialog = () => setVisble(false)
  const showDialog = () => setVisble(true)

  // =========== THEN CATCH =================
  // const handleSignOut = () => {
  //   signOut(auth)
  //     .then((data) => {
  //       console.log(data, "Logout Success")
  //     })
  //     .catch((err) => {
  //       console.log(err, "<<<<<<< ERRORR")
  //     })
  // }

  // ============ ASYNC AWAIT ===================
  const handleSignOut = async () => {
    try {
      const data = await signOut(auth)
      console.log(data, "Logout Success")

    } catch (error) {
      console.log(error, "<<<<<<< ERRORR")
    }
  }

  return (
    <View className="grid grid-rows-4 grid-flow-col gap-4 justify-center mt-0.5 py-1 px-2">

      {/* PROFILE */}
      <View className="h-10 bg-blue-500 rounded-md border-2 border-blue-200">
        <TouchableOpacity
          className="flex flex-row items-center justify-between mx-2"
          activeOpacity={0.7}>
          <Text className="mx-2 text-xl font-bold text-white">Profile</Text>
          <Icon name='account-outline' size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* ABOUT */}
      <View className="h-10 bg-blue-500 rounded-md border-2 border-blue-200">
        <TouchableOpacity
          className="flex flex-row items-center justify-between mx-2"
          activeOpacity={0.7}>
          <Text className="mx-2 text-xl font-bold text-white">About</Text>
          <Icon name='information-outline' size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* OTHER */}
      <View className="h-10 bg-blue-500 rounded-md border-2 border-blue-200">
        <TouchableOpacity
          className="flex flex-row items-center justify-between mx-2"
          activeOpacity={0.7}>
          <Text className="mx-2 text-xl font-bold text-white">Others</Text>
          <Icon name='view-grid-outline' size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* SIGN OUT */}
      <View className="h-10 bg-blue-500 rounded-md border-2 border-blue-200">
        <TouchableOpacity
          className="flex flex-row items-center justify-between mx-2"
          onPress={showDialog} activeOpacity={0.7}>
          <Text className="mx-2 text-xl font-bold text-white">Sign Out</Text>
          <Icon name='logout' size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* CONTACT US */}
      <View className="h-10 bg-blue-500 rounded-md border-2 border-blue-200">
        <TouchableOpacity
          className="flex flex-row items-center justify-between mx-2"
          activeOpacity={0.7}>
          <Text className="mx-2 text-xl font-bold text-white">Contact Us</Text>
          <Icon name='phone-outline' size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* DIALOG SIGN OUT DENGAN COMPONENT TERPISAH*/}
      {
        visible && <PopUpSignOut onDismiss={hideDialog} visible={visible} onSignOut={handleSignOut} />
      }

      {/* DIALOG SIGN OUT DENGAN DI PAGE TERSEBUT*/}
      {/* <Portal>
        <Dialog
          className="bg-blue-200"
          visible={visible} onDismiss={hideDialog}>
          <Dialog.Content>
            <Text className="text-lg text-center font-medium text-gray-500">Are you sure sign out ?</Text>
          </Dialog.Content>

          <Dialog.Actions className="flex justify-around">
            <Button className="bg-blue-500 rounded-xl w-24"
              onPress={handleSignOut} title='ok'>
              <Text className="text-lg font-bold text-white">Ok</Text>
            </Button>
            <Button className="bg-blue-500 rounded-xl w-24"
              onPress={hideDialog} title='cancel'>
              <Text className="text-lg font-bold text-white">Cancel</Text>
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal> */}
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})
