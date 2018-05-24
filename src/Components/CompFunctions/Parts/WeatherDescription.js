import React from 'react';

function WeatherDescription(props) {
    return <p id="description"> {props.description.weather[0].description} </p>;
}
    
export default WeatherDescription;