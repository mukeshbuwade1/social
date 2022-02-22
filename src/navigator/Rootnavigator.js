import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import Home from "../screens/home/Home";
import Onboarding from '../screens/onboarding/Onboarding';
import Chat from '../screens/home/Chat';
import SignUp from '../screens/login/SignUp';


import auth from '@react-native-firebase/auth';
import AuthProvider, { AuthContext } from "../AuthProvider"

const Stack = createNativeStackNavigator();

const HomeStack = () => {

    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}>

            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}
const LoginStack = () => {

    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}>

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}

const StackContainer = () => {
    return (
        <Stack.Navigator
            initialRouteName='LoginStack'
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="LoginStack" component={LoginStack} />
            <Stack.Screen name="HomeStack" component={HomeStack} />
        </Stack.Navigator>
    )
}

const Rootnavigator = () => {
    // const { user, setUser } = useContext(AuthContext);
    // const [user, setUser] =  useState(null)

    // const [initializing, setInitializing] = useState(true);

//    const login= async(email, password)=>{
//         console.log(`user LogIn : email-${email}, password-${password}`);
//       try {
//            await auth().signInWithEmailAndPassword(email, password)
//             console.log(`LogIn succefully`);
//       } catch (error) {
//           console.log(`Error occurs when log in :${error}`);
//       }
//    },
//   useEffect=
    // // Handle user state changes
    // function onAuthStateChanged(user) {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    // }

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    // }, [])

    //     if (initializing) return null
    return (
        <AuthProvider>
            <NavigationContainer>
                <StackContainer />
            </NavigationContainer>
        </AuthProvider>
    )
}

export default Rootnavigator

