import React from 'react';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';


let Users = (props) => {

    let follow = (id) => {
        props.isFollow(id)
    }

    let unfollow = (id) => {
       props.isUnfollow(id)
    }

    return (
        <div className={classes.container}>
            <div className={classes.firstPart}>
                <NavLink to={`profile/${props.id}`}>
                    <img alt='' className={classes.avatar} src={!props.src ? 'https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg' : props.src} />
                </NavLink>
                {props.status ?
                    <button disabled={props.arrToggles.some(i=> i === props.id)} onClick={() => unfollow(props.id)}>unfollow</button> : <button disabled={props.arrToggles.some(i=> i === props.id)} onClick={() => follow(props.id)}>follow</button>}
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
