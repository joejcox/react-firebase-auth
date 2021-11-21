import styles from "./styles.module.css"

const SignUpForm = ({ formData, setFormData, submit, submitting, errors }) => {
  const { email, password, passwordDuplicate } = formData

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form className={styles.signupForm} onSubmit={submit}>
      <div className="field">
        <input
          className={`input ${styles.formInput}`}
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
        />
        <div className="errors">
          {errors.email.invalid && (
            <span className="is-block has-text-danger is-size-7">
              {errors.email.invalid}
            </span>
          )}
          {errors.email.blank && (
            <span className="is-block has-text-danger is-size-7">
              {errors.email.blank}
            </span>
          )}
        </div>
      </div>
      <div className="field">
        <input
          className={`input ${styles.formInput}`}
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />
      </div>
      <div className="field">
        <input
          className={`input ${styles.formInput}`}
          type="password"
          name="passwordDuplicate"
          placeholder="Re-type password"
          onChange={handleChange}
          value={passwordDuplicate}
        />
        <div className="errors">
          {errors.password.blank && (
            <span className="is-block has-text-danger is-size-7">
              {errors.password.blank}
            </span>
          )}
          {errors.password.match && (
            <span className="is-block has-text-danger is-size-7">
              {errors.password.match}
            </span>
          )}
          {errors.password.invalid && (
            <span className="is-block has-text-danger is-size-7">
              {errors.password.invalid}
            </span>
          )}
        </div>
      </div>
      {submitting ? (
        <input
          type="submit"
          value="Signing in..."
          className="button is-info"
          disabled
        />
      ) : (
        <input type="submit" value="Sign Up" className="button is-info" />
      )}
    </form>
  )
}

export default SignUpForm
