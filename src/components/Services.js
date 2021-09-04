import React from 'react'
import './Services.css'
export default function About(props) {
    return (
        <>
            <div className="services-container">
                <h1 className={`title-txt txt-${props.mode}`}>Services</h1>
                <div className="services-content">
                    <p className={`txt-${props.mode}`}> This Page will be Updated Soon...</p><br />
                </div>
            </div>
        </>
    )
}
