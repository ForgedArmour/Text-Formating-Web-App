import React from 'react'
import './Navbar.css';
import PropTypes from 'prop-types'
import moon from "../moon.png"
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    

    function handleDark(){
       
            props.modeSwitch();
       
        }
        
    return (
        <>  
            <nav className={`flex-container nav-${props.mode}`}>
                <div className="left-content flex-container">
                    <h1><a href="/" className="logo">{props.title}</a></h1>
                </div>
                <div className="Links">
                    <ul className="flex-container">
                        {/* <li><a href="/" className={`txt-${props.mode} lnk`}>Home</a></li> */}
                        {/* <li><a href="/about" className={`txt-${props.mode} lnk`}>About</a></li>
                        <li><a href="/services" className={`txt-${props.mode} lnk`}>Services</a></li> */}
                    </ul>
                </div>
        
                <div className="right-content flex-container">
                    <input type="text" placeholder="Search" />
                    <button className={`btn-${props.mode}`}>Search</button>
                    <img src={moon} alt="" className="mBtn" onClick={handleDark} />
                </div>
            </nav>    
        </>
    );
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title : "Title here"
// };

