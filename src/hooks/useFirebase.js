import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut} from "firebase/auth";
import { useState,useEffect } from "react";
import initializeAuthentication from '../Login/Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const gprovider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [loading,setLoading]=useState(true)

    const auth = getAuth();

    const handleGoogleSignin = () => {
        signInWithPopup(auth, gprovider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() =>setLoading(false)
        )
    }
    const logout = () => {
        setLoading(true)
        signOut(auth)
            .then(result => {
            setUser({})
            })
        .finally(()=>setLoading(false))
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            setLoading(false)
        })
    },[])
    
    return {
        user,
        loading,
        handleGoogleSignin,
        logout
}
    
};

export default useFirebase;