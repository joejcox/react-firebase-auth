import useAuth from "Hooks/useAuth";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();

  return (
    <>
      <h1 className="title is-1">Welcome back {currentUser.email}</h1>
      <button className="button is-primary is-large" onClick={() => logout()}>
        Sign Out
      </button>
    </>
  );
};

export default Dashboard;
