import React, { Component } from 'react';

class FormateDate extends Component {
    
    state = {
        time: this.props.time,
        hours: '',
        minutes: '',
        seconds: ''
    }
    
    componentDidMount(){
        if (this.props.clock) {
            this.updateClock = setInterval(this.getTime.bind(this), 500);
        } else {
            this.getTime(this.state.time) 
        }
    }

    getTime = (date) => {
        let newDate = '';
        if(date){
            newDate = new Date(date);  
        } else {
            newDate = new Date();
        }
        const hour = newDate.getHours();
        const minute = newDate.getMinutes();
        const secound = newDate.getSeconds();
        this.formateTime(hour, minute, secound);
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
        return (
            <p> {this.state.hours}:{this.state.minutes}:{this.state.secounds} </p>
        )
    }
    
}

export default FormateDate;