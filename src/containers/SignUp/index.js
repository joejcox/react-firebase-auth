import { useEffect } from "react"
import SignUpForm from "Components/SignUpForm"
import useAuth from "Hooks/useAuth"
import { useNavigate, Link } from "react-router-dom"

const SignUp = () => {
  const navigate = useNavigate()
  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser) {
      navigate("/account/dashboard")
    }
  })

  return (
    <div className="form">
      <h1 className="title is-1">Sign up</h1>
      <span className="form-helper">
        <Link to="/account/sign-in">Already have an account?</Link>
      </span>
      <SignUpForm />
    </div>
  )
}

export default SignUp
