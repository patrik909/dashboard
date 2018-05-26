import React, { Component } from 'react';
import Heading2 from './Parts/Heading2';
import Button from './Parts/Button';

//            {
//                props.postItArray.map((postIt,i) => 
//                    <li key={i}>
//                        {postIt.postItContent}
//                        {postIt.timestamp}
//                    </li>
//                )
//            }

//<button value={item} onClick={this.deletePostIt}>X</button>

class ViewPostIts extends Component {
//function ViewPostIts(props) {
//    if(props.postItArray !== 0) {
//            props.postItArray.map((postIt, i) => {
//        console.log(postIt)
//    })
//        console.log(props.postItArray[0])
    constructor(props) {
        super(props);
        console.log(props)
        this.openPostIt();
   
    }
    state = {
        divStyle: 'hide'
    }
    componentDidMount(){
        this.props.catchDivStyle
        console.log(this.state.divStyle)
    }
//    
//
//        this.openPostIt()
//    this.setstate({divStyle: this.props.catchDivStyle})
    closeViewPostIt = () => {
        this.setState({divStyle: 'hide'});
        console.log("hej")
    }
    
////    
    openPostIt = () => {
        //this.setState({divStyle: this.props.catchDivStyle})
        console.log("hej")
    }
////    this.setstate({divStyle: this.props.catchDivStyle})
//        method(){
//        this.setState({divStyle: this.props.setDivStyle})
//        this.openPostIt()
//    }
render() {

    console.log(this.props.catchDivStyle)
//    console.log(this.state.divStyle)
        return (
            <div id="listPostItsWrapper">
                <div id="listPostItsHeader">
                    <Heading2 
                        title={
                            "Dina Post-Its"
                        }
                    />
                    <Button 
                        buttonMission={
                            this.closeViewPostIt
                        }
                        buttonText={
                            <i className="far fa-times-circle"></i>
                        }
                    /> 
               </div>
               
                <ul>
                    <li>
                        <span>Skriven: 25:25:25</span> 
Över input elements of type "text" create basic single-line text fields. the field has a value set programmatically by setting its value attribute.
                    </li>
                                <li>
                        <span>Skriven: 25:25:25</span> 
Över input elements of type "text" create basic single-line text fields. the field has a value set programmatically by setting its value attribute.
                    </li>
                </ul>
            </div>
        )     
}
 
//    }

}
    
export default ViewPostIts;