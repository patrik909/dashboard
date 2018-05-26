import React, { Component } from 'react';
import Timer from './CompFunctions/Timer';
import WeatherApp from './CompFunctions/WeatherApp';
import PostIt from './CompFunctions/PostIt';
import ViewPostIts from './CompFunctions/ViewPostIts';
import ExchangeRate from './CompFunctions/ExchangeRate';

class Main extends Component {
    
    state = {
        divStyle: ''
    }
    
    postItsData = (val) => {
        this.setState({divStyle: val})
        console.log(val);
    }
    
    postItsData = (val) => {
        this.setState({divStyle: val})
        console.log(val);
    }
    
    render() {
        console.log(this.state.divStyle)
        return(
            <main>
                <Timer />
                <PostIt 
                    setDivStyle={
                        this.postItsData
                    }
                />
                <ViewPostIts 
                    setDivStyle={
                        this.postItsData
                    }
                catchDivStyle={
            this.state.divStyle
            }
                    className={
                        this.state.divStyle
                    }
                    />
                <WeatherApp />
                <ExchangeRate />        
            </main>
        );       
    }
}

export default Main;