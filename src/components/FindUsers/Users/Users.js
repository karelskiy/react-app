import React from 'react';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


let Users = (props) => {

    let follow = (id) => {
        props.preloader(true)
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
            withCredentials: true,
            headers: {
                'API-KEY': '9014ba16-ca0e-42ec-800a-507d9972faf5'
            }
        }).then(response => {
            if (response.resultCode === 0) {
                props.preloader(false)
                props.follow(id)
            }

        })
    }

    let unfollow = (id) => {
        props.preloader(true)
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': '9014ba16-ca0e-42ec-800a-507d9972faf5'
            }
        }).then(response => {
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
