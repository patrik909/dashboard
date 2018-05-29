import React, { Component } from 'react';
import Heading2 from './Parts/Heading2';
import CurrentExchangeRate from './SubComponents/CurrentExchangeRate';
import LastUpdatedExchangeRate from './SubComponents/LastUpdatedExchangeRate';

class ExchangeRate extends Component {
    
    state = {
        exchangeRateData: []
    }

    componentDidMount(){ 
        this.fetchExchangeRate();
    }

    fetchExchangeRate = () => {
        fetch('http://data.fixer.io/api/latest?access_key=0c37d712d227216587eb6d65741eac63')
            .then(function(response ){
                return response.json();
            }).then((exchangeRateData) => {
                this.setState({ exchangeRateData })
            }).catch(function(error) {
                console.log(error);
            });
    }

    render() {
        if (this.state.exchangeRateData.length !== 0) {
            return (
                <div id='exchangeRate'>
                    <Heading2 
                        title={
                            'Växelkurs'
                        } 
                    />
                    <p>Euro / SEK</p>
                    <CurrentExchangeRate 
                        current={
                            this.state.exchangeRateData.rates.SEK
                        }
                    />
                    <LastUpdatedExchangeRate 
                        updated={
                            this.state.exchangeRateData.timestamp*1000 
                            //1000 is used to convert the timestamp later
                        }
                        updateButton={
                            this.fetchExchangeRate
                        } 
                    />    
                </div>
            );    
        } else {
            return null;
        }
    }
}

export default ExchangeRate;