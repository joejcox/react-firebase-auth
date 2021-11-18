import { useState, useEffect, createContext } from "react"
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import auth from "Lib/firebase"

export const AuthContext = createContext({
  currentUser: null,
  signUp: Promise,
  signIn: Promise,
  logout: Promise,
})

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
      }
    })

    return () => unsubscribe()
  }, [])

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    validateEmail(email)
    validatePasswords(password)
    return signInWithEmailAndPassword(email, password)
  }

  const logout = async () => {
    try {
      const response = await signOut(auth)
      setCurrentUser(response)
    } catch (error) {
      console.log(error)
    }
  }

  const value = {
    currentUser,
    signUp,
    signIn,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
