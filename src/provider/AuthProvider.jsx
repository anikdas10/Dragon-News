import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)


    const createNewUser = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo ={
        createNewUser,
        user,setUser
    }

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser)
            {
                setUser(currentUser)
            }
            else{
                console.log('user is sign out');
            }
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    console.log(user);
    
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;