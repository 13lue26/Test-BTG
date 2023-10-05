import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import React, { useState } from "react";

const DetailPemesan2 = () => {
  const [value, setValue] = useState("first");

  return (
    <View className="flex justify-start mx-2">
      <View className="flex flex-col justify-start my-2">
        <Text className="text-lg font-bold">Detail Pemesan</Text>
      </View>

      <View className="flex flex-row justify-between items-center border border-slate-200 rounded p-2 my-2">
        <View className="flex flex-col flex justify-start">
          <Text className="text-base font-bold">Tn.Andreas Andreas</Text>
          <Text className="text-sm font-semibod text-slate-300">
            andreasandreas@gmail.com
          </Text>
          <Text className="text-sm font-semibod text-slate-300">
            +628 22 2222 2222
          </Text>
        </View>

        <TouchableOpacity>
          <View>
            <Text className="text-blue-400 underline">Ubah</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <View className="flex flex-row items-center">
            <RadioButton color="blue" value="first" />
            <Text>Saya memesan untuk sendiri</Text>
          </View>
          <View className="flex flex-row items-center">
            <RadioButton color="blue" value="second" />
            <Text>Saya memesan untuk orang lain</Text>
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );
};

export default DetailPemesan2;

const styles = StyleSheet.create({});
