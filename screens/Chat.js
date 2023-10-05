import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
  };

   return (
    <View style={styles.containerChat}>
      <GiftedChat
        placeholder='Pesan ...'
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
          avatar: "https://tse3.mm.bing.net/th?id=OIP.8DDnZg9-q5BkyTcfOAYsbwHaGA&pid=Api&P=0&h=180"
        }}
        alwaysShowSend={true}
        showUserAvatar={true}
        showAvatarForEveryMessage={true}
      />
    </View>
  );
}

export default Chat

const styles = StyleSheet.create({
  containerChat :{
    flex: 1,
    marginBottom: 5,
    padding: 2.5
  }
})