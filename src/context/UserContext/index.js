import { useState, useEffect, createContext } from "react"
import {
  /*doc, setDoc, getDoc,*/ collection,
  getDocs,
} from "firebase/firestore"
import { db } from "Lib/firebase"
import useAuth from "Hooks/useAuth"

export const UserContext = createContext({
  userData: Object,
  username: String,
  uid: String,
})

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)
  const [username, setUsername] = useState(null)
  const [uid, setUid] = useState(null)
  const { currentUser } = useAuth()

  useEffect(() => {
    const setData = async () => {
      if (!currentUser) return
      const querySnapshot = await getDocs(collection(db, "users"))
      querySnapshot.forEach((doc) => {
        if (currentUser.uid === doc.data().uid) {
          setUserData(doc.data())
          setUsername(doc.id)
          setUid(doc.data().uid)
        }
      })
    }

    setData()
  }, [currentUser])

  const value = {
    userData,
    username,
    uid,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContextProvider
