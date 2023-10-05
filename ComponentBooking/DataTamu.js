import { View, Text, ScrollView } from "react-native";

export default function DataTamu() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Text
          style={{
            flex: 3,
            fontSize: 24,
            color: "black",
            // fontWeight: "bold",
            marginLeft: 5,
          }}
        >
          Data Tamu
        </Text>
        <ScrollView horizontal></ScrollView>
      </View>
    </>
  );
}
