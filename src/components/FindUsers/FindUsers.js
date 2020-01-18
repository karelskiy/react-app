import React from 'react';
import Users from './Users/Users';
import classes from './FindUsers.module.css';

let FindUsers = (props) => {
    let users = props.usersData.map(el => (<Users getCurrentApi={props.getCurrentApi} follow={props.follow} id={el.id} key={el.id} status={el.gender} src={el.picture.large} name={el.name.first + ' ' + el.name.last} city={el.location.city} country={el.location.state} email={el.email} phone={el.phone} />))

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
