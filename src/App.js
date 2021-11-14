import { Routes, Route } from "react-router-dom";
import Home from "Containers/Home";
import SignUp from "Containers/SignUp";
import Dashboard from "Containers/Dashboard";
import PrivateRoute from "Containers/PrivateRoute";

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
