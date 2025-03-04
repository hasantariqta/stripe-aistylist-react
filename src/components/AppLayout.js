import React, { useState } from 'react';
import Navbar from './Navbar';
import IntroScreen from './IntroScreen';
import './AppLayout.css';

function AppLayout() {
  const [currentStep, setCurrentStep] = useState('intro');

  const handleStartDemo = () => {
    // Here you would handle the transition to the next step
    console.log('Starting demo...');
    // setCurrentStep('next-step');
  };

  return (
    <div className="hui-app-layout step-intro" data-testid="app-layout">
      <Navbar />
      <div className="hui-app-layout-content" data-testid="app-layout-content">
        <div className="hui-stepper" data-hide-controls="true">
          <div className="hui-stepper-content">
            {currentStep === 'intro' && (
              <IntroScreen onStartDemo={handleStartDemo} />
            )}
            {/* Add additional steps/components here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
