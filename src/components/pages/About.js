import '../../App.css';
import Earth from '../../assests/videos/earth.mov'

function About () {
    return (
        <div className='hero-container'>
          <video src={Earth} autoPlay loop muted />
          <h1>HUBBLE SPACE TELESCOPE</h1>
          <h3>Look Up To The Stars </h3>
          <h3>Visit <a href="https://hubblesite.org/">NASA's site </a> 
           to learn more about Hubble</h3>
        </div>
      );
    }

export default About;