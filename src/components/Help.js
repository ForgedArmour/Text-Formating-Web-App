import React from 'react'
import './Help.css'
export default function help(props) {
    return (
        <>
            <div className="help-container">
                <h1 className={`title-txt txt-${props.mode}`}>How To Use</h1>
                <div className="help-content">
                    <h2 className={`help-title txt-${props.mode}`}><u> Buttons</u></h2><br />
                    <table className="tbl">
                        <tr>
                            <th className={`txt-${props.mode}`}>UpperCase</th>
                            <td className={`txt-${props.mode}`}>Convert text to UpperCase</td>
                        </tr>
                        <tr>
                            <th className={`txt-${props.mode}`}>LowerCase</th>
                            <td className={`txt-${props.mode}`}>Convert text to LowerCase</td>
                        </tr>
                        <tr>
                            <th className={`txt-${props.mode}`}>Clear</th>
                            <td className={`txt-${props.mode}`}>Clears the textarea</td>
                        </tr>
                        <tr>
                            <th className={`txt-${props.mode}`}>Copy</th>
                            <td className={`txt-${props.mode}`}>Copies the text to clipboard</td>
                        </tr>
                        <tr>
                            <th className={`txt-${props.mode}`}>Format</th>
                            <td className={`txt-${props.mode}`}>Removes extra spaces and extra empty lines</td>
                        </tr>
                    </table>
                    {/* <p className={`txt-${props.mode} help-text`}> <br />
                   <b><span>Clear</span></b>  : clear the textarea <br />
                    <b><span>Format</span> </b> : remove extra spaces and extra empty lines<br />
                   <b><span>Copy</span> </b>   : Copies the text to clipboard
                    </p><br /> */}
                </div>
            </div>
        </>
    )
}
