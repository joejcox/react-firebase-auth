import useAuth from "Hooks/useAuth"
import { Link } from "react-router-dom"

const Home = () => {
  const { currentUser } = useAuth()

  const AuthButton = () =>
    currentUser ? (
      <Link className="button is-info" to="/account/dashboard">
        Go to dashboard
      </Link>
    ) : (
      <>
        <Link className="button is-info" to="/account/sign-up">
          Sign Up
        </Link>
        <Link className="button is-info is-outline" to="/account/sign-in">
          Sign In
        </Link>
      </>
    )

  return (
    <div className="section">
      <div className="container">
        <h1>Home</h1>
        <section className="section">
          <AuthButton />
        </section>
      </div>
    </div>
  )
}

export default Home
