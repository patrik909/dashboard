import React, { Component } from 'react';
import Heading2 from './Parts/Heading2';

class Timer extends Component {

    state = {
        timeLeft: '',
        input: ''
    }

    componentDidMount() {
        this.setState({ timeLeft: 1000 * 6 / 100 })
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value })
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
  //????
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
    
    setTimer = () => {
        this.setState({ timeLeft: this.state.input})
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
        
//        let counterClass = ''
//    if(this.state.timeLeft <= 10) {
//         counterClass = 'ending'
//    } else if (this.state.timeLeft === 0) {
//        counterClass = 'done'
//    }

        return(
            <div id="timer" className={className}>
                <Heading2 
                    title={
                        "Timer"
                    }
                />
               <input type="text" id="setTimerInput" onChange={this.handleChange}></input>
               <button type="button" id="setTimerButton" onClick={this.setTimer}>Set time</button>
               {this.timerButton()}
                {this.state.timeLeft}
                <button type="button" id="stopTimerButton" onClick={this.stopTimer}>Set time</button>
            </div>
        )
    }
}

export default Timer;