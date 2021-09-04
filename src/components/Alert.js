import React from 'react'
import './Alert.css'
export default function Alert(props) {

    return (
        <>
            {props.msg!==null && <div className="alert">
                {props.msg.message}
            </div>}
        </>
    )
}
