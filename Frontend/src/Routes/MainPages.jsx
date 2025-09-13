import React from 'react'
import Home from '../pages/Home'
import Host from '../pages/Host'
import Tickets from '../pages/Tickets'
import Profile from '../pages/Profile'
import About from '../pages/About'
import Notification from '../pages/Notification'
import Reviews from '../pages/Reviews'
import Contact from '../pages/Contact'
import NavBar from '../components/NavBar'
import {Outlet} from 'react-router-dom'
import "../App.css"
const MainPages = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default MainPages