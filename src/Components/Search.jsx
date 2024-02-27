import React, { useEffect, useState } from 'react'
import Bus from './assets/Busstop.jpg'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

const Search = () => {
  const [districts, setDistricts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    axios.get('https://reserve-backend-gvu2.onrender.com/api/districts')
      .then(response => {
        // Check if response data contains districts array
        if (Array.isArray(response.data.districts) && response.data.districts.length > 0) {
          // Extract the districts array from the response data
          const districtsArray = response.data.districts.flatMap(item => item.districts);
          // If the request is successful, set the districts state
          setDistricts(districtsArray);
        } else {
          console.error('Response data does not contain districts array:', response.data);
        }
      })
      .catch(error => {
        // If there's an error, log it to the console
        console.error('Error fetching districts:', error);
      });
  }, []);
  

  return (
    <div className="bg-image" style={{backgroundImage: `url(${Bus})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-8">
            <div className="p-5 bg-white shadow rounded">
              <div className="row mb-4">
                <div className="col">
                  <select className="form-select w-100" aria-label="From">
                    <option selected>From</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>{district}</option>
                    ))}
                    {/* Add options for 'From' dropdown */}
                  </select>
                </div>
                <div className="col">
                  <select className="form-select w-100" aria-label="To">
                    <option selected>To</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>{district}</option>
                    ))}
                    {/* Add options for 'To' dropdown */}
                  </select>
                </div>
                <div className="col">
                  <input type="date" className="form-control" placeholder="Date" />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col text-center">
                <NavLink to="/busselection">
                  <button type="button" className="btn btn-danger" style={{ width: '130px' }}>
                    <b>Search</b>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Search