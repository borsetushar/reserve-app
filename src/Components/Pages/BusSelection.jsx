import React from 'react'
import Sidebar from '../Sidebar'
import AvailableBus from '../AvailableBus'
import MyNavbar from '../Navbar'
import Footer from '../Footer'

const BusSelection = () => {
  return (
    <div className="container-fluid">
      <MyNavbar/>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <AvailableBus />
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default BusSelection