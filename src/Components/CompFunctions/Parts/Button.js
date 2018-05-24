import React from 'react';

function Button(props) {
    return <button onClick={props.buttonMission}>{props.buttonText}</button> 
}
    
export default Button;