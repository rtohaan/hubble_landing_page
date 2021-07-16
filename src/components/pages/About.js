import '../../App.css';

function About () {
    return (
        <div className='hero-container'>
          <video src='/videos/earth.mov' autoPlay loop muted />
          <h1>HUBBLE SPACE TELESCOPE</h1>
          <p>See through Hubble's eyes </p>
          <p>Visit <a style={{textDecoration: 'none'}} href="https://hubblesite.org/">NASA's site </a> 
           to learn about Hubble's update</p>
          <p>as the satellite is currently unoperational</p>
        </div>
      );
    }

export default About;