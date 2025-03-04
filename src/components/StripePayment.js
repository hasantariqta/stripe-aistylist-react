import React from 'react';
import './StripePayment.css';

const StripePayment = () => {
  // This HTML string contains exactly the code you provided
  const stripeButtonHtml = `
    <script async src="https://js.stripe.com/v3/buy-button.js"></script>
    <stripe-buy-button
      buy-button-id="buy_btn_1Qz2P7B7PdXFb6AfpyBV14J3"
      publishable-key="pk_test_51QoqWjB7PdXFb6AfPC1vCxKwx3t9g6foS2DC1Fp3UwkIhtDD3sWsbxxph36CzL5n1eCnaDpLxIOySDBjDWwh7h4E00wimnzoV9"
    >
    </stripe-buy-button>
  `;

  return (
    <div 
      className="stripe-payment-container"
      dangerouslySetInnerHTML={{ __html: stripeButtonHtml }}
    />
  );
};

export default StripePayment;
