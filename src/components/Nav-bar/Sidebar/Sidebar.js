import React from 'react';
import classes from './Sidebar.module.css'

const Sidebar = (props) => {
    return (
        <div>
            <img alt='' className={classes.img} src={props.img} />
            <p>{props.response}</p>
        </div>

    )
}


export default Sidebar;
