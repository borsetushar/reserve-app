import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 mb-4"> {/* Add mb-4 to create space between this column and the next */}
        <h5>RESERVE</h5>
        <p>When you have a choice, choose Reserve.</p>
        <p>Reserve offers bus ticket booking through its website, iOS, and Android mobile apps for all major cities.</p>
        <a href="#" className="text-light">Read more</a>
      </div>
      <div className="col-lg-1"></div> {/* Add an empty column to create space */}
      <div className="col-lg-8">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">About Us</a></li>
              <li><a href="#" className="text-light">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Career</a></li>
              <li><a href="#" className="text-light">FAQ</a></li>
              <li><a href="#" className="text-light">Terms & Conditions</a></li>
              <li><a href="#" className="text-light">Privacy Policy</a></li>
              <li><a href="#" className="text-light">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#"><FaFacebookSquare size={30}/></a></li>
              <li className="list-inline-item"><a href="#"><FaSquareInstagram size={30}/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="mt-4 mb-3"/>
    <div className="text-center">
      <p>All rights reserved 2024</p>
    </div>
  </div>
</footer>




  )
}

export default Footer