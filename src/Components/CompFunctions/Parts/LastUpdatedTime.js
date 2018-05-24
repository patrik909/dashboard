import React from 'react';
import ConvertTime from './ConvertTime';

function LastUpdatedTime(props) {
    return <p id="lastUpdatedTime"> <ConvertTime time={props.time} /> </p>;
}
    
export default LastUpdatedTime;