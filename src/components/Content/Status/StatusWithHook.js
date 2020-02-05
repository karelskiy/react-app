import React, { useState, useEffect } from 'react'

const StatusWitHook = (props) => {

    let [isFocus, setIsFocus ] = useState(false);
    let [status, setStatus ] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    let active = () => {
        setIsFocus(true);
    }

    let unActive = () => {
        setIsFocus(false);
        props.setStatus(status)
    }

    let changeStatus = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            {!isFocus && <span onDoubleClick={active}>{props.status || "No status"}</span>}
            {isFocus && <input onChange={changeStatus} value={status} onBlur={unActive} autoFocus={true} />}
        </div>
    )
}

export default StatusWitHook