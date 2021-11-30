import Header from "./Header"
import AuthContextProvider from "Context/AuthContext"
import UserContextProvider from "Context/UserContext"

const Layout = ({ children }) => {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <Header />
        <main className="main" role="main">
          {children}
        </main>
      </UserContextProvider>
    </AuthContextProvider>
  )
}

export default Layout
