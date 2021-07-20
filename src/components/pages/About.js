import '../../App.css';
import Earth from '../../assests/videos/earth.mov'

function About () {
    return (
        <div className='hero-container'>
          <video src={Earth} autoPlay loop muted />
          <h1>HUBBLE SPACE TELESCOPE</h1>
          <p>See through Hubble's eyes </p>
          <p>Visit <a style={{textDecoration: 'none'}} href="https://hubblesite.org/">NASA's site </a> 
           to learn more about Hubble</p>
          <p></p>
        </div>
      );
    }

export default About;