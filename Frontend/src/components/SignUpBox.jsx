import React from 'react'
import '../CSS/componentsCSS/signup.css'
const SignUpBox = () => {
  return (
    <div className="signUp_box_container">
      <div className="signUp_inputs">
        <input
            type="text"
            placeholder="Enter your user name"
            className="login_input"
        />
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
        <input
            type="number"
            placeholder="Enter your age"
            className="login_input"
        />
        <div className="otp_section">
          <input
              type="password"
              placeholder="Email passcode (e.g. 123456)"
              className="login_input"
          />
          <button>Get OTP</button>
        </div>
      </div>
      <button className="signUp_button_submit">Sign Up</button>
      <h2>🌟 Have an account already? Click log in to access your Festiva account</h2>
    </div>
  )
}

export default SignUpBox