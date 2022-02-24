import { StyleSheet, Text, SafeAreaView, View, Image ,Button} from 'react-native'
import React from 'react';
import CommonHeader from '../../components/CommonHeader';
import discoverbg from "../../images/discoverbg.png";
import user1 from "../../images/user1.png";
import Swiper from "react-native-deck-swiper";

const users = [
  {name:"mukesh" , image:"https://picsum.photos/200/300?random=1"},
  {name:"buwade" , image:"https://picsum.photos/200/300?random=2"},
  {name:"pawar" , image:"https://picsum.photos/200/300?random=3"},
  {name:"ok" , image:"https://picsum.photos/200/300?random=4"},
]
const Home = (props) => {
  return (
    <CommonHeader
      leftIconName={"chevron-back"}
      leftIconColor={"#E94057"}
      leftIconSize={24}
      heading={"Discover"}
      rightIconName={"options"}
      rightIconColor={"#E94057"}
      rightIconSize={20}
    >
      <View style={{ flex: 1, marginTop: 5, }}>
        {/* <Image source={discoverbg} style={styles.discoverbg} /> */}
        <View style={{ marginHorizontal: 10, marginTop: 16 }}>


          <View style={styles.container}>
           
            <Swiper
              cards={users}
              renderCard={(card) => {
                return (
                  <View style={styles.card}>
                    <Image source={{uri:card.image}} style={{width:200,height:300}}/>
                    {/* <Text style={styles.text}>{card.name}</Text> */}
                  </View>
                )
              }}
              onSwiped={(cardIndex) => { console.log(cardIndex) }}
              onSwipedAll={() => { console.log('onSwipedAll') }}
              cardIndex={0}
              backgroundColor={'#4FD0E9'}
              stackSize={3}>
              <Button
                onPress={() => { console.log('oulala') }}
                title="Press me">
                You can press me
              </Button>
            </Swiper>
          </View>


        </View>

      </View>
      <Text>Home</Text>
    </CommonHeader>
  )
}

export default Home

const styles = StyleSheet.create({
  discoverbg: {
    width: 251,
    height: 460,
    borderRadius: 15,
    alignSelf: "center",
    opacity: 0.4,
    position: "absolute"

  },
  user1: {
    width: 330,
    height: 485,
    borderRadius: 15
  }
})

