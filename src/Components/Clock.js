import React, { Component } from 'react';

class Clock extends Component {

    state = {
        hours: '',
        minutes: '',
        secounds: ''
    }

    componentDidMount() {
        this.updateClock = setInterval(this.getTime.bind(this), 500);
    }

    getTime = () => {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const secound = date.getSeconds();
        this.formateTime(hour, minute, secound)
    }
    
    formateTime = (hour, minute, secound) => {   
        if(hour < 10){ hour = '0' + hour }   
        if(minute < 10){ minute = '0' + minute }
        if(secound < 10){ secound = '0' + secound }
        
        this.setState({hours: hour});
        this.setState({minutes: minute});
        this.setState({secounds: secound});
    }

    render() { 
        return(
            <div id="clock">{this.state.hours}:{this.state.minutes}:{this.state.secounds}</div>
        );
    }
}

export default Clock;