import React from 'react';
import './howto.style.scss'
import continental from '../howto/continental.jpg';
import Particles from 'react-particles-js';

const particlesOptions = {
    "particles": {
        "number": {
          "value": 70,
          "density": {
            "enable": true,
            "value_area": 400
          }
        }    
    }
}

const HowTo = () => {
    return(
        <div className="howtoDetails">
        <Particles className="particles"
            params ={particlesOptions}
        />
               <div className="d_container">
                    <div className="firstbox">I have found ReactJs more interesting and problem-solving. <br />
                     Also consumed the Open weather map API... <br />
                     <a id="link" href="http://openweathermap.com">Click to use the free API</a></div>
                    <div className="secondbox"><img style={{ height: 200 , width: 200}} src={continental} alt="OwnerPicture"/></div>
               </div>
        </div>
    )
}

export default HowTo;