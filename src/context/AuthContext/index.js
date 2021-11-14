import { useEffect, useState, createContext } from "react";
import auth from "Lib/firebase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (data) => setUserData(data));
  }, []);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
