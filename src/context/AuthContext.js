import React ,{createContext,  useContext, useEffect, useState } from "react";
import { auth , db} from "../firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

} 
from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";







const AuthContext = createContext();

export function AuthContextProvider ({ children }) {
    const [user, setUser] = useState({});


  

    function signUp(email, password) {
     createUserWithEmailAndPassword(auth , email, password);
     setDoc(doc(db, 'users', email), {
    }
    );
    }
    
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth , email, password);
    }

    function logOut() {
        return signOut();
    }


    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (user) {
            setUser(currentUser);
        } else {
            setUser({});
        }
        });
    
        return unsubscribe;
    }, []);
    
    return (
        <AuthContext.Provider value={{ user , logIn , signUp ,logOut }}>{children}</AuthContext.Provider>
    );
    }

    export function UserAuth() {
        return useContext(AuthContext);
    }

