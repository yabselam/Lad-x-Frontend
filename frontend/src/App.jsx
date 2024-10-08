// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ForgotPassword from "./components/Forgotpassword";
import ConfirmAccount from "./components/ConfirmAccount";
import NewPassword from "./components/NewPassword";
import LoginConfirmation from "./components/LoginConfirmation";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/confirm-account" element={<ConfirmAccount />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/login-confirmation" element={<LoginConfirmation />} />
        <Route path="/sign-up" element={<SignUp />} />
    
      </Routes>
    </Router>
  );
};

export default App;