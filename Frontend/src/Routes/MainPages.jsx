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
const MainPages = () => {
  return (
    <div>
        <NavBar/>
      <div className="section home_section">
        <Home/>
      </div>
      <div className="section host_section">
        <Host/>
      </div>
      <div className="section ticket_section">
        <Tickets/>
      </div>
      <div className="section profile_section">
        <Profile/>
      </div>
      <div className="section about_section">
        <About/>
      </div>
      <div className="section notification_section">
        <Notification/>
      </div>
      <div className="section reviews_section">
        <Reviews/>
      </div>
      <div className="section contact_section">
        <Contact/>
      </div>
    </div>
  )
}

export default MainPages