import React, { useState } from 'react'
import '../CSS/componentsCSS/signup.css'
import { userSignUp, verifyOtp } from '../BackendData'
import { toast } from 'react-toastify'
import {useNavigate} from "react-router-dom"
const SignUpBox = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")
  const [otp, setOtp] = useState('')
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const user = await verifyOtp(otp)
      toast.success("Account created successfully")
      console.log(user)
      setUsername("")
      setAge("")
      setEmail("")
      setOtp("")
      navigate("/")
      
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleOtp = async (e)=>{
    e.preventDefault()
    try {
      const user = await userSignUp(username,email,password,age)
      toast.success("OTP sent to your email successfully")
      console.log(user)
    } catch (error) {
      toast.error(error.message)
    }
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
          <button onClick={handleOtp}>Get OTP</button>
        </div>
      </div>
      <button className="signUp_button_submit" onClick={handleSubmit}>Sign Up</button>
      <h2>🌟 Have an account already? Click log in to access your Festiva account</h2>
    </div>
  )
}

export default SignUpBox