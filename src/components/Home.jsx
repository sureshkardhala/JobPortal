import React from 'react'

const Home = () => {
  return (
    <div 
    name="home"
    className="w-full min-h-screen max-h-fit ">
      <div className="w-full px-4 md:w-2/3 flex flex-wrap m-auto  justify-between py-16">
        <div className="w-full md:w-96 h-40  shadow-pink-400 shadow-md py-16 text-center mt-20 rounded-md duration-300 cursor-pointer hover:scale-x-105 ">
          <p>Latest Jobs</p>
        </div>
        <div className="w-96 h-40 shadow-green-400 shadow-md py-16 text-center mt-20 rounded-md duration-300 cursor-pointer hover:scale-x-105">
          <p>Tech blogs</p>
        </div>
        <div className="w-96 h-40  shadow-orange-400 shadow-md py-16 text-center mt-20 rounded-md duration-300 cursor-pointer hover:scale-x-105">
          <p>About US</p>
        </div>
        <div className="w-96 h-40  shadow-purple-400 shadow-md py-16 text-center mt-20 rounded-md duration-300 cursor-pointer hover:scale-x-105">
          <p>Contact Us</p>
        </div>
      </div>
      
    </div>
  )
}

export default Home