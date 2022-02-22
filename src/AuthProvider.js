import React,{useState,createContext} from "react";

import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

const AuthProvider =({children})=>{
    const [user, setUser] =  useState(null)
    return(
        <AuthContext.Provider 
        value={{
            user,
            setUser,
            login: async(email, password)=>{
                 console.log(`user LogIn : email-${email}, password-${password}`);
               try {
                    await auth().signInWithEmailAndPassword(email, password)
                     console.log(`LogIn succefully`);
               } catch (error) {
                   console.log(`Error occurs when log in :${error}`);
               }
            },
            ragister: async(email, password)=>{
                 console.log(`user signUp : email-${email}, password-${password}`);
               try {
                    await auth().createUserWithEmailAndPassword(email, password)
                     console.log(`SignUp succefully`);
               } catch (error) {
                   console.log(`Error occurs when SignUp :${error}`);
               }
            },
            logout: async ()=>{
                try {
                     await auth().signOut()
                      console.log(`signOut......`)
                } catch (error) {
                     console.log(`Error occurs when sign out`)
                }
            }
        }}>
        {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider