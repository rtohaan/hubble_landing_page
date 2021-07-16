import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contact me to create a site for you!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Submit</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <a href="https://rtohaan.github.io/">Portfolio</a>
            <a href="https://www.linkedin.com/in/rtohaan/">LinkedIn</a> 
            <a href="https://github.com/rtohaan">Github</a> 
          </div>
        </div>

      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Rohan
              <i class="fa fa-user-astronaut" />
            </Link>
          </div>
          <small class='website-rights'>Rohan © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;