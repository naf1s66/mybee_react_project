import React from 'react';
import './App.css';
import Logo from './assets/logo.png';
import HeroImage from './assets/hero_image1.png';

function App() {
  return (
    <div>
    <header className='header'>
    <img src={Logo} alt="Company Logo" className="logo" />
    <h1>Fed up with Overcharges?</h1>
  </header>

 <section className="main-section">
 <img src={HeroImage} alt="Plumber Hero" className="hero-image" />
 <h2>Your Trusted Partner in Plumbing & Drain Services</h2>
<p>Flowing Solutions for Your Plumbing Needs</p>
<button onClick={() => alert('Give us a moment while we schedule an expert...')}>
  Schedule an Expert
</button>
<p>Call us: +1 647-703-7407</p>
</section>

<footer className='footer'>
    <p>2024 JA Plumbing. All rights reserved.</p>
  </footer>
</div>
  );
}



export default App;
