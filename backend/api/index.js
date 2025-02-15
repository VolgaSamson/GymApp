const dotenv = require('dotenv');
dotenv.config();  
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


const app = express();

// CORS configuration
const CorsConfig = {
  origin: "*", 
  credentials: true, 
  methods: ["GET", "POST", "OPTIONS"], 
};


app.use(cors(CorsConfig));


app.use(bodyParser.json());

const PLANS = {
  "Silver Package": 29.99,  
  "Gold Package": 49.99, 
  "Platinum Package": 89.99 
};


app.post('/create-payment-intent', async (req, res) => {
  try {
    const { paymentMethod, plan_name } = req.body;

    if (!PLANS[plan_name]) {
      return res.status(400).json({ error: 'Invalid plan selected' });
    }
    const amount = PLANS[plan_name]*100;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method: paymentMethod,
      confirmation_method: 'automatic',
    });

    
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating PaymentIntent: ", error);
    res.status(500).send({ error: 'Failed to create payment intent.' });
  }
});


module.exports = app;


if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 5001;
  app.listen(port, () => console.log(`Server running on port ${port}`));
}
