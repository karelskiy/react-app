import React from 'react'
import classes from './UsersProfile.module.css'

let UsersProfile = (props) => {
    return (
        <div>
            <img className={classes.avaImg} src={props.picture.large} />
            <h3>{props.name.first + ' ' + props.name.last}</h3>
        </div>
    )
}

export default UsersProfile