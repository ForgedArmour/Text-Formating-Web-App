import React from 'react'
import './About.css'
export default function About(props) {
    return (
        <>
            <div className="container">
                <h1 className={`title-txt txt-${props.mode}`}>About TextUtils</h1>
                <div className="about-content">
                    <p className={`txt-${props.mode}`}> Hi Iam Ajay and iam the creator of TextUtils.</p><br />
                    <p className={`txt-${props.mode}`}>TextUtils is a web application that helps you to format text. You get many features in our application like removing unwantend spacing, Converting to upper case, downloading the text as document and many more.</p>
                </div>
            </div>
        </>
    )
}
