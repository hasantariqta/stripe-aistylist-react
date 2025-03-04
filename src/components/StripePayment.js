import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { STRIPE_PUBLISHABLE_KEY } from '../stripeConfig';
import './StripePayment.css';

// Load Stripe outside of component to avoid recreating Stripe object on renders
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="stripe-payment-form">
      <PaymentElement />
      <button 
        disabled={isLoading || !stripe || !elements} 
        className="awsui_button awsui_variant-primary payment-button"
      >
        <span className="awsui_content awsui_label">
          {isLoading ? "Processing..." : "Pay with Stripe"}
        </span>
      </button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </form>
  );
};

const StripePayment = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    // In a real application, you would call your backend to create a PaymentIntent
    // This is just a placeholder - you'll need to implement the actual API call
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 1999 }), // $19.99
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch(err => {
        console.error("Error creating payment intent:", err);
        // For demo purposes, set a dummy client secret
        // IMPORTANT: In production, NEVER do this! Always get a real client secret from your server
        setClientSecret("demo_client_secret_for_testing_only");
      });
  }, []);

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#ec7211',
    },
  };
  
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="stripe-payment-container">
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
      {!clientSecret && <div>Loading payment options...</div>}
    </div>
  );
};

export default StripePayment;
