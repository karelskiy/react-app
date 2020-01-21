import React from 'react'
import classes from './UsersProfile.module.css'

let UsersProfile = (props) => {
    return (
        <div>
            <img className={classes.avaImg} src={props.currentProfile.photos.large} />
            <h3>{props.currentProfile.aboutMe}</h3>
        </div>
    )
}

export default UsersProfile