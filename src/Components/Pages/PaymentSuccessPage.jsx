import React from 'react'
import MyNavbar from '../Navbar'
import PaymentSuccess from '../PaymentSuccess'
import Footer from '../Footer'

const PaymentSuccessPage = () => {
  return (
    <div>
        <MyNavbar/>
        <PaymentSuccess/>
        <div className="row my-3 justify-content-center">
      <div className="col-md-8">
        <div className="bg-light p-4 border rounded">
          <div className="d-flex justify-content-between align-items-center p-2">
            <div>
              <h5 className="m-0">Intercity Smart Bus</h5>
              <p className="m-0">Rating: 4.5</p>
            </div>
          </div>
          <p className="m-0">AC Sleeper | 4 seats left | 0 windows left</p>
          <h4 className="m-0">22:45, 16 Nov - 07 hrs 59min - 06:20, 17 Nov</h4>
          <div className="d-flex">
            <div className="me-3">
              <h6 className="m-0 text-primary" href='#'>Live Tracking | Policies | Photos | Preview</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
        <Footer/>
    </div>
  )
}

export default PaymentSuccessPage