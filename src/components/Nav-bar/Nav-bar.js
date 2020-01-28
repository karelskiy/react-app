import React from 'react';
import classes from './Nav-bar.module.css';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar'
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../common/formsControl/FormsControl';
import { required, maxLength } from '../../utilits/validators/validators';


export let counter = 0;

function Nav(props) {

    const friends = props.friends.map(el => <Sidebar key={el.id} img={el.img} response={el.response} />)

    // **********************************

    const onSubmit = (dataForm) => {
        props.sayHi(dataForm.navBarForm, counter);
        counter++;
        if (counter >= 3) counter = 0;
    }
    // **********************************

    return (
        <div className={classes.nav}>
            <nav >
                <ul>
                    <li className={`${classes.nav} ${classes.active}`}><NavLink activeClassName={classes.active} to='/profile'>Profile</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/dialogs'>Dialogs</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/find-users'>Find Users</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/music'>Music</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/settings'>Settings</NavLink></li>
                </ul>
            </nav>
            <div className={classes.friendsDiv}>
                <h2 className={classes.h2}>Friends</h2>
                <div className={classes.friendsImg}>{friends}</div>
                <NavBarReduxForm onSubmit={onSubmit} />

            </div>
        </div>
    )
}

let maxlength10 = maxLength(10);

let NavBarForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder="Say hi :)" name='navBarForm' component={Textarea} validate={[required, maxlength10]}></Field>

            <button className={classes.buttonSend}>send</button>
        </form>

    )
}

let NavBarReduxForm = reduxForm({form: 'navBarForm'})(NavBarForm)

export default Nav;
