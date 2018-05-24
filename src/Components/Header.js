import React from 'react';
import Clock from './CompFunctions/Clock';
import Heading1 from './Heading1';

function Header(){
    return(
        <header>
            <Heading1 />
            <Clock />
        </header>
    );
}

export default Header;