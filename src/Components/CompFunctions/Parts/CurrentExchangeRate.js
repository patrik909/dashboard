import React, { Component } from 'react';
import InputField from './InputField';
import Button from './Button';

class CurrentExchangeRate extends Component {
    
    state = {
        currentRate: '',
        usersValue: 1,
        calculatedValue: ''
    }
    
    componentDidMount() {
        this.setState(
            {
                currentRate: this.props.current
            }, () => {
                this.calculate();
            }
        );
    }   
    
    rateDataShortneer = (rate) => {
        return Math.round(rate * 100) / 100;
    }
    
    calculate = () => {
        let calculatedSum = this.state.usersValue * this.state.currentRate;   
        this.setState({ calculatedValue: calculatedSum });
    }

    handleChange = (event) => {
        if (event.target.value && !isNaN(event.target.value)) {
            this.setState({ usersValue: event.target.value });
        }
    }

    render() {
        return (
            <div id='currentRate'>
                <InputField 
                    handle={
                        this.handleChange
                    }
                    placeholder={
                        '1'
                    }
                />
                <Button 
                    buttonMission={
                        this.calculate
                    }
                    buttonText={
                        'KÖR'
                    }
                />
                <p id='calculated'> { this.rateDataShortneer(this.state.calculatedValue) } SEK</p>
            </div>
        )
    }   
}

export default CurrentExchangeRate;