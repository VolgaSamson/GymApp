import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Card from '../../UI/Card';
import './CheckoutForm.css';

const CheckoutForm = ({ plan, setLoading }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    
    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (stripeError) {
      setError(stripeError.message);
      setLoading(false);
      return;
    }

    
    const response = await fetch('https://vawulensbackend.vercel.app/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        payment_method: paymentMethod.id,
        amount: plan.price * 100, 
      }),
    });

    const { clientSecret } = await response.json();
    console.log("Received clientSecret:", clientSecret);

    
    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (confirmError) {
      setError(confirmError.message);
      setLoading(false);
    } else {
      if (paymentIntent.status === 'succeeded') {
        setSuccess(true);
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkoutform_main">
      <Card className="checkoutform">
        <div>
          <h4>Enter Card Details</h4>
        </div>
        <div>
          <CardElement />
        </div>

        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>Payment Successful!</div>}

        <button type="submit" disabled={!stripe || !elements}>
          Pay ${plan.price}
        </button>
      </Card>
    </form>
  );
};

export default CheckoutForm;
