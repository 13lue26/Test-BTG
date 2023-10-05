import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight } from 'react-native'
import React, { useEffect } from 'react'
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BASE_URL = `https://parseapi.back4app.com/classes/hotel/bVonXoSUHK`
const appId = `Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3`
const appKey = `4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy`

const data = [
  {
    id: 1,
    imageUrl: `https://www.teakpalace.com/image/cache/catalog/artikel/gambar-makanan-paling-enak-sate-kambing-1000x750h.jpg`,
    nameFood: "Sate",
    price: "10 k",
    store: "WR.Sate Madura"
  },
  {
    id: 2,
    imageUrl: `https://i0.wp.com/seruni.id/wp-content/uploads/2016/12/makanan-khas-betawi.jpg?w=800&ssl=1`,
    nameFood: "Soto Betawi",
    price: "15 k",
    store: "Soto Betawi Desi"
  },
  {
    id: 3,
    imageUrl: `https://1.bp.blogspot.com/-VEUnt1a8YNg/X6-nKr5vqEI/AAAAAAAAAEc/w93MdluimjkuC5zmCvrsBWCU1puemoHlwCLcBGAsYHQ/w640-h480/picture-1526753883.jpg`,
    nameFood: "Gudeg",
    price: "10.5 k",
    store: "Gudeg Asli Yogya"
  },
  {
    id: 4,
    imageUrl: `https://beritazamannow.files.wordpress.com/2018/11/1a.jpg`,
    nameFood: "Ayam Geprek",
    price: "12.5 k",
    store: "Geprek PIM"
  },
  {
    id: 5,
    imageUrl: `https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg`,
    nameFood: "Bakso",
    price: "15 k",
    store: "Bakso Cipinang"
  },
]


