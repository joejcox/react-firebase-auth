import { useState } from "react"
import { useForm, useFormState } from "react-hook-form"
import useAuth from "Hooks/useAuth"

const SignInForm = () => {
  const [firebaseError, setFirebaseError] = useState({
    code: null,
    message: null,
  })
  const [userError, setUserError] = useState(null)
  const { signIn } = useAuth()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((response) => console.log(response))
      .catch((error) => {
        setFirebaseError({
          code: error.code,
          message: error.message,
        })
      })
  }

  const { isSubmitting } = useFormState({ control })

  const FirebaseError = () => {
    if (!firebaseError.code) return
    if (firebaseError.code === "auth/wrong-password") {
      return "Incorrect password, please try again"
    } else if (firebaseError.code === "auth/user-not-found") {
      return "User does not exist, please try again"
    } else {
      return firebaseError.message
    }
  }

  return (
    <form
      className="signupForm"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      {firebaseError.code && (
        <p className="form-top-error has-text-danger">
          <FirebaseError />
        </p>
      )}
      <div className="field">
        <input
          type="text"
          className="input formInput"
          placeholder="Email"
          {...register("email", {
            required: {
              value: true,
              message: "Field can not be empty",
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email",
            },
          })}
        />
        {errors.email && (
          <span className="is-block has-text-danger is-size-7">
            {errors.email?.message}
          </span>
        )}
      </div>
      <div className="field">
        <input
          type="password"
          className="input formInput"
          placeholder="Password"
          {...register("password", {
            required: "Field can not be empty",
            minLength: {
              value: 6,
              message: "Must be longer than 6 characters",
            },
          })}
        />
        {errors.password && (
          <span className="is-block has-text-danger is-size-7">
            {errors.password?.message}
          </span>
        )}
      </div>
      <input
        type="submit"
        className="button is-info"
        value={isSubmitting ? "Signing In..." : "Sign In"}
        disabled={isSubmitting}
      />
    </form>
  )
}

export default SignInForm
