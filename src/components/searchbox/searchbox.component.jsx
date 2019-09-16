import React from 'react';
import './searchbox.style.scss';


const Searchbox = ({onSubmit, inputChange}) => {
    return(
        <div className="searchbox">
            <input onInput={inputChange} className="0-30 box pa2 ma2 mr0 shadow-2" placeholder="Lagos,NG" />
            <button onClick={onSubmit} className="pa2 ma2 box times shadow-2 ml0 bg-light-blue shadow-2">
                Get Weather
            </button>
        </div>
    )
}


export default Searchbox;
