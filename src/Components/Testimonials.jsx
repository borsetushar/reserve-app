import React from 'react'
import Bus from './assets/Bus7.jpg'
import Bus6 from './assets/Bus6.jpg'
import Happy from './assets/Happy2.jpg'

const Testimonials = () => {
  return (
    <div className="container mb-5">
   <div className="row mb-4">
  <div className="col text-center mt-5">
    <h2 style={{ margin: '30px' }}>Book your Journey with the world's largest bus platform</h2>
  </div>
</div>


   <div className="row mb-4">
  <div className="col">
    <div className="card-group">
      <div className="card mx-2 p-3 bg-white shadow">
        <img src={Bus} className="card-img-top" alt="Testimonial Image" style={{ width: '100%', height: '60%', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <h5 className="card-title mb-3">2000+</h5>
          <p className="card-text">Bus Collection</p>
        </div>
      </div>

      <div className="card mx-2 p-3 bg-white shadow">
        <img src={Happy} className="card-img-top" alt="Testimonial Image" style={{ width: '100%', height: '60%', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <h5 className="card-title mb-3">20 Million</h5>
          <p className="card-text">Happy Customers Globally</p>
        </div>
      </div>

      <div className="card mx-2 p-3 bg-white shadow">
        <img src={Bus6} className="card-img-top" alt="Testimonial Image" style={{ width: '100%', height: '60%', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <h5 className="card-title mb-3">5000+</h5>
          <p className="card-text">Tickets Booked Every Day</p>
        </div>
      </div>
    </div>
  </div>
</div>


    <div className="row mt-6">
      <div className="col text-center">
        <h2 style={{ margin: '50px' }}>Here's what our customers<br/> say about us</h2>
      </div>
    </div>
    <div className="row mb-6">
  <div className="col d-flex justify-content-center">
    <div className="card-group">
      <div className="card mx-2 p-3 bg-white shadow" style={{ maxWidth: '300px' }}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="rounded-circle bg-danger text-white d-flex justify-content-center align-items-center me-3" style={{ width: '60px', height: '60px',fontSize: '34px' }}>J</div>
            <div>
              <h5 className="card-title mb-1">John Doe</h5>
              <p className="card-text mb-1">Customer since 2000</p>
            </div>
          </div>
          <div>
            <p className="card-text mb-1">Rating: 5/5</p>
            <p className="card-text">Amazing Service. Always a best time with Reserve.</p>
          </div>
        </div>
      </div>

      <div className="card mx-2 p-3 bg-white shadow" style={{ maxWidth: '300px' }}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="rounded-circle bg-danger text-white d-flex justify-content-center align-items-center me-3" style={{ width: '60px', height: '60px',fontSize: '34px' }}>M</div>
            <div>
              <h5 className="card-title mb-1">Maria Smith</h5>
              <p className="card-text mb-1">Customer since 2015</p>
            </div>
          </div>
          <div>
            <p className="card-text mb-1">Rating: 4.5/5</p>
            <p className="card-text">Excellent Service. Always reliable and on time.</p>
          </div>
        </div>
      </div>

      <div className="card mx-2 p-3 bg-white shadow" style={{ maxWidth: '300px' }}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="rounded-circle bg-danger text-white d-flex justify-content-center align-items-center me-3" style={{ width: '60px', height: '60px',fontSize: '34px' }}>A</div>
            <div>
              <h5 className="card-title mb-1">Alice Johnson</h5>
              <p className="card-text mb-1">Customer since 2018</p>
            </div>
          </div>
          <div>
            <p className="card-text mb-1">Rating: 4/5</p>
            <p className="card-text">Great Service. Always friendly staff.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  </div>
  )
}

export default Testimonials