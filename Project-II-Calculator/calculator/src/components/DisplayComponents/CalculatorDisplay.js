import React from 'react';
import './Display.css';

const DisplayDiv = (props) => {
    return <div className={props.divStyle}>{props.result}</div>
}

export default DisplayDiv;