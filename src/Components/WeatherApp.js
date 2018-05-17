import React, { Component } from 'react';

class WeatherApp extends Component {

    state = {
        weatherData: []
    }

    componentDidMount(){  
        this.fetchWeather();
    }

    fetchWeather = () => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=29ade8ca6839d956c50b969a7afbc59b&units=metric&lang=se')
            .then(function(response){
                return response.json();
            }).then((weatherData) => {
                this.setState({weatherData})
            }).catch(function(error){
                console.log(error);
            });
    }
 
    render() {
        console.log(this.state.weatherData)
        
        return (
            <div id="weatherApp">
                {this.state.weatherData.name}
            </div>
        );
    }
}

export default WeatherApp;