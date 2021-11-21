import { useState, useEffect } from "react"
import SignUpForm from "Components/SignUpForm"
import useAuth from "Hooks/useAuth"
import { useNavigate } from "react-router-dom"
import styles from "./styles.module.css"

const SignUp = () => {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const { currentUser, signUp } = useAuth()
  const [errorMessage, setErrorMessage] = useState("")
  const [errors, setErrors] = useState({
    email: {
      blank: null,
      invalid: null,
    },
    password: {
      blank: null,
      match: null,
      invalid: null,
    },
  })
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordDuplicate: "",
  })
  const { email, password, passwordDuplicate } = formData

  useEffect(() => {
    if (submitting) return false

    if (currentUser) {
      navigate("/account/dashboard")
    }
  })

  const checkIsBlank = (input, input2) => {
    // check if the passed input is blank and return true or false
    if (input2) {
      return input.length <= 0 && input2.length <= 0
    }
    return input.length <= 0
  }

  const checkIsEmail = (email) => {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regexp.test(String(email).toLowerCase())
  }

  const checkPasswordsMatch = (password, passwordDuplicate) => {
    return password === passwordDuplicate
  }

  const checkPasswordsValid = (password) => {
    return password.length >= 6
  }

  const handleSignUp = (e) => {
    e.preventDefault()

    setSubmitting(true)

    const isEmailBlank = checkIsBlank(email)
    const emailExists = checkIsEmail(email)
    const isPasswordBlank = checkIsBlank(password, passwordDuplicate)
    const passwordsMatch = checkPasswordsMatch(password, passwordDuplicate)
    const passwordsValid = checkPasswordsValid(password)

    setErrors({
      email: {
        blank: isEmailBlank && "Email must not be blank",
        invalid: !emailExists && "Invalid email",
      },
      password: {
        blank: isPasswordBlank && "Password fields must not be blank",
        match: !passwordsMatch && "Passwords do not match",
        invalid:
          !passwordsValid && "Password must contain 6 or more characters",
      },
    })

    if (!passwordsMatch) {
      return setSubmitting(false)
    }

    signUp(email, password)
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <div className="form">
      <h1 className="title is-1">Sign up</h1>
      <SignUpForm
        formData={formData}
        setFormData={setFormData}
        submit={handleSignUp}
        submitting={submitting}
        errors={errors}
      />
    </div>
  )
}

export default SignUp
