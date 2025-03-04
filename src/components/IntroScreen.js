import React from 'react';
import './IntroScreen.css';

function IntroScreen({ onStartDemo }) {
  return (
    <div className="hui-step" data-hide-controls="true" data-testid="step_Intro">
      <div className="intro-step-container">
        <div className="hui-intro-screen" data-testid="intro-screen">
          <div className="hui-intro-screen-content">
            <h1 className="hui-intro-screen-title hui-display-02">AI Stylist</h1>
            <p className="hui-paragraph-large">
              Amazon Bedrock is the easiest way to build and scale generative AI 
              applications with foundation models. Learn how to use Amazon Bedrock to 
              create a business solution for your use case.
            </p>
            <br />
            <button 
              data-testid="intro-screen-startbutton" 
              className="awsui_button awsui_variant-primary" 
              type="submit"
              onClick={onStartDemo}
            >
              <span className="awsui_content awsui_label">Try free demo</span>
            </button>
            <p className="hui-text-secondary hui-label-02">Duration: 5 minutes</p>
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
