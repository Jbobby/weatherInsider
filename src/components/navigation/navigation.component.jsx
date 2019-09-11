import React from 'react';

import Logo from '../logo/logo.component';

import './navigation.style.scss';

const Navigation = () => {
    return(
        <nav className='navigation bg-white dt border-box pa3 ph5-ns'>
            <Logo />
                <ul style={{}} className="fr">
                    <li className="link dim" href="#"> Map </li>
                    <li className="link dim" href="#"> About </li>
                    <li className="link dim" href="#"> Contact Us </li>
                </ul>
        </nav>
    )
}

export default Navigation;