import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="hui-navbar" data-testid="nav-bar">
      <a href="https://aws.amazon.com/" className="hui-navbar-image-link hui-navbar-aws-logo" target="_blank" rel="noopener noreferrer">
        {/* AWS Logo */}
      </a>
      <hr className="hui-navbar-separator hui-navbar-separator-left" />
      <a href="/" className="hui-navbar-image-link hui-navbar-title">AI Stylist</a>
      <div className="hui-navbar-right-content">
        <a 
          aria-label="Visit Amazon Bedrock (opens in a new tab)" 
          title="Visit Amazon Bedrock (opens in a new tab)" 
          className="awsui_button awsui_variant-normal awsui_button-no-wrap awsui_link" 
          href="https://us-east-1.console.aws.amazon.com/bedrock/home?region=us-east-1#/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span className="awsui_content awsui_label">Visit Amazon Bedrock</span>
          <span className="awsui_icon awsui_icon-right">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
              <path d="M14 8.01v-6H8M14.02 2 8 8.01M6 2.01H2v12h12v-3.99" className="stroke-linejoin-round"></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
