import { Text, View, ScrollView } from "react-native";
import { useState, useEffect } from "react";

import DetailPesanan2 from "../ComponentBooking/DetailPesanan2";
import DetailPesanan from "../ComponentBooking/DetailPesanan";
import DetailPemesan2 from "../ComponentBooking/DetailPemesan2";
import DataTamu2 from "../ComponentBooking/DataTamu2";

const BASE_URL = `https://parseapi.back4app.com/classes/hotel/bVonXoSUHK`;
const appId = `Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3`;
const appKey = `4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy`;

export default function Payment() {
  const [hotel, setHotel] = useState({});

  const fetchHotel = async () => {
    try {
      // console.log("<<<<<<<<<<");
      const response = await fetch(BASE_URL, {
        headers: {
          "X-Parse-Application-Id": appId,
          "X-Parse-REST-API-Key": appKey,
        },
      });

      if (!response.ok) {
        throw response;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHotel()
      .then((data) => {
        const hotel = data.chosen_hotel.data.get_chosen_hotel;
        setHotel(hotel);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ScrollView>
      <View className="flex bg-slate-200">
        <View style={{alignItems: "center"}} className="flex bg-white my-0.5">
          <Text>Detail Pesanan</Text>
        </View>
        <View className="flex bg-white my-0.5">
          <DetailPesanan2 data={hotel} />
        </View>

        <View className="flex bg-white mt-0.5">
          <DetailPemesan2 />
        </View>

        <View className="flex bg-white">
          <DataTamu2 />
        </View>
      </View>
    </ScrollView>
  );
}
