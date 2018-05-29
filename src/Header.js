import React from 'react';
import Clock from './Components/Clock';
import Heading1 from './Components/Parts/Heading1';

function Header() {
    return(
        <header>
            <Heading1 />
            <Clock />
        </header>
    );
}

export default Header;