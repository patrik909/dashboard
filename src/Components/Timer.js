import React, { Component } from 'react';

class Timer extends Component {

    state = {
        timeLeft: '',
    }

    componentDidMount() {
        this.setState({ timeLeft: 1000 * 6 / 100 })
    }

    activateTimer = () => {
        this.countDownTimer();
    }
    
    countDownTimer = () => {
        let countDown = this.state.timeLeft - 1;
        this.setState({timeLeft: countDown});
        
        if(this.state.timeLeft === 0){
            this.stopTimer();
        } else {
            this.updateClock = setTimeout(this.countDownTimer, 1000);
        }
    }
    
    stopTimer = () => {
  
    }
    
    resetTimer = () => {
        this.setState({ timeLeft: 1000 * 6 / 100 })        
    }
    
    timerButton = () => {
        if(this.state.timeLeft === 0) {
            return <button id="resetButton" onClick={this.resetTimer}>Reset Timer</button>
        } else {
            return <button id="timerButton" onClick={this.activateTimer}>Start Timer</button>
        } 
    }
    
    divStyle = {
        backgroundColor: 'blue'
            };


    render() { 
        
let className = ''
    if(this.state.timeLeft === 0) {
         className = 'done'
    } else {
        className = 'timer'
    }

        return(
            <div id="timer" className={className}>
                <div>{this.state.timeLeft}</div>
                {this.timerButton()}
            </div>
        )
    }
}

export default Timer;