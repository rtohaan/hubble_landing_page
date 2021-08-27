import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import hst from '../../assests/images/hst.jpg'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-desc'>
        <h3>Some History About Hubble </h3>
        <br />
        <div className="hubble-photo">
        <img src={hst} alt="" />
        </div>

        <h6>This photograph of NASA’s Hubble Space Telescope was taken on the fifth servicing 
            mission to the observatory in 2009.
            Credits: NASA</h6>
        <br />
        <p>From the dawn of humankind to a mere 400 years ago, all that we knew about our universe came 
          through observations with the naked eye. Then Galileo turned his telescope toward the heavens 
          in 1610. The world was in for an awakening.
        </p>
        <br />
        <p>Saturn, we learned, had rings. Jupiter had moons. That nebulous patch across the center of the sky 
          called the Milky Way was not a cloud but a collection of countless stars. 
          Within but a few years, our notion of the natural world would be forever changed. 
          A scientific and societal revolution quickly ensued.
        </p>
        <br />
        <p>Hubble, the observatory, is the first major optical telescope to be placed in space, 
          the ultimate mountaintop. Above the distortion of the atmosphere, far far above rain 
          clouds and light pollution, Hubble has an unobstructed view of the universe. 
          Scientists have used Hubble to observe the most distant stars and galaxies as well as the planets 
          in our solar system.
        </p>
        <br />
        <p>Hubble's launch and deployment in April 1990 marked the most significant advance in astronomy 
          since Galileo's telescope. Thanks to five servicing missions and more than 25 years of operation,
           our view of the universe and our place within it has never been the same.
        </p>
        <br />
        
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