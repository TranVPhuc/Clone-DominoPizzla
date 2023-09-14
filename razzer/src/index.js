import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Components/SignIn/Signin";
import Profile from "./Components/Profile/Profile";
import { AuthProvider } from "./AuthProvider";
ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        {/* <AuthProvider> */}
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
