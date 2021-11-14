import { useState } from "react";
import auth from "Lib/firebase";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const { displayName, email, password } = formData;

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) =>
        updateProfile(res.user, {
          displayName: displayName,
        })
      )
      .catch((err) => {
        console.log("Error :(");
      });

    setFormData({ displayName: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section">
      <form onSubmit={handleSignUp}>
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
