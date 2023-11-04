/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    // Google SignIn
    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    // Create User
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // SignIn User
    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // LogOut User 
    const logOut =()=>{
        return signOut(auth)
    }

    // Observer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])



    const authentications={
        googleSignIn,
        createUser,
        signInUser,
        logOut,
        loading,
        user
    }
    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;