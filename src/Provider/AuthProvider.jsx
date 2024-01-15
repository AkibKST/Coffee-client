import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // jokhn user create hobe tokhn state ta true thakbe
    const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In A user
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Logout a user
    const logOut = () =>{
        return signOut(auth);
    }

    // user ache kina check korteche useEffect er maddhome
    useEffect(() => {
        // firebase theke On Auth state dhore rakhar jonno
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('observing current user inside useEffect of AuthProvider', currentUser)
        });

        return () => {
            unSubscribe();
        } 
    }, [])

    // value hisebe Provider ke send korchi
    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;