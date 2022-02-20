import { Image, StyleSheet, Text, TextInput, ScrollView,TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import React from 'react';
import image from "../../images/onboarding2.png";
import InputBox from '../../components/InputBox';
import Colors from '../../../assets/colors/Colors';
import CommunBtn from '../../components/CommunBtn';

const Login = (props) => {
  return (
    <View style={{ backgroundColor: Colors.white, flex: 1, paddingHorizontal: 16, justifyContent: "center", }}>
     <KeyboardAvoidingView style={{ flex: 1,}} 
    //  behavior="padding" enabled   
    //  keyboardVerticalOffset={100}
     >
    <ScrollView showsVerticalScrollIndicator={false}>
        {/* image */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={image} style={{ width: 150, height: 150 }} />
        </View>

        {/* heading */}
        <Text style={{ fontFamily: "Poppins-Bold", fontSize: 22, color: Colors.primary,marginLeft:5 }}>LogIn</Text>
        <View>
          <InputBox
            placeholder='mobile or email'
          />
          <InputBox
            placeholder='password'
          />
          <View style={{ width: "100%", alignItems: "flex-end",marginVertical:2 }}>
            <Text style={{ color: Colors.primary, fontFamily: "Poppins-Medium", fontSize: 10 }}>Forgot Password?</Text>
          </View>

          {/*LogIn button */}
          <CommunBtn title={"LogIn"} onPress={()=>props.navigation.navigate("Home")} />
          {/* horizontal line  */}
          <View style={{ width: "100%", height: 3, backgroundColor: Colors.inputBackgraound, marginTop: 30 }} ></View>
          {/* or text  */}
          <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: -15 }}>
            <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: Colors.white, elevation: 2, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontFamily: "Poppins-Medium", fontSize: 15, color: Colors.black }}>OR</Text>
            </View>
          </View>
          {/*LogIn with email button */}
          <CommunBtn title={"LogIn with email"}
            style={{ backgroundColor: Colors.white, borderWidth: 3, borderColor: Colors.inputBackgraound, marginVertical: 20 }}
            textstyle={{ color: Colors.black, fontFamily: "Poppins-Medium", fontSize: 15 }} />
          <View style={{ width: "100%", alignItems: "center" }}>
            <Text style={{ color: Colors.primary, fontFamily: "Poppins-Medium", fontSize: 12 }}>New User? Create Account</Text>
          </View>
          
        </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})