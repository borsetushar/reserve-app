import React from 'react'
import {Navbar, Nav, NavDropdown, Button, NavLink} from 'react-bootstrap'

const MyNavbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
  <div className="container-fluid">
    <NavLink className="navbar-brand mx-2" href="/" style={{color:'red', fontWeight: 'bold'}}><h2>RESERVE</h2></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" href="#"><h6>Ticket</h6></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href="#"><h6>Contact Us</h6></NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-danger me-2"  style={{width:'130px'}} type="button">Log In</button>
        <button className="btn btn-outline-danger" style={{width:'130px'}} type="button">Register</button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default MyNavbar