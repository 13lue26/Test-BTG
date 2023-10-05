import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DetailPesanan2 = ({ data }) => {
  return (
    <View className="flex justify-start mx-2">
      <View className="flex flex-col justify-start my-2">
        <Text className="text-lg font-bold">Detail Pesanan</Text>
      </View>

      <View className="flex flex-row justify-start items-center border border-slate-200 rounded p-2">
        <Image
          className="w-20 h-20 rounded mr-2"
          source={{ uri: data?.chosen_hotel_detail?.images[0]?.url }}
        />
        <View className="flex flex-col justify-start">
          <Text className="text-sm font-bold text-blue-600">
            {data?.chosen_hotel_detail?.hotel_name}
          </Text>
          <Text className="text-xs flex font-semibod text-slate-300">
            {data?.chosen_hotel_detail?.facilities?.join(", ")}
          </Text>
        </View>
      </View>

      <View className="flex flex-row justify-between items-center my-2">
        <Text className="text-base font-semibold text-slate-800">Check-In</Text>
        <Text className="text-sm font-semibold text-slate-300">
          {data?.chosen_hotel_params?.check_in}
        </Text>
      </View>

      <View className="flex flex-row justify-between items-center my-2">
        <Text className="text-base font-semibold text-slate-800">
          Check-Out
        </Text>
        <Text className="text-sm font-semibold text-slate-300">
          {data?.chosen_hotel_params?.check_out}
        </Text>
      </View>

      <View className="flex flex-row justify-end my-2">
        <Icon name="currency-gbp" size={20} color="orange" />
        <Text className="text-sm font-semibold text-orange-400">
          Dapat direfund jika di batalkan
        </Text>
      </View>
    </View>
  );
};

export default DetailPesanan2;

const styles = StyleSheet.create({});
