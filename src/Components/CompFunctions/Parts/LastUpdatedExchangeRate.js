import React from 'react';
import Heading3 from './Heading3';
import Button from './Button';
import FormateDate from './FormateDate';

function LastUpdatedExchangeRate(props) {
    return (
        <div id="lastUpdated">
            <Heading3 
                title={
                    "Senast uppdaterad"
                } 
            />
            <FormateDate 
                time={
                    props.updated
                } 
            />
            <Button 
                buttonMission={
                    props.updateButton
                }
                buttonText={
                    "Uppdatera"
                }
            />
        </div>
    );
}
    
export default LastUpdatedExchangeRate;