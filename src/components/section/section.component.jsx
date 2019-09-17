import React from 'react';
import './section.style.scss'
import continental from '../section/continental.jpg';
import Particles from 'react-particles-js';

const particlesOptions = {
    "particles": {
        "number": {
          "value": 20,
          "density": {
            "enable": true,
            "value_area": 900
          }
        }    
    }
}

const Section = () => {
    return(
        <div className="howtoDetails">
        <Particles className="particles"
            params ={particlesOptions}
        />
               <div className="d_container">
                    <div className="portion">I have found ReactJs more interesting and problem-solving. <br />
                        Also consumed the Open weather map API... <br />
                        <a id="link" href="http://openweathermap.com">Visit the website to learn more</a>
                     </div>
                    <img className="image" style={{ height: 200 , width: 200}} src={continental} alt="OwnerPicture"/>
               </div>
        </div>
    )
}

export default Section;