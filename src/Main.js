import React from 'react';
import Timer from './Components/Timer';
import WeatherApp from './Components/WeatherApp';
import PostIt from './Components/PostIt';
import ExchangeRate from './Components/ExchangeRate';

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