import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MultiStep = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          marginHorizontal: 2,
        }}
      >
        <Text>Detail Pesanan</Text>
      </View>

      <View>
        <Text>Pembayaran</Text>
      </View>
    </View>
  );
};

export default MultiStep;

const styles = StyleSheet.create({});
