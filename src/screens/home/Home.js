import { StyleSheet, Text, SafeAreaView, View, Image, Button } from 'react-native'
import React from 'react';
import CommonHeader from '../../components/CommonHeader';
import discoverbg from "../../images/discoverbg.png";
import user1 from "../../images/user1.png";
import Swiper from "react-native-deck-swiper";
import Tinder from "../../images/tinder.png";
import Chat from "../../images/chat.png";
import User from "../../images/businessman.png";


const users = [
  { name: "Mukesh", image: "https://picsum.photos/200/300?random=1" },
  { name: "Buwade", image: "https://picsum.photos/200/300?random=2" },
  { name: "Pawar", image: "https://picsum.photos/200/300?random=3" },
  { name: "Ok", image: "https://picsum.photos/200/300?random=4" },
]
const Home = (props) => {
  return (
    <SafeAreaView style={{}}>
      <View style={styles.headerContainer}>
        <Image source={User} style={{ width: 30, height: 30, borderRadius: 30, padding: 5 }} />
        <Image source={Tinder} style={{ width: 50, height: 50 }} />
        <Image source={Chat} style={{ width: 25, height: 25, }} />
      </View>
      <View style={styles.container}>
        {/* <Image source={discoverbg} style={styles.discoverbg} /> */}
        <Swiper
          cards={users}
          renderCard={(card) => {
            return (
              <View style={styles.card}>
                <Image source={{ uri: card.image }} style={styles.userimg} />
                <View style={styles.textArea}>
                  <View>
                    <Text style={styles.text}>{card.name}</Text>
                    <Text style={styles.rolltext}>software Developer</Text>
                  </View>
                  <Text style={styles.text}>22</Text>
                </View>
              </View>
            )
          }}
          onSwiped={(cardIndex) => { console.log(cardIndex) }}
          onSwipedAll={() => { console.log('onSwipedAll') }}
          onSwipedLeft={() => { console.log('Left') }}
          onSwipedRight={() => { console.log('Right') }}
          cardIndex={0}
          backgroundColor={'#f000'}
          stackSize={3}
          verticalSwipe={false}
          infinite={true}
        // cardStyle

        >
        </Swiper>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 10
  },
  container: {
    position: "relative",
    width: "100%",
    height: "85%",
    // backgroundColor: "red",
    paddingHorizontal: 16,
    marginTop: -30
  },
  card: {
    // position:"absolute",
    // backgroundColor:"green",
    width: "100%",
    height: "85%",
    margin: 0,
    padding: 0

  },
  userimg: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    borderBottomWidth:1,
  },
  textArea: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    minHeight: 70,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20,
    overflow:"hidden"
  },
  text:{
    fontSize:18,
    fontWeight:"800"
  },
  rolltext:{
    fontSize:14,
    fontWeight:"500"
  }
})

