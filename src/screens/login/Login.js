import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import React from 'react';
import image from "../../images/onboarding2.png";
import InputBox from '../../components/InputBox';
import Colors from '../../../assets/colors/Colors';
import CommunBtn from '../../components/CommunBtn';

const Login = () => {
  return (
    <View style={{ backgroundColor: Colors.white, flex: 1, paddingHorizontal: 16, justifyContent: "center", }}>
      <KeyboardAvoidingView>
        {/* image */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={image} style={{ width: 200, height: 200 }} />
        </View>

        {/* heading */}
        <Text style={{ fontFamily: "Poppins-Bold", fontSize: 20, color: Colors.primary }}>LogIn</Text>
        <View>
          <InputBox
            placeholder='mobile or email'
          />
          <InputBox
            placeholder='password'
          />

          {/*LogIn button */}
          <CommunBtn title={"LogIn"} />
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
            <Text style={{ color: Colors.primary, fontFamily: "Poppins-Medium", fontSize: 12 }}>Create New Account</Text>
          </View>
          <InputBox
            placeholder='password'
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})