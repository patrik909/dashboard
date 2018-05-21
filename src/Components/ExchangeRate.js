import React, { Component } from 'react';

class ExchangeRate extends Component {
    
    //0c37d712d227216587eb6d65741eac63

    state = {
        exchangeRateData: []
    }

    componentDidMount(){ 
        this.fetchExchangeRate();
    }

    fetchExchangeRate = () => {
        fetch('http://data.fixer.io/api/latest?access_key=0c37d712d227216587eb6d65741eac63')
            .then(function(response){
                return response.json();
            }).then((exchangeRateData) => {
                this.setState({exchangeRateData})
            }).catch(function(error){
                console.log(error);
            });
    }
    
    convertTimeStamp = (unix) => {
        let date =new Date(unix*1000);
        var hr = date.getHours();
        var m = "0" + date.getMinutes();
        var s = "0" + date.getSeconds();
        return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
    }
 
    render() {
        if(this.state.exchangeRateData.length !== 0) {
            return (
                <div id="exchangeRate">
                    1 € = {this.state.exchangeRateData.rates.SEK} SEK
                    Last updated: {this.convertTimeStamp(this.state.exchangeRateData.timestamp)}
                    <button onClick={this.fetchExchangeRate}>Update</button>
                </div>
            );    
        } else {
            return null;
        }
    }
}

export default ExchangeRate;