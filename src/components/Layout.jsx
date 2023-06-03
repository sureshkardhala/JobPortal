import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Jobs from './Jobs'
import SocialLinks from './SocialLinks'
import Contact from './Contact'
import Job from './Job'

const Layout = () => {
  return (
    <div className="min-h-screen h-full">
        <Navbar />
        <Job />
        <Home />
        <Jobs />
        <SocialLinks />
        <Contact />
        
    </div>
  )
}

export default Layout