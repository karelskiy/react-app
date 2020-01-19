import React from 'react';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';


let Users = (props) => {


    let followFriends = (event) => {
        event.preventDefault();
        props.follow(props.id);
    }

    let unfollowFriends = (event) => {
        event.preventDefault();
        props.unfollow(props.id)
    }


    let getCurrentApi = () => {
        props.getCurrentApi(props.id);
        
    }

    let name = props.name.split(' ').join('').toLowerCase()
    return (
        <div className={classes.container}>
            <div className={classes.firstPart}>
                <NavLink onClick={getCurrentApi} to={`profile/${name}`}>
                    <img alt='' className={classes.avatar} src={!props.src ? 'https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg' : props.src} />
                </NavLink>
                {props.status ? <a onClick={unfollowFriends}>unfollow</a> : <a onClick={followFriends}>follow</a>}
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
