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
function ViewPostIts(props) {
//    if(props.postItArray !== 0) {
//            props.postItArray.map((postIt, i) => {
//        console.log(postIt)
//    })
//        console.log(props.postItArray[0])

        return (
            <div id="listPostItsWrapper" className={props.divStyle}>
                <div id="listPostItsHeader">
                    <Heading2 
                        title={
                            "Dina Post-Its"
                        }
                    />
                    <Button 
                        buttonMission={
                            "hej"
                        }
                        buttonText={
                            <i className="fas fa-times"></i>
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
//    }

}
    
export default ViewPostIts;