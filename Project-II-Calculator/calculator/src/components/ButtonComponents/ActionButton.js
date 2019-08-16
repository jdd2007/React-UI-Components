import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return <button className="action-button">{props.action}</button>
    //    return <button className={props.buttonStyle}>{props.action}</button>
}

export default ActionButton;