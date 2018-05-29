import React from 'react';

function WeatherDescription(props) {
    return <p id='weatherDescription'> { props.description.weather[0].description } </p>;
}
    
export default WeatherDescription;