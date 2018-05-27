import React from 'react';
import Heading2 from './Heading2';
import Button from './Button';

//            {
//                props.postItArray.map((postIt,i) => 
//                    <li key={i}>
//                        {postIt.postItContent}
//                        {postIt.timestamp}
//                    </li>
//                )
//            }

//<button value={item} onClick={this.deletePostIt}>X</button>
//
//                    <li>
//                        <span>Skriven: 25:25:25</span> 
//Över input elements of type "text" create basic single-line text fields. the field has a value set programmatically by setting its value attribute.
//                    </li>
//                                <li>
//                        <span>Skriven: 25:25:25</span> 
//Över input elements of type "text" create basic single-line text fields. the field has a value set programmatically by setting its value attribute.
//                    </li>

function ViewPostIts(props) {
    console.log(props.postItArray)
//    let list = '';
//    for(let i = 0; i < props.postItArray.length; i++) {
//        console.log(props.postItArray[i].timestamp)
//        console.log(props.postItArray[i].postItContent)
//    }
//    return props.postItArray.map((postIt) => {
//        return (
//            <li key={postIt.timestamp}>{postIt.timestamp}</li>
//            );
//    })
//        p
//        return (
//            <div 
//                id="listPostItsWrapper"
//  
//            >
//                <div id="listPostItsHeader">
//                    <Heading2 
//                        title={
//                            "Dina Post-Its"
//                        }
//                    />
//                    <Button 
//                        buttonMission={
//                           "hej"
//                        }
//                        buttonText={
//                            <i className="far fa-times-circle"></i>
//                        }
//                    /> 
//               </div>
//               
//                <ul>
//
//                </ul>
//            </div>
//        )     

}
    
export default ViewPostIts;