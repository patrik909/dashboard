import React from 'react';

function Button(props) {
    return (
        <button 
            onClick={
                props.buttonMission
            } 
            className={
                props.buttonClass
            }
            value={
                props.value
            }
        >
        {
            props.buttonText
        }
        </button> 
    );
}
    
export default Button;