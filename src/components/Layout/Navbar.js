import { Link } from "react-router-dom"
import useAuth from "Hooks/useAuth"

const Navbar = () => {
  const { currentUser } = useAuth()

  return (
    <nav className="navbar-end" role="navigation">
      {currentUser ? (
        <Link className="button is-info" to="/account/dashboard">
          Go to dashboard
        </Link>
      ) : (
        <>
          <Link className="button is-info is-outline" to="/account/sign-in">
            Sign In
          </Link>
          <Link className="button is-info ml-space" to="/account/sign-up">
            Sign Up
          </Link>
        </>
      )}
    </nav>
  )
}

export default Navbar
