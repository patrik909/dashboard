import React, { Component } from 'react';
import Heading2 from './Parts/Heading2';
import InputField from './Parts/InputField';
import Button from './Parts/Button';
import WeatherContent from './Parts/WeatherContent';

class WeatherApp extends Component {

    state = {
        weatherData: [],
        searchCity: ''
    }

    componentWillMount(){  
        this.fetchWeather('Stockholm');
    }

    handleInput = (event) => {
        this.setState({ searchCity: event.target.value });
    }
    
    searchButton = () => {
        this.fetchWeather(this.state.searchCity);
    }

    fetchWeather = (city) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=29ade8ca6839d956c50b969a7afbc59b&units=metric&lang=se`)
            .then(function(response){
                return response.json();
            }).then((weatherData) => {
            if(weatherData.cod === 200) {
                this.setState({weatherData});
            }
            
            }).catch(function(error){
                console.log(error);
            });
    }
 
    render() {
        if(this.state.weatherData.length !== 0) {
            return (
                <div id='weatherApp'>
                    <Heading2 
                        title={
                            'VäderApp'
                        } 
                    />
                    <InputField 
                        handle={
                            this.handleInput
                        }
                        placeholder={
                            'Stockholm'
                        }
                    />
                    <Button 
                        buttonMission={
                            this.searchButton
                        }
                        buttonText={
                            <i className="fas fa-search"></i>
                        }
                    />
                    <WeatherContent
                        content={
                            this.state.weatherData
                        }  
                    />
                </div>
            );
        } else {
            return null;
        }
    }
}

export default WeatherApp;