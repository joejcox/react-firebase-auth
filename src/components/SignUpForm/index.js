import { useForm } from "react-hook-form"
// import { ErrorMessage } from "@hookform/error-message"
import useAuth from "Hooks/useAuth"

const SignUpForm = () => {
  const { signUp } = useAuth()
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => signUp(data.email, data.password)

  return (
    <form
      className="signupForm"
      onSubmit={(e) => e.preventDefault()}
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
        {errors.email && (
          <span className="is-block has-text-danger is-size-7">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="field">
        <input
          type="password"
          className="input formInput"
          name="password"
          placeholder="Password"
          {...register("password", {
            required: "You must specify a password",
            minLength: {
              value: 6,
              message: "Password must have at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <span className="is-block has-text-danger is-size-7">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="field">
        <input
          type="password"
          name="passwordDuplicate"
          className="input formInput"
          placeholder="Repeat password"
          {...register("passwordDuplicate", {
            required: "You must confirm your password",
            minLength: {
              value: 6,
              message: "Password must have at least 6 characters",
            },
            validate: (value) =>
              value === getValues("password") || "The passwords do not match",
          })}
        />
        {errors.passwordDuplicate && (
          <span className="is-block has-text-danger is-size-7">
            {errors.passwordDuplicate.message}
          </span>
        )}
      </div>
      <input
        type="submit"
        className="button is-info"
        value="Sign Up"
        onClick={handleSubmit(onSubmit)}
      />
    </form>
  )
}

export default SignUpForm
