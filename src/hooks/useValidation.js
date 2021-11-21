import { useState } from "react"

const useValidation = () => {
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

  setErrors({
    email: {
      blank: isEmailBlank && "Email must not be blank",
      invalid: !emailExists && "Invalid email",
    },
    password: {
      blank: isPasswordBlank && "Password fields must not be blank",
      match: !passwordsMatch && "Passwords do not match",
      invalid: !passwordsValid && "Password must contain 6 or more characters",
    },
  })

  return {
    errors,
    checkIsBlank,
    checkIsEmail,
    checkPasswordsValid,
    checkPasswordsMatch,
  }
}

export default useValidation
