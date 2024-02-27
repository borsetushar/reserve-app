import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';


const PaymentCancel = () => {
  return (
    <div className="container mb-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body text-center">
            <FaTimesCircle style={{ fontSize: '4rem', color: 'red' }} />
              <h2 className="card-title mt-3">Payment Canceled</h2>
              <p className="card-text">Your payment has been canceled.</p>
              <p className="card-text">Please try again later.</p>
              <Link to="/" className="btn btn-primary">Go back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
