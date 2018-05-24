import React from 'react';
import Timer from './CompFunctions/Timer';
 import WeatherApp from './CompFunctions/WeatherApp';
import PostIt from './CompFunctions/PostIt';
import ExchangeRate from './CompFunctions/ExchangeRate';

function Main(){
    return(
        <main>
            <Timer className="mainChild"/>
            <PostIt className="mainChild"/>
            <WeatherApp className="mainChild"/>
            <ExchangeRate className="mainChild"/>        
        </main>
    );
}

export default Main;