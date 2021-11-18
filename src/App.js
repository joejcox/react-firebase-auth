import { Routes, Route } from "react-router-dom";
import Home from "Containers/Home";
import SignUp from "Containers/SignUp";
import Dashboard from "Containers/Dashboard";
import PrivateRoute from "Containers/PrivateRoute";
import AuthContextProvider from "Context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
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
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
