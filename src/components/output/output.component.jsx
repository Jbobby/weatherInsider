import React from 'react';

import './output.style.scss';



const Output = ({temp, humidity, description, icon, city}) => {
    let imageLink = "http://openweathermap.org/img/w/" + {icon} + ".png";
    console.log(imageLink);
    console.log(icon);
    return(
        <div className='section'>
            <div className="divstyle">
                <div className="bodoni black">{city.toUpperCase()}</div>
                <div className="detailsTitle"><img src="http://openweathermap.org/img/w/04d.png" alt="" /></div>
                <div className="detailsTitle"> <span>T</span>empera<span>t</span>ure 
                    <p>{temp}°C</p>
                </div>
                <hr />
                <div className="detailsTitle"> Humidi<span>t</span>y
                    <p>{humidity}%</p> 
                </div>
                <hr />
                <div className="detailsTitle"> Condi<span>t</span>ion
                    <p>{description}</p> 
                </div>
            </div>
        </div>
    )
}
    


export default Output;