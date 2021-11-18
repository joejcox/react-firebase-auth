import useAuth from "Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    currentUser && navigate("/dashboard");
  }, [currentUser]);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
