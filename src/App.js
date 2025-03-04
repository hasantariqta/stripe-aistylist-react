import React from 'react';
import Navbar from './components/Navbar';
import AppLayout from './components/AppLayout';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bedrock-demo">
        <AppLayout />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
