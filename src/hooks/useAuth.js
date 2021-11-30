import { useContext } from "react"
import { AuthContext } from "Context/AuthContext"

// Hook to get the user
const useAuth = () => {
  const user = useContext(AuthContext)
  return user ? user : null
}

export default useAuth
