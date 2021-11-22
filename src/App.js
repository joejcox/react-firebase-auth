import { Routes, Route } from "react-router-dom"
import Layout from "Components/Layout"
import Home from "Containers/Home"
import FormPage from "Components/FormPage"
import SignUp from "Containers/SignUp"
import SignIn from "Containers/SignIn"
import Dashboard from "Containers/Dashboard"
import PrivateRoute from "Containers/PrivateRoute"
import { BrowserRouter as Router } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/account" element={<FormPage />}>
            <Route path="/account/sign-up" element={<SignUp />} />
            <Route path="/account/sign-in" element={<SignIn />} />
          </Route>
          <Route
            path="/account/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
