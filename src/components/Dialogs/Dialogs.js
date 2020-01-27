import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/formsControl/FormsControl';
import { required, maxLength } from '../../utilits/validators/validators';


const DialogsItem = (props) => {
    return (
        <div className={`${classes.person} ${classes.active}`}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    const dialogs = props.dialogs.map(el => <DialogsItem id={el.id} key={el.id} name={el.name} />);
    const messages = props.messages.map(el => <Message message={el.message} key={el.id} />);

    const onSubmit = (dataForm) => {
        props.click(dataForm.textarea)
    }

    return (
        <div className={classes.container}>
            <div className={classes.dialogs}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
                <DialogsReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

let maxLength20 = maxLength(20);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder='Enter your message' name={'textarea'} component={Textarea} validate={[required, maxLength20]}/></div>
            <div><input type='submit'/></div>
        </form>
    )
}

let DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm)


export default Dialogs;

