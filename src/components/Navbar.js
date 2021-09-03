import React from 'react'
import './Navbar.css';
import PropTypes from 'prop-types'
import moon from "../moon.png"
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    

    function handleDark(){
       
            props.modeSwitch();
       
        }
        
    return (
        <>  
            <nav className={`flex-container nav-${props.mode}`}>
                <div className="left-content flex-container">
                    <h1><Link to="/" className="logo">{props.title}</Link></h1>
                </div>
                <div className="Links">
                    <ul className="flex-container">
                        <li><Link to="/" className={`txt-${props.mode} lnk`}>Home</Link></li>
                        <li><Link to="/" className={`txt-${props.mode} lnk`}>Contact</Link></li>
                        <li><Link to="/about" className={`txt-${props.mode} lnk`}>About</Link></li>
                        <li><Link to="/" className={`txt-${props.mode} lnk`}>Services</Link></li>
                    </ul>
                </div>
        
                <div className="right-content flex-container">
                    <input type="text" placeholder="Search" />
                    <button className="btn">Search</button>
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

