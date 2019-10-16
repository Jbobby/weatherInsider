import React from 'react';

import './output.style.scss';



const Output = ({cityName, ...props}) => {
    // let imageLink = "http://openweathermap.org/img/w/" + {icon} + ".png";
    return(
        <div className='section'>
            <div className="divstyle">
                {/* <div className="black pb2">{city.toUpperCase()}</div> */}
                <div className="black pb2">{cityName}</div>
                    {/* <img className="icon" src={`http://openweathermap.org/img/w/10d.png`} alt={'Weather Icon'}/> */}
                        <div className="detailsTitle"> <span>T</span>empera<span>t</span>ure 
                            <p>{props.temp}&deg;</p>
                        </div>
                            <hr />
                                <div className="detailsTitle"> Humidi<span>t</span>y
                                    <p>{props.city}%</p> 
                                </div>
                                    <hr />
                                        <div className="detailsTitle"> Condi<span>t</span>ion
                                            <p>{props.condition}</p> 
                                        </div>
            </div>
        </div>
    )
}
    


export default Output;