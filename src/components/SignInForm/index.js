import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import useAuth from "Hooks/useAuth"

const SignInForm = () => {
  const { signIn } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => signIn(data.email, data.password)

  return (
    <form
      className="signupForm"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
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
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => (
            <span className="is-block has-text-danger is-size-7">
              {message}
            </span>
          )}
        />
      </div>
      <div className="field">
        <input
          type="password"
          className="input formInput"
          placeholder="Password"
          {...register("password", {
            required: {
              value: true,
              message: "Field can not be empty",
            },
            minLength: {
              value: 6,
              message: "Must be longer than 6 characters",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => (
            <span className="is-block has-text-danger is-size-7">
              {message}
            </span>
          )}
        />
      </div>
      <input type="submit" className="button is-info" value="Sign In" />
    </form>
  )
}

export default SignInForm
