import React from 'react';

function Box(props){
    return (
        <div className='s-box'>
            <div className='s-b-img'>
                <img src={props.image} alt={props.alte}/>
            </div>
            <div className='s-b-text'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, nostrum beatae! Vel quibusdam recusandae facere.
                </p>
                <a href='#' className='cv-btn'>{props.buton}</a>
            </div>
        </div>
    )
}
export default Box;