const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [movie, setMovie] = useState([])

  const [food, setFood] = useState([])
  const [loading, setLoading] = useState(false)

  const onChangeSearch = query => setSearchQuery(query);

  // console.log(searchQuery)

  // const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

  // const getMovie = async () => {

  //   try {

  //     const response = await fetch(url, {
  //       headers: {
  //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzhiOTdhYmYwODJmNmRjNjJhN2Q2NDc0YzQzYWQzNyIsInN1YiI6IjY0ZmY0M2NkMmRmZmQ4MDBlM2QzNzQ0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-Sp9OhPJ-tJuGDpnXdQH-a4owDiidcJel35jLXJTbM",
  //         "accept": "application/json"
  //       }
  //     })
  //     if (!response.ok) {
  //       throw { response }
  //     }

  //     const data = await response.json()
  //     // console.log(movie.results)
  //     setMovie(data.results)

  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  const fetchHotel = async () => {
    try {
      // console.log("<<<<<<<<<<");
      const response = await fetch(BASE_URL,{
        headers: {
          "X-Parse-Application-Id": appId,
          "X-Parse-REST-API-Key": appKey
        }
      })

      if(!response.ok){
        throw response
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchHotel()
    .then((data)=> console.log(data, "<<<<<<<<< USE EFFECT"))
    .catch((error)=> console.log(error))
  }, [])

  useEffect(() => {
    setFood(data)
  }, [])

  // console.log(movie)

  return (
    <View className="container justify-center h-screen w-screen bg-slate-200">
      <ScrollView className="flex flex-1 m-1">
        {/* <Searchbar className="bg-slate-100 border rounded-2xl border-slate-300 jusify-center"
          mode='view'
          placeholder='Seacrch ...'
          loading={false}
          placeholderTextColor='gray'
          onChangeText={onChangeSearch}
          value={searchQuery}
        /> */}

        <View className="flex flex-1 flex-row items-center justify-center my-1">
          <View className="flex-auto items-center border border-slate-300 rounded-lg mx-2 py-2 ">
            <Icon name='rice' size={30} color="#0EA5E9" />
            <Text className="text-sm text-cyan-700 font-medium">Rice</Text>
          </View>
          <View className="flex-auto items-center border border-slate-300 rounded-lg mx-2 py-2 ">
            <Icon name='cookie-outline' size={30} color="#0EA5E9" />
            <Text className="text-sm text-cyan-700 font-medium">Snacks</Text>
          </View>
          <View className="flex-auto items-center border border-slate-300 rounded-lg mx-2 py-2 ">
            <Icon name='beer' size={30} color="#0EA5E9" />
            <Text className="text-sm text-cyan-700 font-medium">Drinks</Text>
          </View>
          <View className="flex-auto items-center border border-slate-300 rounded-lg mx-2 py-2 ">
            <Icon name='view-grid-outline' size={30} color="#0EA5E9" />
            <Text className="text-sm text-cyan-700 font-medium">More</Text>
          </View>
        </View>

        <View className="bg-slate-200 rounded-xl border-2 border-slate-200 shadow-lg shadow-slate-300/50">
          <Text className="bg-slate-200 font-semibold text-slate-600 text-start text-lg mx-2 my-2">Top rated food</Text>
          <FlatList
            horizontal={true}
            data={food}
            renderItem={({ item, index, separators }) => (
              <TouchableHighlight className="bg-slate-200"
                key={item.id}
                onPress={() => console.log("masuk bg")}
                underlayColor="#E2E8F0"
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}
              >
                <Card className="flex justify-center bg-slate-200 border border-slate-200 mx-1">
                  <Card.Cover className="flex justify-center w-50 h-28"
                    source={{ uri: item.imageUrl }} />
                  <Card.Content>
                    <Text className="text-lg font-medium">{item.nameFood}</Text>
                    <View className="flex flex-row justify-center items-center">
                      <Icon name='store' size={20} color="#0EA5E9" />
                      <Text className="text-sm font-normal truncate">{item.store}</Text>
                      <Text className="text-base font-bold mx-2">{item.price}</Text>
                    </View>
                  </Card.Content>
                </Card>
              </TouchableHighlight>
            )}
          />
        </View>

        <View className="bg-slate-100 flex flex-1 items-center justify-center rounded-xl border border-slate-50 shadow-2xl shadow-slate-500/50 my-1">
          <View className="flex flex-row bg-red-900 my-1 mx-1 px-1 py-1 border-2 rounded-2xl">
            <View className="flex-auto bg-black items-center mx-2 py-2">
              <Text className="text-white">01</Text>
            </View>
            <View className="flex-auto bg-blue-500 items-center mx-2 py-2">
              <Text className="text-white">02</Text>
            </View>
            <View className="flex-auto bg-black items-center mx-2 py-2">
              <Text className="text-white">03</Text>
            </View>
            <View className="flex-auto bg-black items-center mx-2 py-2">
              <Text className="text-white">04</Text>
            </View>
          </View>

          <View className="flex flex-row bg-red-900 my-1 mx-1 px-1 py-1 border-2 rounded-2xl">
            <View className="flex-auto bg-black items-center mx-2 py-2">
              <Text className="text-white">01</Text>
            </View>
            <View className="flex-auto bg-blue-500 items-center mx-2 py-2">
              <Text className="text-white">02</Text>
            </View>
            <View className="flex-auto bg-black items-center mx-2 py-2">
              <Text className="text-white">03</Text>
            </View>
            <View className="flex-auto bg-black items-center mx-2 py-2">
              <Text className="text-white">04</Text>
            </View>
          </View>
        </View>

        <View className="bg-red-500 flex flex-1 h-72 justify-center my-2">
          <Text>ini buat apa ya </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  search: {
    backgroundColor: '#F5F5F5',
    marginVertical: 10
  },
  image: {
    flex: 0.4,
    justifyContent: "center"
  },
  card: {
    backgroundColor: "#DCDCDC",
  },
  cardCover: {
    // backgroundColor: "hotpink",
    width: 100,
    height: 150,
    marginVertical: 10,
    marginHorizontal: 5
  }

})



// =========SEARCH BAR MANUAL (belum seleasi) =================
//   < TextInput className = "bg-slate-200 border-2 rounded-2xl text-center "
// placeholder = 'Search...'
// placeholderTextColor = 'gray'
// inputMode = 'search'
//   >
//   <Icon className="flex justify-start"
//     name='magnify' size={20} />
//         </ TextInput>



// ========== RENDER DATA MENGGUNAKAN SCROLL VIEW  ==================
{/* 
        <View className="bg-slate-100 rounded-xl border-2 border-slate-200 shadow-lg shadow-slate-300/50 my-1">
          <Card className="flex justify-center bg-slate-100 border border-slate-100 px-2 py-1">
            <ScrollView horizontal={true}>
              {
                food && food.map((el) => {
                  return <View key={el.id}>
                    <Card.Cover className="flex justify-center w-60 h-40 mx-1 my-2"
                      source={{ uri: el.imageUrl }} />
                  </View>
                })
              }
            </ScrollView>
          </Card>
        </View> */}

