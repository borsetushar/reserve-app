import React from 'react'
import MyNavbar from '../Navbar'
import Search from '../Search'
import Testimonials from '../Testimonials'
import Footer from '../Footer'

const Home = () => {
  return (
    <div>
        <MyNavbar/>
        <Search/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home