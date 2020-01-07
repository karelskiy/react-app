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

const Dialogs = (props) => {
// ****************************
    const click = () => {
        props.click();
    };

    const textUpdate = (event) => {
        props.textUpdate(event.target.value);
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
                <div><textarea placeholder='Enter your message' onChange={textUpdate} value={props.newText}></textarea></div>
                <div><button onClick={click}>send</button></div>
                {/* ************** */}
            </div>
        </div>
    )
}



export default Dialogs;

