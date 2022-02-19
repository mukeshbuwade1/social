import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import Home from "../screens/home/Home";
import Onboarding from '../screens/onboarding/Onboarding';

const Stack = createNativeStackNavigator();
const Rootnavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='Onboarding'
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Rootnavigator

