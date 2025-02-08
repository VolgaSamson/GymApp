import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'; 


const stripePromise = loadStripe('pk_test_51Qq6RYP56AonAhbSXj7IfHAV4ctx43bEBqfxpaZ9JXmuJPX9R5NjteGNmedJWggzHNirSSfWW3eKSsMFHBtlmyH4000njWeOrl');

const Payment = () => {
  const location = useLocation();
  const { plan } = location.state || {};
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
  }, [plan]);

  if (!plan) {
    return <div>Error: No plan selected!</div>;
  }

  

  return (
    <div>
      <h2>Proceed to Payment</h2>
      <h3>{plan.name}</h3>
      <p>{`Price: $${plan.price}`}</p>

      {/* Stripe payment integration */}
      <Elements stripe={stripePromise}>
        <CheckoutForm plan={plan} setLoading={setLoading} />
      </Elements>
    </div>
  );
};

export default Payment;
