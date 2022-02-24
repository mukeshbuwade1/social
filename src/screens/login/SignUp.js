import { Image, Dimensions, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import React from 'react';
import image from "../../images/onboarding2.png";
import InputBox from '../../components/InputBox';
import Colors from '../../../assets/colors/Colors';
import CommunBtn from '../../components/CommunBtn';
const { width, height } = Dimensions.get("window")
import auth from '@react-native-firebase/auth';

const SignUp = (props) => {
  const [email, setEmail] = React.useState("")  
  const [password, setPassword] = React.useState("")
    const [valid,setValid] = React.useState(true)
    const [error,setError] = React.useState("")    
    const __isValidEmail =(val)=>{
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        return reg.test(val)
    }
   
    const __doSignUp = () => {
        // console.log("password",password.trim())
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
      
      const __doCreateUser = async (email, password) => {
        console.log("email",email,"...","password",password);
        try {
          let response = await auth().createUserWithEmailAndPassword(email, password)
          if (response) {
            console.log( "?", response)
          }
        } catch (e) {
          console.error(e.message)
        }
      }
const SignupFunction=()=>{
    __doSignUp()
    console.log("valid-",valid,"becouse-",error)
    if(__doSignUp){      
      __doCreateUser(email, password)
    }else{
      console.log("vailidation fail........,")
    }
}

  return (
    <View style={{ backgroundColor: Colors.white, flex: 1, paddingHorizontal: 16, }}>
    <ScrollView style={{  }} showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView style={{ height:height,justifyContent: "center", }}
      //  behavior="padding" enabled   
      //  keyboardVerticalOffset={100}
      >

        <View style={styles.mainView}>
          {/* image */}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={image} style={{ width: 150, height: 150 }} />
          </View>

          {/* heading */}
          <Text style={{ fontFamily: "Poppins-Bold", fontSize: 22, color: Colors.primary, marginLeft: 5 }}>SignUp</Text>
          <View>
            <InputBox
              placeholder=' email'
              onChangeText={(text)=>setEmail(text)}
            />
            <InputBox
              placeholder='password'
              onChangeText={(text)=>setPassword(text)}
            />
           

            {/*LogIn button */}
            <CommunBtn 
            title={"SignUp"} 
            onPress={SignupFunction} 
           
            />
           

          </View>
        </View>

      </KeyboardAvoidingView>
    </ScrollView>
  </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        // borderWidth: 2,
        justifyContent: "center",
        // alignItems:"center"
      }
})