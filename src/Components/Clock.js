import React from 'react';
import FormateDate from './SubComponents/FormateDate';

function Clock() {
    return(
        <div id='clock'>
            <FormateDate 
                clock={
                    true
                } 
            />
        </div>
    );    
}

export default Clock;