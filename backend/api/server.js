require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 
const app = express();
const cors = require('cors');


app.use(cors());

const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.post('/create-payment-intent', async (req, res) => {
  try {
    const { payment_method, amount } = req.body; 

    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,          
      currency: 'usd',         
      payment_method: payment_method,  
      confirmation_method: 'automatic',  
    });

    
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating PaymentIntent: ", error);
    res.status(500).send({ error: 'Failed to create payment intent.' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
