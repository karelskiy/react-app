import React from 'react';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../../axios/api';


let Users = (props) => {

    let follow = (id) => {
        props.preloader(true)
        userAPI.follow(props.id).then(response => {
            if (response.resultCode === 0) {
                props.preloader(false)
                props.follow(id)
            }

        })
    }

    let unfollow = (id) => {
        props.preloader(true)
        userAPI.unfollow(props.id).then(response => {
            if (response.resultCode === 0) {
                props.preloader(false)
                props.unfollow(id)

            }
        })
    }

    return (
        <div className={classes.container}>
            <div className={classes.firstPart}>
                <NavLink to={`profile/${props.id}`}>
                    <img alt='' className={classes.avatar} src={!props.src ? 'https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg' : props.src} />
                </NavLink>
                {props.status ?
                    <a onClick={() => unfollow(props.id)}>unfollow</a> : <a onClick={() => follow(props.id)}>follow</a>}
            </div>
            <div className={classes.innerContainer}>
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.email}</p>
                    <p>{props.phone}</p>
                </div>
                <div className={classes.firstDiv}>
                    <h3>{props.country}</h3>
                    <h3>{props.city}</h3>
                </div>
            </div>
        </div>
    )
}

export default Users;
