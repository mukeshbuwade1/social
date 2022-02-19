import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import Colors from '../../assets/colors/Colors'

const InputBox = (props) => {
  return (
     
 <TextInput
    placeholder= {props?.placeholder??null}
    style={styles.InputBox}
    />
    
  )
}

export default InputBox

const styles = StyleSheet.create({
    
    InputBox:{
        marginVertical:5,
        height:50,
        width:"100%",
        backgroundColor:Colors.inputBackgraound,
        borderRadius:10,
        // borderWidth:2
        fontFamily:"Poppins-Medium",
        fontSize:14,
        paddingHorizontal:20
    }
})