import React from 'react';
import Navbar from './Navbar';

function Header(){
    return(
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1><span>DRUG NAME GENERATOR</span></h1>
                <p className='details'>generate brandable drug name using artificial intelligence</p>
                <div className='header-btns'>
                    <a href="a" className='cv-btn'>Know more</a>
                    <a href="a" className='cv-btn1'>About us</a>
                </div>
            </div>
        </div>
    )
}

export default Header;