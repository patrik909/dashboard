import React from 'react';

function TimerButton(props) {
    console.log(props)
    if(props.timeLeft === 0) {
        return <button id="resetButton" onClick={props.resetTimer}>Reset Timer</button>
    } else {
       return <button id="timerButton" onClick={props.activateTimer}>Start Timer</button>
    } 
}
    
export default TimerButton;

//
//
//    timerButton = () => {
//        if(this.state.timeLeft === 0) {
//            return <button id="resetButton" onClick={this.resetTimer}>Reset Timer</button>
//        } else {
//            return <button id="timerButton" onClick={this.activateTimer}>Start Timer</button>
//        } 
//    }
//    
//    divStyle = {
//        backgroundColor: 'blue'
//            };
//
//
//    render() { 
//        
//let className = ''
//    if(this.state.timeLeft === 0) {
//         className = 'done'
//    } else {
//        className = 'timer'
//    }
//
//        return(
//            <div id="timer" className={className}>
//                <div>{this.state.timeLeft}</div>
//                {this.timerButton()}
//            </div>
//        )
//    }
//}
//
//export default Timer;