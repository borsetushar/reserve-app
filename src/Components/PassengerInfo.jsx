import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Paymentbutton from './Paymentbutton'
import { useDispatch } from 'react-redux';
import { TRAVEL_DETAILS } from '../State/Actions/Constants/travelDetais';
import { travelDetails } from '../State/Actions/travelDetails';

const PassengerInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (event)=>{
    event.preventDefault();
    const data = {
      name: event.target.elements.name.value,
      gender: event.target.elements.gender.value,
      age: event.target.elements.age.value,
      email: event.target.elements.email.value,
      mobile: event.target.elements.mobile.value
    };

    localStorage.setItem('formData', JSON.stringify(data));
    dispatch(travelDetails(data));
   // navigate('/success');

  }
  return (
    <div className="container">
    <div className="row my-3">
      <div className="col-md-8">
        <div className="bg-light p-4 border rounded">
          <div className="d-flex justify-content-between align-items-center">
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
  
    {/* Enter travel details */}
    <div className="row my-3">
  <div className="col-md-8">
    <h5>Enter travel details</h5>
    <div className="bg-light p-4 border rounded">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Name" name="name"/>
          </div>
          <div className="col">
            <select className="form-select" name="gender">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="col">
            <input type="number" className="form-control" placeholder="Age" name="age"/>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <input type="email" className="form-control" placeholder="Email Id" name="email"/>
          </div>
          <div className="col">
            <input type="tel" className="form-control" placeholder="Mobile No." name="mobile"/>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
           <button type="submit" className="btn btn-primary" >Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

  
    {/* Fare Details */}
    <div className="col-md-4 position-relative mt-5 mb-3" style={{ marginRight: '10px', marginTop:'300px'}}>
  <div className="bg-light p-3 border rounded">
    <h5>Fare Details</h5>
    <div className="row">
      <div className="col-6">
        <p>Base fare:</p>
      </div>
      <div className="col-6 text-end">
        <p className="fw-bold">&#x20B9;850</p>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <p>Tax:</p>
      </div>
      <div className="col-6 text-end">
        <p className="fw-bold">&#x20B9;150</p>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <p>Offer Applied:</p>
      </div>
      <div className="col-6 text-end">
        <p className="fw-bold">&#x20B9;50</p>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <p>Total price:</p>
      </div>
      <div className="col-6 text-end">
        <p className="fw-bold">&#x20B9;950</p>
      </div>
    </div><hr/>
   
    <Paymentbutton/>
    
  </div>
</div>



  </div>
  

  )
}

export default PassengerInfo