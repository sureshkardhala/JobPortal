import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Jobs from './Jobs'
import SocialLinks from './SocialLinks'

const Layout = () => {
  return (
    <div className="min-h-screen h-full text-gray-300 bg-gradient-to-b from-black via-black to-gray-900">
        <Navbar />
        <Home />
        <Jobs />
        <SocialLinks />
    </div>
  )
}

export default Layout