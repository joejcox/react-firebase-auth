import { useState, createContext } from "react";
import auth from "Lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import SignUpForm from "Components/SignUpForm";
import useAuth from "Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const user = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const { email, password, displayName } = formData;

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(response.user, {
        displayName: displayName,
        photoURL: "",
      });

      return navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error);
    }

    return setFormData({ displayName: "", email: "", password: "" });
  };

  if (errorMessage) {
    console.log(errorMessage);
    return <h1>Error...please check the console</h1>;
  }

  return (
    <>
      <h1 className="title is-1">Welcome! Sign up below</h1>
      <SignUpForm
        formData={formData}
        setFormData={setFormData}
        submit={handleSignUp}
      />
    </>
  );
};

export default SignUp;
