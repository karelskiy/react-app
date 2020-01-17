import React, { Component } from 'react';
import Users from './Users/Users';
import * as axios from 'axios';
import classes from './FindUsers.module.css';



let FindUsers = (props) => {

    let users = props.usersData.map(el => (<Users follow={props.follow} id={el.id} key={el.id} status={el.gender} src={el.picture.large} name={el.name.first + ' ' + el.name.last} city={el.location.city} country={el.location.state} email={el.email} phone={el.phone} />))

    return (
        <div>
            {users}
            <button onClick={props.handle} className={classes.loadButton}>Load</button>
        </div>
    )
}

export default FindUsers
