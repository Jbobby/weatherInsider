import React from 'react';

import './output.style.scss';



const Output = ({temp, humidity, description, icon}) => {
    return(
        <div className='section'>
            <div className="divstyle">
                <p className="detailsTitle"> <span>T</span>empera<span>t</span>ure: 
                    <p>{temp}°C</p>
                </p>
                <p className="detailsTitle"> <b>Humidi<span>t</span>y</b>: 
                    <p>{humidity}%</p> 
                </p>
                <p className="detailsTitle"> Condi<span>t</span>ion: 
                    {description} 
                </p>
                <p className="detailsTitle"> {icon} </p>
            </div>
        </div>
    )
}
    


export default Output;