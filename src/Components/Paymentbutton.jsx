import React from 'react'
import { loadStripe } from '@stripe/stripe-js';

// const stripPromise = loadStripe('pk_test_51OjvHNSEbHtNOk0npBaecfzmoYZSLf6smmHAC6ZWuYorc8XD4M3TD3gT04gKIyeProFzRz3sngE3057CBBiyN2jl001Sv0MMQs')
const makePayment = async()=>{
  const stripe = await loadStripe("pk_test_51OjvHNSEbHtNOk0npBaecfzmoYZSLf6smmHAC6ZWuYorc8XD4M3TD3gT04gKIyeProFzRz3sngE3057CBBiyN2jl001Sv0MMQs");
  const price = 950;
  const body = {
      products:price
  }
  const headers = {
      "Content-Type":"application/json"
  }
  const response = await fetch("https://reserve-backend-gvu2.onrender.com/api/create-checkout-session",{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
  });

  const session = await response.json();

  const result = stripe.redirectToCheckout({
      sessionId:session.id
  });
  
  if(result.error){
      console.log(result.error);
  }
}
const Paymentbutton = () => {
  return (
    <button className="btn btn-danger mt-3" onClick={makePayment}>
        Proceed to Payment
  </button>
  )
}

export default Paymentbutton