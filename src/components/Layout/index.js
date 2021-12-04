import Header from "./Header"
import AuthContextProvider from "Context/AuthContext"
import UserContextProvider from "Context/UserContext"

const Layout = ({ children }) => {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <div className="wrapper">
          <Header />
          <main className="main" role="main">
            {children}
          </main>
        </div>
      </UserContextProvider>
    </AuthContextProvider>
  )
}

export default Layout
