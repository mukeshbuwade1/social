import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CommunBtn = (props) => {
    return (
        <TouchableOpacity
            style={{...styles.button, ...props?.style }}>
            <Text style={{...styles.buttonText,...props?.textstyle} }>{props?.title}</Text>
        </TouchableOpacity>
    )
}

export default CommunBtn

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: Colors.primary,
        height: 50,        
        marginVertical: 5,
        borderRadius: 10
    },
    buttonText: { fontFamily: "Poppins-Bold", fontSize: 20, color: Colors.white }
})