import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className={classes.header}>
            <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png' />
            {props.isAuth ? props.login : <NavLink className={classes.login} to='/login'>Login</NavLink> }
            
        </header>
    )
}

export default Header
