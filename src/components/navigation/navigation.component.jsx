import React from 'react';

import Logo from '../logo/logo.component';

import './navigation.style.scss';

const Navigation = () => {
    return(
        <nav className='navigation dt border-box pa3 ph5-ns'>
            <Logo />
                <ul className="fr">
                    <li className="dim"><a href="http://">Map</a></li>
                    <li className="dim"><a href="http://">About</a></li>
                    <li className="style dim"><a href="http://">Contact Us</a></li>
                </ul>
        </nav>
    )
}

export default Navigation;