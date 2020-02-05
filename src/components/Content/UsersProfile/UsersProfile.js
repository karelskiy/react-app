import React from 'react'
import classes from './UsersProfile.module.css'
import Axios from 'axios';
import { userAPI } from '../../../axios/api';


let UsersProfile = (props) => {


    return (
        <div>
            <img className={classes.avaImg} src={props.currentProfile.photos.large} />
            <h3>{props.currentProfile.aboutMe}</h3>       
        </div>
    )
}

export default UsersProfile