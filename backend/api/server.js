require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Stripe = require('stripe');
const cors = require('cors');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();


const corsOptions = {
  origin: 'https://gymappfrontend-5zp234rms-volga-samsons-projects.vercel.app/',  
  methods: ['GET', 'POST', 'OPTIONS'],  
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], 
  credentials: true  
};


app.use(cors(corsOptions));


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


app.options('*', cors(corsOptions));  


module.exports = app;
