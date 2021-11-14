const SignUpForm = ({ formData, setFormData, submit }) => {
  const { displayName, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section">
      <form onSubmit={submit}>
        <div className="field">
          <input
            className="input"
            type="text"
            name="displayName"
            onChange={handleChange}
            value={displayName}
            placeholder="Username"
            required
          />
        </div>
        <div className="field">
          <input
            className="input"
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
            required
          />
        </div>
        <div className="field">
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
            required
          />
        </div>
        <input type="submit" value="Sign Up" className="button is-info" />
      </form>
    </section>
  );
};

export default SignUpForm;
