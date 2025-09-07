import React from "react";
import '../CSS/componentsCSS/Login.css'
const LoginBox = () => {
  return (
    <div className="login_box_container">
      <div className="login_inputs">
        <input
            type="email"
            placeholder="Enter your email"
            className="login_input"
        />
        <input
            type="password"
            placeholder="Enter your password"
            className="login_input"
        />
      </div>
      <a href="#" className="forgot_password">Forgot Password?</a>
      <button className="Login_button_submit">Login</button>
      <h2>🚀 First time with us? Sign up and let’s create moments together.</h2>
    </div>
  );
};

export default LoginBox;
