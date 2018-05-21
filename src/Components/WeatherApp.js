import React, { Component } from 'react';

class WeatherApp extends Component {

    state = {
        weatherData: []
    }

    componentWillMount(){  
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

        if(this.state.weatherData.length !== 0) {
            return (
                <div id="weatherApp">
                    {this.state.weatherData.name} <br />
                    Temperatur: {this.state.weatherData.main.temp} <br />
                    Väder: {this.state.weatherData.weather[0].description}
                </div>
            );
        } else {
            return null
        }

    }
}

export default WeatherApp;