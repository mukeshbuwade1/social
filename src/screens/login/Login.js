import { Image,Alert, Dimensions, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import React from 'react';
import image from "../../images/onboarding2.png";
import InputBox from '../../components/InputBox';
import Colors from '../../../assets/colors/Colors';
import CommunBtn from '../../components/CommunBtn';
import auth from '@react-native-firebase/auth';

const { width, height } = Dimensions.get("window")


const Login = (props) => {
  const [email, setEmail] = React.useState("")  
  const [password, setPassword] = React.useState("")
  const [valid, setValid] = React.useState(true)
  const [error, setError] = React.useState("")
  // const password = "123456";
  // const email = "mukeshbuwade@gmail.com";
  const __isValidEmail = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(val)
  }

  const __Validation = () => {    
    if (!email) {
      setError("Email required *")
      setValid(false)
      return false
    } else if (!__isValidEmail(email)) {
      setError("Invalid Email")
      setValid(false)
      return false
    }else if (!password) {
        console.log("password-1:",password)
        setError(" password required")
        setValid(false)
        return false
    } else if(password.length > 6){
        console.log("password-3:",password)
        setError("Weak password, minimum 5 chars")
        setValid(false)
        return false
    }
    setError("")
    setValid(true)
    return true
    // __doCreateUser(email, password)
  }

  const __doSingIn = async (email, password) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password)
      if (response && response.user) {
        // console.log("response",response)
        // Alert.alert("Success ✅", "Authenticated successfully")
        props.navigation.navigate("HomeStack")
      }
    } catch (e) {
      console.error(e.message)
    }
  }

  const SigninFunction = () => {
    // console.log("email",email,"password",password)
    
    __Validation()
    console.log("valid-", valid, "becouse-", error)
    if (__Validation) {
      __doSingIn(email, password)
    } else {
      console.log("vailidation fail........,")
    }
  }

  return (
    <View style={{ backgroundColor: Colors.white, flex: 1, paddingHorizontal: 16, }}>
      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView style={{ height: height, justifyContent: "center", }}
        //  behavior="padding" enabled   
        //  keyboardVerticalOffset={100}
        >

          <View style={styles.mainView}>
            {/* image */}
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={image} style={{ width: 150, height: 150 }} />
            </View>

            {/* heading */}
            <Text style={{ fontFamily: "Poppins-Bold", fontSize: 22, color: Colors.primary, marginLeft: 5 }}>LogIn</Text>
            <View>
              <InputBox
                placeholder='email'
                onChangeText={(text)=>setEmail(text)}
              />
              <InputBox
                placeholder='password'
                onChangeText={(text)=>setPassword(text)}
              />
              <View style={{ width: width * 0.85, alignItems: "flex-end", marginVertical: 2 }}>
                <Text style={{ color: Colors.primary, fontFamily: "Poppins-Medium", fontSize: 10 }}>Forgot Password?</Text>
              </View>

              {/*LogIn button */}
              <CommunBtn title={"LogIn"} onPress={SigninFunction} />
              {/* horizontal line  */}
              <View style={{ width: width * 0.85, height: 3, backgroundColor: Colors.inputBackgraound, marginTop: 30 }} ></View>
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
              <TouchableOpacity onPress={() => { props.navigation.navigate("SignUp") }} style={{ width: "100%", alignItems: "center" }}>
                <Text style={{ color: Colors.primary, fontFamily: "Poppins-Medium", fontSize: 12 }}>New User? Create Account</Text>
              </TouchableOpacity>

            </View>
          </View>

        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // borderWidth: 2,
    justifyContent: "center",
    // alignItems:"center"
  }
})