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
        >
        {
            props.buttonText
        }
        </button> 
    );
}
    
export default Button;