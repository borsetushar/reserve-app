import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Selectseats from './Selectseats';
import axios from 'axios';


const AvailableBus = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedContainerIndex, setSelectedContainerIndex] = useState(null);
  const [showSeats, setShowSeats] = useState(Array(6).fill(false));
  const [busData, setBusData] = useState([]);

  useEffect(() => {
    // Fetch data from backend API
    axios.get('https://reserve-backend-gvu2.onrender.com/api/past-trips/')
      .then(response => {
        const pastTrips = response.data.pastTrips; // Assuming pastTrips is the object containing arrays
        // Extract the array from the object
        const busDataArray = Object.values(pastTrips); // Get the array from the object
        // Flatten the array if needed
        const flattenedBusData = busDataArray.flat(); // If pastTrips is an object containing arrays, flatten it
        setBusData(flattenedBusData);
      })
      .catch(error => {
        console.error('Error fetching bus data:', error);
      });
  }, []);

  const handleViewSeatsClick = (containerIndex) => {
    const updatedShowSeats = [...showSeats];
    updatedShowSeats[containerIndex] = !updatedShowSeats[containerIndex];
    setShowSeats(updatedShowSeats);
    setSelectedContainerIndex(containerIndex);
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            className="form-control"
          />
          <br />
          <label>Date</label>
        </div>
      </div>
      {busData.map((bus, index) => (
        <div key={index} className="row my-3">
          <div className="col">
            <div className="bg-light p-3 border rounded">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="m-0">{bus.busName}</h5>
                  <p className="m-0">From: {bus.from}</p>
                  <p className="m-0">To: {bus.to}</p>
                </div>
                <div>
                  <p className="m-0">Trip Cost:<br /> Starting from<br /><span><h4>&#8377;{bus.busFare}</h4></span> </p>
                  <button className="btn btn-danger" onClick={() => handleViewSeatsClick(index)}>
                    {selectedContainerIndex === index && showSeats[index] ? 'Hide Seats' : 'View Seats'}
                  </button>
                </div>
              </div>
              <p className="m-0">Category: {bus.category}</p>
              <p className="m-0">Start Time: {new Date(bus.startTime).toLocaleString()}</p>
              <p className="m-0">End Time: {new Date(bus.endTime).toLocaleString()}</p>
              <div className="d-flex">
                <div className="me-3 pt-2">
                <NavLink className="m-0 text-primary" href='#'>{bus.amenities_list.join('  |  ')}</NavLink>
                </div>
              </div>
              {selectedContainerIndex === index && showSeats[index] && (
                <div className="mt-3">
                  <Selectseats />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
    
  

export default AvailableBus