import { SafeAreaView, StyleSheet, Dimensions, Text, View } from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// leftIconName={"chevron-back"}
// leftIconColor={"#E94057"}
// leftIconSize={24}
// heading={"Text"}
// rightIconName={"options"}
// rightIconColor={"#E94057"}
// rightIconSize={20}
const { width, height } = Dimensions.get("window")
const CommonHeader = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.mainView}>
        <View style={styles.headerContainer}>
          {/* left  */}
          <View style={styles.icon}>
            <Ionicons
              name={props?.leftIconName??null}
              size={props?.leftIconSize??24}
              color={props?.leftIconColor??null} />
          </View>

          {/* center */}
          <View>
            <Text style={styles.text}>
              {props?.heading}
            </Text>           
          </View>

          {/* right */}
          <View style={styles.icon}>
            <Ionicons
              name={props?.rightIconName??null}
              size={props?.rightIconSize??24}
              color={props?.rightIconColor??null}
            />
          </View>
        </View>

        {props?.children}
      </View>
    </SafeAreaView>
  )
}

export default CommonHeader

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    borderWidth: 1,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#E8E6EA",
    borderRadius: 15
  },
  text: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "#000"
  }
})