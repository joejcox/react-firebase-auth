import { Navigate } from "react-router-dom";
import useAuth from "Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const user = useAuth();
  return user ? children : <Navigate to="/sign-up" />;
};

export default PrivateRoute;
