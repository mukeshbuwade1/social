import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react';
import Colors from '../../assets/colors/Colors'

const { width, height } = Dimensions.get("window")
// console.log(`width: ${width}, height: ${height} `)
const Slide = ({item}) => {
  return (
    <View>
      <View style={styles.top}>
        <Image source={require("../images/onboarding2.png")} style={styles.image} />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.font}>{item.name} </Text>
      </View >

    </View>
  )
}

export default Slide

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  top: {
    width: width,
    height: height * 0.6,
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    width: width,
    height: height*0.35 ,
    justifyContent: "center",
    alignItems: "center",
    
    
  },
  font: {
    fontSize: 25,
    color: Colors.black,
    fontFamily: "Poppins-Bold"
  }
})