import React from 'react';
import Users from './Users/Users';
import classes from './FindUsers.module.css';

let FindUsers = (props) => {
    let users = props.usersData.map(el => (<Users getCurrentApi={props.getCurrentApi} unfollow={props.unfollow} follow={props.follow} id={el.id} key={el.id} status={el.followed} src={el.photos.large} name={el.name} />))

    return (
        <div>
            {props.loader ? <div className={classes.preloader}>
                <div className={classes.spinner}></div>
            </div> : null}
            {users}
            {props.loader ? null : <button onClick={props.handle} className={classes.loadButton}>Load</button>}


        </div>
    )
}

export default FindUsers
