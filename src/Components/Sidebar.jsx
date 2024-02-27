import React, { useState } from 'react'

const Sidebar = () => {
    const [selectedPickupPoint, setSelectedPickupPoint] = useState('kolkata');
  const [pickupPoint, setPickupPoint] = useState('');
  const [dropPoint, setDropPoint] = useState('');
  const [morningSession, setMorningSession] = useState(false);
  const [afternoonSession, setAfternoonSession] = useState(false);
  const [eveningSession, setEveningSession] = useState(false);
  const [morningArrival, setMorningArrival] = useState(false);
  const [afternoonArrival, setAfternoonArrival] = useState(false);
  const [eveningArrival, setEveningArrival] = useState(false);
  const [fourStarOrMore, setFourStarOrMore] = useState(false);
  const [threeStarOrMore, setThreeStarOrMore] = useState(false);
  const [zeroToTwoStar, setZeroToTwoStar] = useState(false);
  const [zingBus, setZingBus] = useState(false);
  const [intercitySmar, setIntercitySmar] = useState(false);
  const [safarExp, setSafarExp] = useState(false);

  const handleClearAll = () => {
    setPickupPoint('');
    setDropPoint('');
    setMorningSession(false);
    setAfternoonSession(false);
    setEveningSession(false);
    setMorningArrival(false);
    setAfternoonArrival(false);
    setEveningArrival(false);
    setFourStarOrMore(false);
    setThreeStarOrMore(false);
    setZeroToTwoStar(false);
    setZingBus(false);
    setIntercitySmar(false);
    setSafarExp(false);
  };


  return (
    <aside className="bg-light p-4 border" >
        <div className="mb-3">
        <button className="btn btn-primary me-2">Filter</button>
        <button className="btn btn-secondary" onClick={handleClearAll}>Clear All</button>
      </div>
  <h5>Departure Time</h5>
  <div className="form-check">
    <input  className="form-check-input"
          type="checkbox"
          id="morningSession"
          checked={morningSession}
          onChange={() => setMorningSession(!morningSession)} />
    <label className="form-check-label" htmlFor="morningSession">
      Morning Session
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input"
          type="checkbox"
          id="afternoonSession"
          checked={afternoonSession}
          onChange={() => setAfternoonSession(!afternoonSession)} />
    <label className="form-check-label" htmlFor="afternoonSession">
      Afternoon Session
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input"
          type="checkbox"
          id="eveningSession"
          checked={eveningSession}
          onChange={() => setEveningSession(!eveningSession)} />
    <label className="form-check-label" htmlFor="eveningSession">
      Evening Session
    </label>
  </div>

  <hr />

  <h5>Arrival Time</h5>
  <div className="form-check">
    <input className="form-check-input"
          type="checkbox"
          id="morningArrival"
          checked={morningArrival}
          onChange={() => setMorningArrival(!morningArrival)} />
    <label className="form-check-label" htmlFor="morningArrival">
      Morning Session
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input"
          type="checkbox"
          id="afternoonArrival"
          checked={afternoonArrival}
          onChange={() => setAfternoonArrival(!afternoonArrival)} />
    <label className="form-check-label" htmlFor="afternoonArrival">
      Afternoon Session
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input"
          type="checkbox"
          id="eveningArrival"
          checked={eveningArrival}
          onChange={() => setEveningArrival(!eveningArrival)} />
    <label className="form-check-label" htmlFor="eveningArrival">
      Evening Session
    </label>
  </div>

  <hr />

  <div className="mb-3">
  <legend className="col-form-label">Pickup Point</legend>
  <div className="form-check">
    <input className="form-check-input"
          type="radio"
          name="pickupPoint"
          id="pickupKolkata"
          value="kolkata"
          />
    <label className="form-check-label" htmlFor="pickupKolkata">
      Kolkata
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="pickupPoint" id="pickupMumbai" value="mumbai" />
    <label className="form-check-label" htmlFor="pickupMumbai">
      Mumbai
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="pickupPoint" id="pickupBengaluru" value="bengaluru" />
    <label className="form-check-label" htmlFor="pickupBengaluru">
      Bengaluru
    </label>
  </div>
</div>

<hr />

<div className="mb-3">
  <legend className="col-form-label">Drop Point</legend>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="dropPoint" id="dropKolkata" value="kolkata" checked />
    <label className="form-check-label" htmlFor="dropKolkata">
      Kolkata
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="dropPoint" id="dropMumbai" value="mumbai" />
    <label className="form-check-label" htmlFor="dropMumbai">
      Mumbai
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="dropPoint" id="dropBengaluru" value="bengaluru" />
    <label className="form-check-label" htmlFor="dropBengaluru">
      Bengaluru
    </label>
  </div>
</div>


  <hr />

  <h5>Bus Rating</h5>
  <div className="form-check">
    <input 
    className="form-check-input" 
    type="checkbox" 
    id="fourStarOrMore"
    checked={fourStarOrMore}
    onChange={() => setFourStarOrMore(!fourStarOrMore)}
     />
    <label className="form-check-label" htmlFor="fourStarOrMore">
      4 Star or More
    </label>
  </div>
  <div className="form-check">
    <input  className="form-check-input" 
    type="checkbox" 
    id="threeStarOrMore"
    checked={threeStarOrMore}
    onChange={() => setThreeStarOrMore(!threeStarOrMore)} />
    <label className="form-check-label" htmlFor="threeStarOrMore">
      3 Star or More
    </label>
  </div>
  <div className="form-check">
    <input  className="form-check-input" 
    type="checkbox" 
    id="zeroToTwoStar"
    checked={zeroToTwoStar}
    onChange={() => setZeroToTwoStar(!zeroToTwoStar)} />
    <label className="form-check-label" htmlFor="zeroToTwoStar">
      0-2 Star
    </label>
  </div>

  <hr />

  <div className="mb-3">
    <label htmlFor="busOperator" className="form-label">Bus Operator</label>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="busOperator" id="zingBus" />
      <label className="form-check-label" htmlFor="zingBus">
        Zing Bus
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="busOperator" id="intercitySmar" />
      <label className="form-check-label" htmlFor="intercitySmar">
        Intercity Smart
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="busOperator" id="safarExp" />
      <label className="form-check-label" htmlFor="safarExp">
        Safar Exp
      </label>
    </div>
  </div>
</aside>

  )
}

export default Sidebar