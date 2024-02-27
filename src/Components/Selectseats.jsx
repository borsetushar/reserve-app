import React, { useState } from 'react'
import { NavLink } from 'react-bootstrap';

const Selectseats = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seatNumber) => {
      if (selectedSeats.includes(seatNumber)) {
        setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
      } else {
        setSelectedSeats([...selectedSeats, seatNumber]);
      }
    };

  return (
    <div className="container bg-light w-auto p-3 ">
      <div className="row ">
      
        <div className="col border rounded mt-4" >
        <h4>Select Your Seat</h4>
          <div className="row">
          <div className="col-6 col-sm-3 col-md-2 mb-3">
              <NavLink className={`seat ${selectedSeats.includes(1) ? 'bg-secondary text-white' : 'bg-light'}`} style={{ border: '1px solid #00000040', padding: '8px', width:'60px', height:'30px', borderRadius:'8px' }} onClick={() => handleSeatClick(1)}>
              <div style={{width:'9px', height:'16px', backgroundColor:'gray', borderRadius:'25px'}}></div>
              </NavLink>
          </div>
          <div className="col-6 col-sm-3 col-md-2 mb-3">
            <NavLink className={`seat ${selectedSeats.includes(2) ? 'bg-secondary text-white' : 'bg-light'}`} style={{ border: '1px solid #00000040', padding: '8px', width:'60px', height:'30px', borderRadius:'8px' }} onClick={() => handleSeatClick(2)}>
              <div style={{width:'9px', height:'16px', backgroundColor:'gray',borderRadius:'25px'}}></div>
            </NavLink>
          </div>
          <div className="col-2 mb-3">
            <NavLink className={`col seat ${selectedSeats.includes( 3) ? 'bg-secondary text-white' : 'bg-light'}`} style={{ border: '1px solid #00000040', padding: '8px', width:'60px', height:'30px', borderRadius:'8px' }} onClick={() => handleSeatClick(3)}>
              <div style={{width:'9px', height:'16px', backgroundColor:'gray', borderRadius:'25px'}}></div>
            </NavLink>
          </div>
          <div className="col-2 mb-3">
            <NavLink className={`col seat ${selectedSeats.includes( 4) ? 'bg-secondary text-white' : 'bg-light'}`} style={{ border: '1px solid #00000040', padding: '8px', width:'60px', height:'30px', borderRadius:'8px' }} onClick={() => handleSeatClick(4)}>
              <div style={{width:'9px', height:'16px', backgroundColor:'gray', borderRadius:'25px'}}></div>
            </NavLink>
          </div>
          <div className="col-2 mb-3">
            <NavLink className={`col seat ${selectedSeats.includes( 5) ? 'bg-secondary text-white' : 'bg-light'}`} style={{ border: '1px solid #00000040', padding: '8px', width:'60px', height:'30px', borderRadius:'8px' }} onClick={() => handleSeatClick(5)}>
              <div style={{width:'9px', height:'16px', backgroundColor:'gray', borderRadius:'25px'}}></div>
            </NavLink>
          </div>
      </div>
      <div className="row">
        <div className="col-2 mb-4">
          <NavLink className={`col seat ${selectedSeats.includes( 6) ? 'bg-secondary text-white' : 'bg-light'}`} style={{ border: '1px solid #00000040', padding: '8px', width:'60px', height:'30px', borderRadius:'8px' }} onClick={() => handleSeatClick(6)}>
            <div style={{width:'9px', height:'16px', backgroundColor:'gray', borderRadius:'25px'}}></div>
          </NavLink>
        </div>
        <div className="col-2 mb-3">
          <NavLink className={`col seat ${selectedSeats.includes( 7) ? 'bg-secondary text-white' : 'bg-light'}`}style={{ border: '1px solid #00000040', padding: '8px', width:'60px', height:'30px', borderRadius:'8px' }} onClick={() => handleSeatClick(7)}>
            <div style={{width:'9px', height:'16px', backgroundColor:'gray', borderRadius:'25px'}}></div>
          </NavLink>
        </div>
        <div className="col-2 mb-3">
          <NavLink className={`col seat ${selectedSeats.includes( 8) ? 'bg-secondary text-white' : 'bg-light'}`} style={{ border: '1px solid #00000040', padding: '8px',  width:'60px', height:'30px', borderRadius:'8px' }} onClick={() => handleSeatClick(8)}>
            <div style={{width:'9px', height:'16px', backgroundColor:'gray', borderRadius:'25px'}}></div>
          </NavLink>
        </div>
        <div className="col-2 mb-3">
          <NavLink className={`col seat ${selectedSeats.includes( 9) ? 'bg-secondary text-white' : 'bg-light'}`} style={{ border: '1px solid #00000040', padding: '8px', width:'60px', height:'30px', borderRadius:'8px' }} onClick={() => handleSeatClick(9)}>
            <div style={{width:'9px', height:'16px', backgroundColor:'gray', borderRadius:'25px'}}></div>
          </NavLink>
        </div>
        <div className="col-2 mb-3">
          <NavLink className={`col seat ${selectedSeats.includes( 10) ? 'bg-secondary text-white' : 'bg-light'}`} style={{ border: '1px solid #00000040', padding: '8px', width:'60px', height:'30px', borderRadius:'8px' }} onClick={() => handleSeatClick(10)}>
            <div style={{width:'9px', height:'16px', backgroundColor:'gray', borderRadius:'25px'}}></div>
          </NavLink>
        </div>
      
            
          </div>
          <div className="row">
        <div className="col-2 mb-3">
          <NavLink className={`col seat ${selectedSeats.includes( 11) ? 'bg-secondary text-white' : 'bg-light'}`} style={{ border: '1px solid #00000040', padding: '8px', width:'60px', height:'30px', borderRadius:'8px' }} onClick={() => handleSeatClick(11)}>
            <div style={{width:'9px', height:'16px', backgroundColor:'gray', borderRadius:'25px'}}></div>
          </NavLink>
        </div>
        <div className="col-2 mb-3">
          <NavLink className={`col seat ${selectedSeats.includes( 12) ? 'bg-secondary text-white' : 'bg-light'}`} style={{ border: '1px solid #00000040', padding: '8px', width:'60px', height:'30px', borderRadius:'8px' }} onClick={() => handleSeatClick(12)}>
            <div style={{width:'9px', height:'16px', backgroundColor:'gray', borderRadius:'25px'}}></div>
          </NavLink>
        </div>
        <div className="col-2 mb-3">
          <NavLink className={`col seat ${selectedSeats.includes( 13) ? 'bg-secondary text-white' : 'bg-light'}`} style={{ border: '1px solid #00000040', padding: '8px', width:'60px', height:'30px', borderRadius:'8px' }} onClick={() => handleSeatClick(13)}>
            <div style={{width:'9px', height:'16px', backgroundColor:'gray', borderRadius:'25px'}}></div>
          </NavLink>
        </div>
        <div className="col-2 mb-3">
          <NavLink className={`col seat ${selectedSeats.includes( 14) ? 'bg-secondary text-white' : 'bg-light'}`} style={{ border: '1px solid #00000040', padding: '8px', width:'60px', height:'30px', borderRadius:'8px' }} onClick={() => handleSeatClick(14)}>
            <div style={{width:'9px', height:'16px', backgroundColor:'gray', borderRadius:'25px'}}></div>
          </NavLink>
        </div>
      </div>
          
        </div>
       
        <div className="col m-1">
          <div className='text-center'>
          <h4>Bus Location & Price</h4>
          <p>Bus Location: ABC Bus</p>
          <p>Seat No: {selectedSeats.join(', ')}</p>
          <p>Total Amount: <h3>&#8377;
            {selectedSeats.length * 850}</h3></p>
          <a href={'/passengerInfoPage'}><button className="btn  btn-danger" style={{width:'160px'}}>Proceed</button></a>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Selectseats