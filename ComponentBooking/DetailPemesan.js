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
import RadioOption from "./RadioOption";

export default function DetailPesanan({ data }) {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Text
          style={{
            marginLeft: 15,
            marginTop: 10,
          }}
        >
          Detail Pemesan
        </Text>
        <View
          style={{
            flex: 4,
            backgroundColor: "white",
            marginLeft: 15,
            marginBottom: 10,
            marginTop: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "dimgrey",
            flexDirection: "row",
          }}
        >
          <View
            style={{ flex: 5, marginLeft: 5, marginBottom: 5, marginTop: 5 }}
          >
            <Text>Tn. Andreas Andreas</Text>
            <Text>andreasandreas@gmail.com</Text>
            <Text>+628 22 2222 2222</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1, backgroundColor: "white" }}></View>
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <Text style={styles.underline}>ubah</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: "white" }}></View>
          </View>
        </View>
        <View style={{ flex: 4, alignItems: "left", backgroundColor: "white" }}>
          <RadioOption />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  bold: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  italic: {
    fontStyle: "italic",
    textAlign: "center",
  },
  underline: {
    fontSize: 14,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  big: {
    fontSize: 25,
    textAlign: "center",
  },
  bigColor: {
    fontSize: 25,
    textAlign: "center",
    color: "blue",
  },
});
