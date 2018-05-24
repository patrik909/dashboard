import React from 'react';
import CurrentTemp from './CurrentTemp';
import WeatherDescription from './WeatherDescription';

function WeatherContent(props) {
    return(
        <div>
            <CurrentTemp 
                temp={
                    props.content
                } 
            />                   
            <WeatherDescription 
                description={
                    props.content
                } 
            />
        </div>
    );
}
    
export default WeatherContent;