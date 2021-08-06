require('dotenv').config();
const axios = require('axios');
const Stripe = require('stripe');
const stripeController = {};

const {STRIPE_SECRET_KEY} = process.env;
const stripe = Stripe(STRIPE_SECRET_KEY, {apiVersion:"2020-08-27"});

stripeController.createPaymentIntent = async (req, res, next) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, // req.body.amount
      currency: "usd",
      payment_method_types: ["card"],
    });

    const clientSecret = paymentIntent.client_secret;
    res.locals.response = {
      clientSecret,
    }
    // res.json({
    //   clientSecret,
    // });
  } catch (error) {
    console.log(error);
    next({
      log: `Create Payment Intent - ERROR: ${error}`,
      message: {
        err: 'Error occured in stripeController.createPaymentIntent',
        message: error,
      },
    });
  }
};

module.exports = stripeController;
