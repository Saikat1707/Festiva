import React, { useState } from "react";
import '../CSS/componentsCSS/Login.css'
const LoginBox = () => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(email,password)
  }

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
      <button className="Login_button_submit" onSubmit={handleSubmit}>Login</button>
      <h2>🚀 First time with us? Sign up and let’s create moments together.</h2>
    </div>
  );
};

export default LoginBox;
