import React, { useState } from 'react'
import '../CSS/pageCSS/Authentication.css'
import authBG from '../assets/AuthBG.jpg'
import LoginBox from '../components/LoginBox';
import SignUpBox from '../components/SignUpBox';
// import festivaLogo from '../assets/FestivaLogo.png'
const Authentication = () => {
  const [buttonName, setButtonName] = useState("login");
  const handleClick = (item)=>{
    setButtonName(item)
  }
  return (
    <div className='main_auth_container'>
        <div className="auth_body">
            <img src={authBG} alt="" />
            <div className="auth_box">
                <div className="brand_logo">
                    <h2 className='text-4xl text-black'>Festiva</h2>
                    <p>🍽️🎶 “From tables for two to halls for thousands, Festiva makes every event unforgettable.”</p>
                </div>
                <div className={`auth_options ${buttonName === "login" ? "login_active" : "signup_active"}`}>
                  <div className="login auth_button" onClick={() => handleClick("login")}>
                    <h2>Login</h2>
                  </div>
                  <div className="signup auth_button" onClick={() => handleClick("signup")}>
                    <h2>Signup</h2>
                  </div>
                </div>
                {buttonName === "login" ? <LoginBox/> : <SignUpBox/>}
            </div>
        </div>
    </div>
  )
}

export default Authentication