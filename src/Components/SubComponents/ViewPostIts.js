import React from 'react';
import Heading2 from '../Parts/Heading2';
import Button from '../Parts/Button';

function ViewPostIts(props) {

    function closePostIts() {
        props.getDivStyle();
    }
    function deletePostIt(event) {
        let value = event.target.value;
        props.deletePostIt(value);
    }
    function convertTimestamp(timestamp) {
        const timestampDate = timestamp.substr(0,10);
        const timestampTime = timestamp.substr(11, 5);
        
        return timestampDate + ' | ' + timestampTime;
    }

    if (props.passData.length !== 0) {
        return (
            <div 
               id='viewPostItWrapper' 
               className={
                    props.setDivStyle
                }
            >
                <div id='viewPostItWrapperHeader'>
                    <Heading2 
                       title={
                            'Dina Post-its'
                        }
                    /> 
                    <Button 
                        buttonMission={
                            closePostIts
                        }
                        buttonText={
                            <i className='far fa-times-circle'></i>
                        }
                    />  
                </div>
                <ul id='viewPostItUl'>
                    {
                        props.passData.map((postIt, i) => {
                            return (
                                <li 
                                    key={
                                        i
                                    }
                                >
                                    <span>
                                        {
                                            convertTimestamp(postIt.timestamp)
                                        }                        
                                    </span>
                                    <div className='underline'></div>
                                    {
                                        postIt.postItContent
                                    }
                                    <Button 
                                        value={
                                            postIt.timestamp
                                        }
                                        buttonMission={
                                          deletePostIt
                                        }
                                        buttonText={
                                            'Ta bort'
                                        }
                                    />
                                </li>
                            );
                        })   
                    }
                </ul>            
            </div>
        );
    } else {
        return null;
    }
}
export default ViewPostIts;