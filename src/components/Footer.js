import React from 'react';
import './components/Footer.css';

function Footer() {
  const handleCookiePreferences = () => {
    console.log('Cookie preferences clicked');
    // Implement cookie preferences modal logic
  };

  return (
    <footer className="footer" id="footer">
      <a className="hui-help-text-01 footer-link" href="https://aws.amazon.com/privacy/?nc1=f_pr" target="_blank" rel="noreferrer">Privacy</a>
      <div className="hui-help-text-01">|</div>
      <a className="hui-help-text-01 footer-link" href="https://aws.amazon.com/terms/?nc1=f_pr" target="_blank" rel="noreferrer">Site Terms</a>
      <div className="hui-help-text-01">|</div>
      <div className="footer-link">
        <a 
          className="awsui_link awsui_button awsui_variant-secondary awsui_font-size-body-m" 
          role="button" 
          tabIndex="0"
          onClick={handleCookiePreferences}
        >
          <div className="hui-help-text-01">Cookie Preferences</div>
        </a>
      </div>
      <div className="hui-help-text-01">© {new Date().getFullYear()} Amazon Web Services, Inc. or its affiliates. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
