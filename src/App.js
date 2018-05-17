import React, { Component } from 'react';
import Clock from './Components/Clock';
import Timer from './Components/Timer';
import WeatherApp from './Components/WeatherApp';

import './App.css';

class App extends Component {
    
  render() {
      
    return (
      <div className="App">
        <Clock />
        <Timer />
        <WeatherApp />
      </div>
    );
  }
}

export default App;
