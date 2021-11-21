const SignInForm = ({ submit }) => {
  return (
    <form onSubmit={submit}>
      <div className="field">
        <input type="text" className="input" placeholder="email" />
      </div>
      <div className="field">
        <input type="password" className="input" placeholder="password" />
      </div>
      <input type="submit" className="submit" value="Sign In" />
    </form>
  )
}

export default SignInForm
