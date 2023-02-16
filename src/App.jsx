import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";
import Login from "./components/Login";
import Home from "./container/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { fetchUser } from "./utils/fetchUser";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();
    if (!user) navigate("/login");
  });
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_GOOGLE_API_TOKEN}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
