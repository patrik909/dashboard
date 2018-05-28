import React from 'react';
import Timer from './CompFunctions/Timer';
import WeatherApp from './CompFunctions/WeatherApp';
import PostIt from './CompFunctions/PostIt';
import ExchangeRate from './CompFunctions/ExchangeRate';

function Main() {
    return(
        <main>
            <Timer />
            <PostIt />
            <WeatherApp />
            <ExchangeRate />        
        </main>
    );   
}     

export default Main;