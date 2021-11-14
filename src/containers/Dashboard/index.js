import auth from "Lib/firebase";
import useAuth from "Hooks/useAuth";
import { signOut } from "firebase/auth";

const Dashboard = () => {
  const user = useAuth();

  return (
    <>
      <h1 className="title is-1">Welcome back {user?.displayName}</h1>
      <button
        className="button is-primary is-large"
        onClick={() => signOut(auth)}>
        Sign Out
      </button>
    </>
  );
};

export default Dashboard;
