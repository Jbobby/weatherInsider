import React from 'react';


const Searchbox = ({onSubmit, inputChange}) => {
    return(
        <div className="searchbox">
            <input onInput={inputChange} className="0-30 box pa2 ma2 mr0 shadow-2" placeholder="London,UK" />
            <button onClick={onSubmit} className="pa2 ma2 shadow-2 ml0 bg-light-blue">
                Get Weather
            </button>
        </div>
    )
}


export default Searchbox;
