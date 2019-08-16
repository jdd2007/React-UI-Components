import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return <button className="number-button">{props.num}</button>
    //    return <button className={props.buttonStyle}>{props.num}</button>
}

export default NumberButton;