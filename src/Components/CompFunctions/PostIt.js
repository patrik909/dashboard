import React, { Component } from 'react';
import Heading2 from './Parts/Heading2';
import Button from './Parts/Button';

class PostIt extends Component {

    state = {
        input: '',
        postItArray: '',
        amountOfPostIts: '',
        wordEnding: '',
        divStyle: 'hide'
    }

    componentDidMount(){
        this.getPostIts();
    }

    getPostIts = () => {
        const postIts = localStorage.getItem('postIts');
        this.setState({
            postItArray: JSON.parse(postIts) || []
        }, () => {
//            console.log(this.state.postItArray)
            this.setAmountPostIt();
            console.log(this.state.postItArray)
        });
        this.demoMethod();
    }

    setAmountPostIt = () => {
        if(this.state.postItArray.length > 1) {
            this.setState({
                amountOfPostIts: this.state.postItArray.length,
                wordEnding: 's'
            });
        } else if(this.state.postItArray.length === 0) {
            this.setState({
                amountOfPostIts: 0,
                wordEnding: 's'});   
        } else {
            this.setState({
                amountOfPostIts: this.state.postItArray.length
            });
        } 
    }

    handleChange = (event) => {
        this.setState({input: event.target.value});
    }

    postIt = () => {
        const timeStamp = new Date();
        let newPostIt = {
            timestamp: timeStamp,
            postItContent: this.state.input
        }
        this.state.postItArray.unshift(newPostIt);
        localStorage.setItem('postIts', JSON.stringify(this.state.postItArray));
        
        this.getPostIts();
    }
    
    showPostIts = () => {
        this.props.setDivStyle('show');
    }
    
    closePost = () => {
        
    }
    
    demoMethod = () => {
    }
    
    deletePostIt = (event) => {
        const searchValue = this.state.postItArray.indexOf(event.target.value);
        this.state.postItArray.splice(searchValue, 1);
        localStorage.setItem('postIt', JSON.stringify(this.state.postItArray));
        this.getPostIts()
    }
    
    render() {

        return (
            <div id="postIt">
                <Heading2 
                    title={
                        "Post it"
                    } 
                />
                <p id="amountOfPostIts">
                    Du har ({this.state.amountOfPostIts}) Post-It{this.state.wordEnding}
                </p>
                <textarea 
                   rows="8"
                   maxLength="150"
                   placeholder="Max 150 tecken!"
                   onChange={
                        this.handleChange
                    }
                >
                </textarea>    
                <Button 
                    buttonMission={
                        this.postIt
                    }
                    buttonText={
                        "Post-it"
                    }
                />
                <Button 
                    buttonMission={
                        this.showPostIts
                    }
                    buttonText={
                        "Se dina Post-Its"
                    }
                />
            </div>
        );
    }
}

export default PostIt;