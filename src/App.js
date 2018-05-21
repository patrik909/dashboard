import React, { Component } from 'react';
import Clock from './Components/Clock';
import Timer from './Components/Timer';
import WeatherApp from './Components/WeatherApp';
import PostIt from './Components/PostIt';

import './App.css';

class App extends Component {
    
  render() {
      
    return (
      <div className="App">
        <Clock />
        <Timer />
        <WeatherApp />
        <PostIt />
      </div>
    );
  }
}

export default App;
