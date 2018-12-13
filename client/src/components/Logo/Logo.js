import React from'react';
import './Logo.css';
import BrainLogo from './brain.png';
import Tilt from 'react-tilt';


const Logo = () =>{
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 175, width: 175 }} >
                <div className="Tilt-inner pa3">
                    <img style={{padding: '5px'}} src={BrainLogo} alt=""/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;
