import React, { Component } from 'react';
import Heading2 from './Parts/Heading2';
import Button from './Parts/Button';
import InputField from './Parts/InputField';

class Timer extends Component {

    state = {
        timeLeft: '',
        minutesLeft: 0,
        secondsLeft: 0,
        inputMinutes: '',
        inputSeconds: ''
    }

    componentDidMount() {
        this.setState({ minutesLeft: 5})
        this.setState({ secondsLeft: 0})        
    }

    activateTimer = () => {
//        if(this.state.timeLeft > 0) {
            this.countDown();
//        }
    }
    
    pauseTimer = () => {
        clearTimeout(this.updateClock);
    }
    
    stopTimer = () => {
        clearTimeout(this.updateClock);
        //this.setState({ timeLeft: 1000 * 6 / 100 });
    }
    
    countDown = () => {
        if(this.state.secondsLeft === 0) {
            if(this.state.minutesLeft === 0) {
                clearTimeout(this.updateClock);
            } else if(this.state.minutesLeft > 0){
                let countDownMinutes = this.state.minutesLeft - 1;
                this.setState({ minutesLeft: countDownMinutes });
                this.setState({ secondsLeft: 59 })
                this.updateClock = setTimeout(this.countDown, 1000);
            }    
        } else {
            let countDownSeconds = this.state.secondsLeft - 1;
            this.setState({ secondsLeft: countDownSeconds });
            this.updateClock = setTimeout(this.countDown, 1000);
        }
    }
    
    setTimer = () => {
        this.setState({ minutesLeft: this.state.inputMinutes})
        this.setState({ secondsLeft: this.state.inputSeconds})
    }
    
    handleInputMinutes = (event) => {
        this.setState({ inputMinutes: event.target.value })
    }
    
    handleInputSeconds = (event) => {
        this.setState({ inputSeconds: event.target.value })
    }

    render() { 
        
        console.log(this.state.minutesLeft)
        console.log(this.state.secondsLeft)
        
        let bgColor = '';
        let resetButton = '';
        
//        if(this.state.secondsLeft === 0 && this.state.minutesLeft === 0) {
//            bgColor = 'done';
//            resetButton = 'showTimerButton';
//        } else {
//            bgColor = 'none';
//            resetButton = 'hide';
//        }
        
        let minutes = '';
        let seconds = '';
        if(this.state.minutesLeft < 10) {
            minutes = '0' + this.state.minutesLeft
        } else {
            minutes = this.state.minutesLeft
        }
        if(this.state.secondsLeft < 10) {
            seconds = '0' + this.state.secondsLeft
        } else {
            seconds = this.state.secondsLeft
        }
    
        return(
            <div id='timer'>
                <Heading2 
                    title={
                        'Timer'
                    }
                />
                <p 
                   id='timeMinutes'
                   className={
                        bgColor
                    }
                >
                    {
                        minutes
                    }
                </p>
                <span 
                    id="timeSeperator"
                    className={
                        bgColor
                    }
                >
                :
                </span>
                <p 
                   id='timeSeconds'
                   className={
                        bgColor
                    }
                >
                    {
                        seconds
                    }
                </p>
                <Button                           
                    buttonMission={
                        this.stopTimer
                    }
                    buttonText={
                        <i className='fas fa-stop-circle'></i>
                    }
                />
                <Button                           
                    buttonMission={
                        this.activateTimer
                    }
                    buttonText={
                        <i className='fas fa-play-circle'></i>
                    }
                />
                <Button                           
                    buttonMission={
                        this.pauseTimer
                    }
                    buttonText={
                        <i className='fas fa-pause-circle'></i>
                    }
                />
                <Button   
                    buttonClass={
                        resetButton
                    }                      
                    buttonMission={
                        this.stopTimer
                    }
                    buttonText={
                        'ÅTERSTÄLL TIMER'
                    }
                />
                <InputField 
                    handle={
                        this.handleInputMinutes
                    }
                    placeholder={
                        '00'
                    }
                />
                <span>:</span>
                <InputField 
                    handle={
                        this.handleInputSeconds
                    }
                    placeholder={
                        '00'
                    }
                />
                <Button                      
                    buttonMission={
                        this.setTimer
                    }
                    buttonText={
                        'SÄTT TIMER'
                    }
                />
            </div>
        );
    }
}

export default Timer;