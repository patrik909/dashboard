import React from 'react';

function CurrentTemp(props) {
    let temp = Math.round(props.temp.main.temp)
    return <p id='temp'> { temp }°C </p>;
}
    
export default CurrentTemp;