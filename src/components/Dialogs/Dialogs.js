import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogsItem = (props) => {
    let path = '/dialogs/' +  props.id;
    return (
        <div className={`${classes.person} ${classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

let anotherText = React.createRef();


const Dialogs = (props) => {
// ****************************
    const changeText = () => {
        props.dispatch({type: 'TEXT-UPDATE', text: anotherText.current.value})
        // textUpdate(anotherText.current.value);
    }

    const click = () => {
        props.dispatch({type: 'CLICK'})
    }
// ****************************

const dialogs = props.dialogs.map( el => <DialogsItem id={el.id} name={el.name} />);
const messages = props.messages.map( el => <Message message={el.message} />);

    return (
        <div className={classes.container}>
            <div className={classes.dialogs}>
               {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
                {/* ************** */}
                <textarea ref={anotherText} onChange={changeText} value={props.textForDialogs}></textarea>
                <button onClick={click}>send</button>
                {/* ************** */}
            </div>
        </div>
    )
}



export default Dialogs;
