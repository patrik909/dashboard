import React, { Component } from 'react';

class PostIt extends Component {

    state = {
        input: ''
    }

    componentDidMount(){  

    }

    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }

    postIt = () => {
        console.log(this.getPostIts())
        console.log(this.state.input);
        //localStorage.setItem('postIt', JSON.stringify(postThis));
    }
    
    getPostIts = () => {
        
//        const todos = localStorage.getItem('postIt');
//        console.log(JSON.parse(todos))
    }
    
 
    render() {
          console.log(this.getPostIts())
        return (
            <div id="postIt">
                <input type="text" id="rememberThis" onChange={ this.handleChange }></input>
                <button type="button" id="rememberThisButton" onClick={this.postIt}>POST-IT</button>
            </div>
        );
    }
}

export default PostIt;