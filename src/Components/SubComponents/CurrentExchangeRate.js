import React, { Component } from 'react';
import InputField from '../Parts/InputField';
import Button from '../Parts/Button';

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
    
    rateDataShortener = (rate) => {
        return Math.round(rate * 100) / 100;
    }
    
    calculate = () => {
        let calculatedSum = this.state.usersValue * this.state.currentRate;   
        this.setState({ calculatedValue: calculatedSum });
    }

    handleInput = (event) => {
        if (event.target.value && !isNaN(event.target.value)) {
            this.setState({ usersValue: event.target.value });
        }
    }

    render() {
        return (
            <div id='currentRate'>
                <InputField 
                    handle={
                        this.handleInput
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
                <p id='calculated'> { this.rateDataShortener(this.state.calculatedValue) } SEK</p>
            </div>
        )
    }   
}

export default CurrentExchangeRate;