import React, { useMemo, useState } from "react";
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
import RadioGroup from "react-native-radio-buttons-group";

export default function RadioOption() {
  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Saya memesan untuk diri sendiri",
        value: "option1",
      },
      {
        id: "2",
        label: "Saya memesan untuk orang lain ",
        value: "option2",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState();

  return (
    <View style={{ position: "left" }}>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
      />
    </View>
  );
}
