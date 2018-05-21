import React, { Component } from 'react';

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
                <input type="text" id="rememberThis" onChange={ this.handleChange }></input>
                <button type="button" id="rememberThisButton" onClick={this.postIt}>POST-IT</button>
                <button type="button" id="rememberThisButton" onClick={this.getPostIts}>VIEW POST-IT</button>
                <ul>
                    {this.state.postItArray.map((item,i) => <li key={i}>{item}<button value={item} onClick={this.deletePostIt}>X</button></li>)}
                </ul>
            </div>
        );
    }
}

export default PostIt;