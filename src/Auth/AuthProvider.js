import React ,{useEffect, useState, useContext} from 'react'
import { auth } from './firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider = ( {children}) => {
    const [currentUser, setCurrentUser] = useState("")
    const [loading, setloading] = useState(true)

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password);
    }

    function signin(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }

    function logout() {
        return auth.signOut()
      }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user == null)
                setCurrentUser("");
            else
                setCurrentUser(user.email);
            setloading(false);
        })
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signup,
        signin,
        logout
    }

    return (
        <div>
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
