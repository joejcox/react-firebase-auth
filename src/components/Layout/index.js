import Header from "./Header"
import AuthContextProvider from "Context/AuthContext"

const Layout = ({ children }) => {
  return (
    <AuthContextProvider>
      <Header />
      <main className="main" role="main">
        {children}
      </main>
    </AuthContextProvider>
  )
}

export default Layout
