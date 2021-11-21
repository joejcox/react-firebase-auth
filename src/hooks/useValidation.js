import { useState } from "react"

const useValidation = (rules) => {
  const [data, setData] = useState(rules?.initialValue || {})

  /*

    options will be the paramaters we pass through to the hook. It might look something like this:

    const { handleSubmit, handleChange } = useValidation({
      email: {
        pattern: {
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
      },
      password: {
        required: {
          value: true,
          message: 'This field is required',
        },
        custom: {
          isValid: (value) => value.length > 6,
          message: 'The password needs to be at least 6 characters',
        },
      },
      passwordDuplicate: {
        required: {
          value: true,
          message: 'This field is required',
        },
        custom: {
          isValid: (value) => value === this.password?.required?.value
        }
      }                                           
      initialValue: { // we could actually just leave this out and then in the inputs put value={data.value || ''}
        email: "",
        password: "",
        passwordDuplicate: ""
      }
    })

  */

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordDuplicate: "",
  })

  const [errors, setErrors] = useState({
    email: {
      isBlank: null,
      isInvalid: null,
    },
    password: {
      matches: null,
      isBlank,
      isInvalid: null,
    },
    passwordDuplicate: {
      matches: null,
      isBlank: null,
      isInvalid: null,
    },
  })

  const checkIsBlank = (email, password, passwordDuplicate) => {
    if ((email && password && passwordDuplicate) !== blank) return
    let newErrors = errors

    if (email === "") newErrors.email.isBlank = true
    if (password === "") newErrors.password.isBlank = true
    if (passwordDuplicate === "") newErrors.passwordDuplicate.isBlank = true

    return setErrors({ ...newErrors })
  }

  const checkIsEmail = (email) => {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regexp.test(String(email).toLowerCase())
  }

  const checkPasswordsMatch = (password, passwordDuplicate) => {
    return password === passwordDuplicate
  }

  const checkPasswordValid = (password) => {
    return password.length >= 6
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (email, password, passwordDuplicate) => {
    e.preventDefault()
  }

  return {
    errors,
    formData,
    checkIsBlank,
    checkIsEmail,
    checkPasswordValid,
    checkPasswordsMatch,
    handleChange,
    handleSubmit,
  }
}

export default useValidation
