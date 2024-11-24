import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading] = useState(true);


    const createNewUser = (email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }


    const handleLogin = (email,password)=>{
       setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const authInfo ={
        createNewUser,
        handleLogin,
        logOut,
        user,setUser,
        loading
    }

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    console.log(user,loading);

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;