import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/mlky_6.mp4' autoPlay loop muted />
      <h1>HUBBLE SPACE TELESCOPE</h1>
      <p>See through Hubble's eyes </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Learn About Hubble
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
