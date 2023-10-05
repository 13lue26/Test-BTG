import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const DataTamu2 = () => {
  const navigation = useNavigation();
  return (
    <View className="flex justify-start mx-2">
      <View className="flex flex-col justify-start my-2">
        <Text className="text-lg font-bold">Data Tamu</Text>
      </View>

      <View className="flex flex-row justify-start items-center p-2 my-1 border border-slate-200 rounded">
        <Icon name="account-outline" size={30} />
        <Text className="text-base font-semibold text-black">Tn. Jhon Doe</Text>
      </View>

      <View className="flex flex-row justify-start items-center p-2 border border-slate-200 rounded">
        <Icon name="account-outline" size={30} />
        <Text className="text-base font-semibold text-black">Tn. Jhon Doe</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Tambah Data Tamu")}>
        <View className="flex flex-col justify-center items-end my-2">
          <Text className="text-blue-400 underline">Ubah Data Tamu</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DataTamu2;

const styles = StyleSheet.create({});
