import React, { Component } from 'react';
import Heading2 from './Parts/Heading2';
import Button from './Parts/Button';
import ViewPostIts from './ViewPostIts';
import PostItPopUp from '../PostItPopUp';

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
            this.setAmountPostIt();
        });
    }

    setAmountPostIt = () => {
        if (this.state.postItArray.length > 1) {
            this.setState({
                amountOfPostIts: this.state.postItArray.length,
                wordEnding: 's'
            });
        } else if (this.state.postItArray.length === 0) {
            this.setState({
                amountOfPostIts: 0,
                wordEnding: 's'
            });   
        } else {
            this.setState({
                amountOfPostIts: this.state.postItArray.length
            });
        } 
    }

    handleInput = (event) => {
        this.setState({ input: event.target.value });
    }

    postIt = () => {
        if (this.state.input !== '') {
            const timeStamp = new Date();
            let newPostIt = {
                timestamp: timeStamp,
                postItContent: this.state.input
            }
            this.state.postItArray.unshift(newPostIt);
            localStorage.setItem('postIts', JSON.stringify(this.state.postItArray));
            this.getPostIts();
        }
    }
    
    showPostIts = () => {
        this.setState({ divStyle: 'show' });     
    }

    closePostIts = () => {
        this.setState({ divStyle: 'hide' });
    }
    
    
    deletePostIt = (searchValue) => { 
        const postItArray = [...this.state.postItArray];
        const filteredState = postItArray.filter(postIt => {
            return postIt.timestamp !== searchValue;
        });
        this.setState({ postItArray: filteredState });
        localStorage.setItem('postIts', JSON.stringify(filteredState));
        this.getPostIts()
     }
                
    render() {
        return (
            <div id='postIt'>
                <PostItPopUp 
                   element={
                        document.getElementById('modal')
                    }
                >
                    <ViewPostIts 
                    passData={
                        this.state.postItArray
                    }
                    setDivStyle={
                        this.state.divStyle
                    }
                    getDivStyle={
                        this.closePostIts
                    }
                    deletePostIt={
                        this.deletePostIt
                    }
                    />
                </PostItPopUp>
                <Heading2 
                    title={
                        'Post it'
                    } 
                />
                <p id='amountOfPostIts'>
                    Du har ({ this.state.amountOfPostIts }) Post-It{ this.state.wordEnding }
                </p>
                <textarea 
                   rows='8'
                   maxLength='150'
                   placeholder='Max 150 tecken!'
                   onChange={
                        this.handleInput
                    }
                >
                </textarea>    
                <Button 
                    buttonMission={
                        this.postIt
                    }
                    buttonText={
                        'Post-it'
                    }
                />
                <Button 
                    buttonMission={
                        this.showPostIts
                    }
                    buttonText={
                        'Se dina Post-Its'
                    }
                />
            </div>
        );
    }
}

export default PostIt;