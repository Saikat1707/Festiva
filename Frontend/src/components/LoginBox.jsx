import React, { useState } from "react";
import '../CSS/componentsCSS/Login.css'
import { userSignIn } from "../BackendData";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
const LoginBox = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const user = await userSignIn(email, password);
      setEmail("");
      setPassword("");
      toast.success("Login successful!");
      console.log("Logged in user:", user);
      navigate("/")
    } catch (error) {
      toast.error(error.message); 
      console.error("Login error:", error);
    }
  };


  return (
    <div className="login_box_container">
      <div className="login_inputs">
        <input
            type="email"
            placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            className="login_input"
        />
        <input
            type="password"
            placeholder="Enter your password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            className="login_input"
        />
      </div>
      <a href="#" className="forgot_password">Forgot Password?</a>
      <button className="Login_button_submit" onClick={handleSubmit}>Login</button>
      <h2>🚀 First time with us? Sign up and let’s create moments together.</h2>
    </div>
  );
};

export default LoginBox;
