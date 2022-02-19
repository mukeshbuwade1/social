import { SafeAreaView, StyleSheet, Text, View, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../assets/colors/Colors';
import Slide from '../../components/Slide';
import mydata from '../../data/Data';
import Footer from '../../components/Footer';
const temp = [
  "mukesh", "buwade", "buwade"
]
const { width, height } = Dimensions.get("window")

const Onboarding = (props) => {
  const [currentSlideIndex, setcurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null)
  //helper mathods
  const updateCurruntSlideIndex = (e) => {
    const currntOffsetX = e.nativeEvent.contentOffset.x;
    const curruntIndex = Math.round(currntOffsetX / width)
    setcurrentSlideIndex(curruntIndex)
  }
  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== mydata.length) {
      console.log("next")
      const offset = nextSlideIndex * width
      ref?.current?.scrollToOffset({ offset })
      setcurrentSlideIndex(nextSlideIndex)
    } else {
      props.navigation.navigate("Login")
    }
  }
  const goPreviousSlide = () => {
    const PreviousSlideIndex = currentSlideIndex - 1;
    if (PreviousSlideIndex >= 0) {
      console.log("Previous")
      const offset = PreviousSlideIndex * width
      ref?.current?.scrollToOffset({ offset })
      setcurrentSlideIndex(PreviousSlideIndex)
    } else {
      console.log("skip")
    }
  }
  //render view
  return (
    <SafeAreaView style={styles.body}>
      {/* background  */}
      <View style={{ flex: 1, position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}>
        <View style={styles.top}></View>
        <View style={styles.bottom}>
          <View style={styles.bottomFront}>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
              {
                mydata.map((item, index) => {
                  return (
                    <View key={index} style={{ ...styles.indicator, width: currentSlideIndex == index ? 20 : 7, }}>
                    </View>
                  )
                })
              }
            </View>

          </View>
        </View>
      </View>

      {/* content  */}
      <FlatList
        ref={ref}
        data={mydata}
        renderItem={Slide}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={updateCurruntSlideIndex}
        showsVerticalScrollIndicator={false}
      />

      <View style={{ position: "absolute", bottom: 0, flexDirection: "row", justifyContent: "space-between", width, padding: 30 }}>
        <TouchableOpacity onPress={goPreviousSlide} style={styles.button}>
          <Text style={styles.buttonText}>{currentSlideIndex !== 0 ? "Previous" : "skip"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ goNextSlide} style={styles.button}>
          <Text style={styles.buttonText}>{currentSlideIndex !== 2 ? "next" : "done"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.white
  },
  top: {
    backgroundColor: Colors.primary,
    width: width,
    height: height * 0.65,
    borderBottomRightRadius: 70,
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  bottom: {
    backgroundColor: Colors.primary,
    width: width,
    height: height * 0.35,
    zIndex: -1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
  bottomFront: {
    backgroundColor: Colors.white,
    width: width,
    height: height * 0.35,
    zIndex: 0,
    borderTopLeftRadius: 70,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
  indicator: {
    margin: 2,
    borderRadius: 10,
    height: 3,
    backgroundColor: Colors.primary
  },
  button: { backgroundColor: Colors.primary, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 50, },
  buttonText: { fontSize: 15, color: Colors.white, fontFamily: "Poppins-Medium" }
})