import React from 'react';
import classes from './Users.module.css';


let Users = (props) => {
    
    let followFriends = (event) => {
        props.follow(props.id);
        event.preventDefault();
    }

    return (
        <div className={classes.container}>
            <div className={classes.firstPart}>
                <img alt='' className={classes.avatar} src={props.src} />
                <a onClick={followFriends} href='/'>{props.status ? 'Unfollow' : 'Follow'}</a>
            </div>
            <div className={classes.innerContainer}>
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.desire}</p>
                </div>
                <div>
                    <h3>{props.country}</h3>
                    <h3>{props.city}</h3>
                </div>
            </div>
        </div>
    )
}

export default Users;
