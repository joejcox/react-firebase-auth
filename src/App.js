import { useContext } from "react";
import { AuthContext } from "Context/AuthContext";
import SignUpForm from "Containers/SignUpForm";
import auth from "Lib/firebase";
import { signOut } from "firebase/auth";

const App = () => {
  const user = useContext(AuthContext);

  return (
    <div className="wrapper">
      <h1 className="title is-1">
        Hello {user ? console.log(user.displayName) : "World"}
      </h1>
      <SignUpForm />
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
};

export default App;
