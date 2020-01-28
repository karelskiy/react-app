import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className={classes.header}>
            <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png' />
            <div>
                {props.isAuth ? <div>{props.login}  <span onClick={props.deleteLogin}>x</span></div>  : <NavLink className={classes.login} to='/login'>Login</NavLink>}
            </div>


        </header>
    )
}

export default Header
