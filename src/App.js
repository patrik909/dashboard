import React, { Component } from 'react';
import Header from './Components/Header';
import Timer from './Components/Timer';
import WeatherApp from './Components/WeatherApp';
import PostIt from './Components/PostIt';
import ExchangeRate from './Components/ExchangeRate';

import './App.css';

class App extends Component {
    
  render() {
      
    return (
      <div className="App">
        <Header />
        <Timer />
        <WeatherApp />
        <PostIt />
        <ExchangeRate />
      </div>
    );
  }
}

export default App;
