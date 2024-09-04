// import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Components/Login";
import Register from "./Components/Registration";
import ForgotPassword from "./Components/Forgotpassword";
import ResetPassword from "./Components/Resetpassword";
import ShortUrlRedirect from "./Components/ShortUrlRedirect";
import Toggle from "./Components/Toggle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Redirect root URL to registration page */}
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/:urlCode" element={<ShortUrlRedirect />} />
        <Route path="/short-url-redirect" element={<Homepage />} />
      </Routes>
      <Toggle />
    </div>
  );
}

export default App;
