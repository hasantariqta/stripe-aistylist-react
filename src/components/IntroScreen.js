import React from 'react';
import StripePayment from './StripePayment';
import './IntroScreen.css';

function IntroScreen() {
  return (
    <div className="hui-step" data-hide-controls="true" data-testid="step_Intro">
      <div className="intro-step-container">
        <div className="hui-intro-screen" data-testid="intro-screen">
          <div className="hui-intro-screen-content">
            <h1 className="hui-intro-screen-title hui-display-02">AI Stylist</h1>
            <p className="hui-paragraph-large">
              Complete your purchase with our secure payment system. Your personal AI stylist 
              will help you find the perfect outfit for any occasion.
            </p>
            <br />
            <div className="payment-section">
              <StripePayment />
            </div>
          </div>
          <div className="intro-image-container" data-testid="intro-image-container">
            {/* SVG or image content here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroScreen;
