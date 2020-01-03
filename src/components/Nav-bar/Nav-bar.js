import React from 'react';
import classes from './Nav-bar.module.css';
import {NavLink} from 'react-router-dom'

function Nav() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={`${classes.nav} ${classes.active}`}><NavLink activeClassName={classes.active} to='/profile'>Profile</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='/dialogs'>Dialogs</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='/news'>News</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='/music'>Music</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='/settings'>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;
