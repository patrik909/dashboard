import React, { Component } from 'react';
import Heading2 from './Parts/Heading2';
import InputField from './Parts/InputField';
import Button from './Parts/Button';
import ViewPostIts from './Parts/ViewPostIts';

class PostIt extends Component {

    state = {
        input: '',
        postItArray: []
    }

    componentDidMount(){  
        this.getPostIts()
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }

    postIt = () => {
        this.state.postItArray.unshift(this.state.input);
        localStorage.setItem('postIt', JSON.stringify(this.state.postItArray));
        this.getPostIts()
    }
    
    getPostIts = () => {
        const postIt = localStorage.getItem('postIt');
        this.setState({postItArray: JSON.parse(postIt)})
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
                <InputField 
                    handle={
                        this.handleChange
                    }
                />
                <Button 
                    buttonMission={
                        this.postIt
                    }
                    buttonText={
                        "Post-it"
                    }
                />
                <ViewPostIts 
                    postItArray={
                        this.state.postItArray
                    }
                />
            </div>
        );
    }
}

export default PostIt;