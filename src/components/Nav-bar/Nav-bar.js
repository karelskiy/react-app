import React from 'react';
import classes from './Nav-bar.module.css';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar'
import { changeOurTextActionCreator, sayHiActionCreator } from '../../redux/sidebar-reducer';

export let counter = 0;
let textForResponse;


function Nav(props) {

    const friends = props.friends.map(el => <Sidebar img={el.img} response={el.response}/>)

    // **********************************
    const sayHi =() => {
        props.sayHi(textForResponse);
        counter++;
        if(counter >= 3) counter = 0;
    }

    const changeOurText = (event) => {
        textForResponse = event.target.value;
        props.changeOurText(event.target.value)
    }

    // **********************************

    return (
        <div className={classes.nav}>
            <nav >
                <ul>
                    <li className={`${classes.nav} ${classes.active}`}><NavLink activeClassName={classes.active} to='/profile'>Profile</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/dialogs'>Dialogs</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/news'>News</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/music'>Music</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/settings'>Settings</NavLink></li>
                </ul>
            </nav>
            <div className={classes.friendsDiv}>
                <h2 className={classes.h2}>Friends</h2>
                <div className={classes.friendsImg}>{friends}</div>
                <textarea placeholder="Say hi :)" onChange={changeOurText} value={props.text}></textarea>
                <div><button onClick={sayHi} className={classes.buttonSend}>send</button></div>
            </div>
        </div>
    )
}

export default Nav;
