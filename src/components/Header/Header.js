import React from 'react';
import classes from './Header.module.css';
function Header() {
    return (
        <header className ={classes.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png'/>
            <h1 className={classes.item}>lorem ipsum</h1>
        </header>
    )
}

export default Header
