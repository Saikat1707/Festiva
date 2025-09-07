import React from 'react'
import '../CSS/componentsCSS/Auth_top_bar.css'
import FestivaLogo from '../assets/FestivaLogo.png'

const AuthenticationTopBar = () => {
  return (
    <div className='auth_top_bar'>
        <div className="brand_name">
            <img src={FestivaLogo} alt="Festiva Logo" />
            <h2 className='text-2xl'>Festiva</h2>
        </div>
        <div className="auth_buttons">
            <button>
                <span>Login</span>
            </button>
            <button>
                <span>Register</span>
            </button>
        </div>
    </div>
  )
}

export default AuthenticationTopBar