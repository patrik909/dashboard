import React, { Component } from 'react';
import Heading2 from './Parts/Heading2';
import Button from './Parts/Button';

class Timer extends Component {

    state = {
        timeLeft: '',
        input: ''
    }

    componentDidMount() {
        this.setState({ timeLeft: 1000 * 6 / 100 });
    }

    activateTimer = () => {
        if(this.state.timeLeft > 0) {
            this.countDown();
        }
    }
    
    pauseTimer = () => {
        clearTimeout(this.updateClock);
    }
    
    stopTimer = () => {
        clearTimeout(this.updateClock);
        this.setState({ timeLeft: 1000 * 6 / 100 });
    }
    
    countDown = () => {
        let countDown = this.state.timeLeft - 1;
        this.setState({ timeLeft: countDown });
        
        if(this.state.timeLeft !== 0) {
            this.updateClock = setTimeout(this.countDown, 1000);
        }
    }

    render() { 
        
        let bgColor = '';
        let resetButton = '';
        
        if(this.state.timeLeft === 0) {
            bgColor = 'done';
            resetButton = 'showTimerButton';
        } else {
            bgColor = 'none';
            resetButton = 'hide';
        }
    
        return(
            <div id='timer'>
                <Heading2 
                    title={
                        'Timer'
                    }
                />
                <p 
                   id='time'
                   className={
                        bgColor
                    }
                >
                    {
                        this.state.timeLeft
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
            </div>
        );
    }
}

export default Timer;