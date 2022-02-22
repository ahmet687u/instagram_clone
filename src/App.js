import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./components/app/Home";
import Login from "./components/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "./redux/actions/loginAction";
import "./styles/main.css";
import { Register } from "./components/auth/Register";

const RequireAuthHome = ({ children }) => {
  let location = useLocation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const authUser = useSelector((state) => state.loginReducer);

  useEffect(() => {
    setLoading(false);
    localStorage.getItem("user") &&
      dispatch(loginSuccess(JSON.parse(localStorage.getItem("user"))));
  }, []);

  if (loading) {
    return <>Loading ...</>;
  }

  if (!authUser) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  return children;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuthHome>
              <Home />
            </RequireAuthHome>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
