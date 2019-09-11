import React from 'react';

import weatherlogo from './weatherlogo.png';

const Logo = () => {
    return(
        <div>
            <div style={{ paddingTop:10 }} className="logo fl">
                <img style={{ height: 40 , width: 40}} src={weatherlogo} alt="weatherLogo" />
            </div>
        </div>
    )
}

export default Logo;