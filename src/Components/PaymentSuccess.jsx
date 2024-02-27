import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import MyNavbar from './Navbar';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const storedFormData = localStorage.getItem('formData');
const initialFormData = storedFormData ? JSON.parse(storedFormData) : {};

const PaymentSuccess = () => {
  const formData = useSelector(state => state.travelDetails.formData) || initialFormData;

  const tickedId = uuidv4();
  const passengerId = uuidv4();

  return (
    <div className="container mb-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body text-center">
              <FaCheckCircle style={{ fontSize: '4rem', color: 'green' }} />
              <h2 className="card-title mt-3">Booking Confirmed</h2>
              <p className="card-text">Ticket ID : {tickedId}</p>
              <p className="card-text">Passenger ID : {passengerId} </p>
              <p className="card-text">Passenger Details : {formData.name} </p>
              <p className="card-text">Contact Details : {formData.mobile}</p>
              {/* Add additional component here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
