import React from 'react';

import './output.style.scss';



const Output = ({temp, humidity, description, icon}) => {
    return(
        <div className='section'>
            <div className="divstyle">
                <h4 className="detailsTitle"> <span>T</span>empera<span>t</span>ure 
                    <p>{temp}°C</p>
                </h4>
                <hr />
                <h4 className="detailsTitle"> Humidi<span>t</span>y
                    <p>{humidity}%</p> 
                </h4>
                <hr />
                <h4 className="detailsTitle"> Condi<span>t</span>ion
                    <p>{description} hi</p> 
                </h4>
                <p className="detailsTitle"> {icon} </p>
            </div>
        </div>
    )
}
    


export default Output;