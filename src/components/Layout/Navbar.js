import { Link } from "react-router-dom"
import useAuth from "Hooks/useAuth"
import useFirestore from "Hooks/useFirestore"

const Navbar = () => {
  const { currentUser, logout } = useAuth()
  const { username } = useFirestore()

  return (
    <nav className="navbar-end" role="navigation">
      {currentUser ? (
        <>
          <Link className="button is-info is-outline" to="/dashboard">
            Go to dashboard
          </Link>
          <Link className="button is-info ml-space" to={`user/${username}`}>
            View Profile
          </Link>
          <button className="button is-info ml-space" onClick={() => logout()}>
            Sign Out
          </button>
        </>
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
