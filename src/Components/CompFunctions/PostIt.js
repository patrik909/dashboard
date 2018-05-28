import React, { Component } from 'react';
import Heading2 from './Parts/Heading2';
import Button from './Parts/Button';
import ViewPostIts from './ViewPostIts';
import Modal from '../Modal';

class PostIt extends Component {

    state = {
        input: '',
        postItArray: '',
        amountOfPostIts: '',
        wordEnding: '',
        divStyle: 'hide',
        view: ''
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
        this.setState({divStyle: 'show'})     
    }

    closePostIts = () => {
        this.setState({divStyle: 'hide'})
    }
    
    
    deletePostIt = (searchValue) => {
        
        const copyOfState = [...this.state.postItArray];
        const filteredState = copyOfState.filter(postit => {
            return postit.timestamp !== searchValue;
        });
        this.setState({ postItArray: filteredState });
        localStorage.setItem('postIts', JSON.stringify(filteredState));
        this.getPostIts()
//        
//        console.log(searchValue)
//        for(let i = 0; i < this.state.postItArray.length; i++){
////            const index = this.state.postItArray.indexOf(searchValue)
//
////  
//                if(this.state.postItArray[i].timestamp === searchValue){
//                    console.log(this.state.postItArray[i].timestamp)
//            
//
//                }
//            console.log(this.state.postItArray)
//            }

        }
                

//        localStorage.setItem('postIts', JSON.stringify(this.state.postItArray));
//        this.getPostIts()
    

    render() {
        console.log(this.state.postItArray)
        return (
            <div id="postIt">
                <Modal element={document.getElementById('modal')}>
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
                </Modal>
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
                        'Se dina Post-Its'
                    }
                />
            </div>
        );
    }
}

export default PostIt;