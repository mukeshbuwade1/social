import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = (props) => {
  return (
    <View>
      <Text onPress={()=>props.navigation.navigate("Login")}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})