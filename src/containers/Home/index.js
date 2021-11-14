import useAuth from "Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const user = useAuth();

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
