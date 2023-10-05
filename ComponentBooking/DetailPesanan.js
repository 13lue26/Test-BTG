import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollViewComponent,
} from "react-native";

export default function DetailPesanan({ data }) {
  //   console.log(data.chosen_hotel_detail.hotel_name)
  return (
    <>
      <View
        className="bg-red-500"
        style={{ flex: 1, backgroundColor: "white" }}
      >
        <Text
          style={{
            marginLeft: 15,
            marginTop: 15,
          }}
        >
          Detail Pesanan
        </Text>
        <View
          style={{
            flex: 2,
            backgroundColor: "white",
            margin: 15,
            borderRadius: 5,
            padding: 10,
            borderWidth: 1,
            borderColor: "dimgrey",
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <Image
              style={{ width: 70, height: 50 }}
              source={{ uri: data?.chosen_hotel_detail?.images[0]?.url }}
            ></Image>
          </View>
          <View style={{ flex: 4, backgroundColor: "white" }}>
            <Text style={{}}>{data?.chosen_hotel_detail?.hotel_name}</Text>
            <Text>{data?.chosen_hotel_detail?.facilities?.join(", ")}</Text>
          </View>
        </View>
        <View style={{ flex: 3, backgroundColor: "white" }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginLeft: 15,
                marginTop: 10,
                flex: 1,
              }}
            >
              Check-In
            </Text>
            <Text
              style={{
                marginRight: 15,
                marginTop: 10,
                textAlign: "right",
                position: "end",
              }}
            >
              {data?.chosen_hotel_params?.check_in}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginLeft: 15,
                marginTop: 10,
                flex: 1,
              }}
            >
              Check-Out
            </Text>
            <Text
              style={{
                marginRight: 15,
                marginTop: 10,
                textAlign: "right",
                position: "end",
              }}
            >
              {data?.chosen_hotel_params?.check_out}
              {}
            </Text>
          </View>

          {/* <Text
            style={{
              // alignItems: "left",
              marginRight: 15,
              marginTop: 10,
              textAlign: "right",
            }}
          >
            Dapat direfund jika di batalkan
          </Text> */}
        </View>
      </View>
    </>
  );
}
