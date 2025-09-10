import React, { useState } from 'react'
import '../CSS/componentsCSS/signup.css'
const SignUpBox = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")
  const [otp, setOtp] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("form is submitted")
    console.log(username,email,password,age)
  }

  const handleOtp = (e)=>{
    e.preventDefault()
    console.log("User is trying to get the otp")
  }

  return (
    <div className="signUp_box_container">
      <div className="signUp_inputs">
        <input
            type="text"
            placeholder="Enter your user name"
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
            className="login_input"
        />
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
        <input
            type="number"
            placeholder="Enter your age"
            onChange={(e)=>setAge(e.target.value)}
            value={age}
            className="login_input"
        />
        <div className="otp_section">
          <input
              type="password"
              placeholder="Email passcode (e.g. 123456)"
              onChange={(e)=>setOtp(e.target.value)}
              value={otp}
              className="login_input"
          />
          <button onSubmit={handleOtp}>Get OTP</button>
        </div>
      </div>
      <button className="signUp_button_submit" onSubmit={handleSubmit}>Sign Up</button>
      <h2>🌟 Have an account already? Click log in to access your Festiva account</h2>
    </div>
  )
}

export default SignUpBox