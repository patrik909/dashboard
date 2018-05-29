import React from 'react';
import ConvertTime from './FormatedDate';

function LastUpdatedTime(props) {
    return <p id='lastUpdatedTime'> <FormatedDate time={ props.time } /> </p>;
}
    
export default LastUpdatedTime;