import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import React from 'react';
import CommonHeader from '../../components/CommonHeader';
import discoverbg from "../../images/discoverbg.png";
import user1 from "../../images/user1.png"
const Home = (props) => {
  return (
    <CommonHeader
    leftImage={"https://statinfer.com/wp-content/uploads/dummy-user.png"}
      leftIconName={"chevron-back"}
      leftIconColor={"#E94057"}
      leftIconSize={28}
      heading={"Discover"}
      rightIconName={"ios-chatbubbles"}
      rightIconColor={"#E94057"}
      rightIconSize={28}
      centerIcon={"tinder"}
      centerIconColor={"#E94057"}
      centerIconSize={35}
    >
      <View style={{ flex: 1, marginTop:5, }}>
        <Image source={discoverbg} style={styles.discoverbg} />
        <View style={{marginHorizontal:10, marginTop:16}}>
          
          
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
    borderRadius:15
  }
})

