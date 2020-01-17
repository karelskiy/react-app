import React from 'react';
import Users from './Users/Users';
import classes from './FindUsers.module.css';
import preloader from '../../Spinner-0.9s-200px (1).svg'



let FindUsers = (props) => {
    let users = props.usersData.map(el => (<Users follow={props.follow} id={el.id} key={el.id} status={el.gender} src={el.picture.large} name={el.name.first + ' ' + el.name.last} city={el.location.city} country={el.location.state} email={el.email} phone={el.phone} />))

    return (
        <div>
            {props.loader ? <div className={classes.preloader}>
                <div className={classes.spinner}></div>
            </div> : null}
            {users}
           <button onClick={props.handle} className={classes.loadButton}>Load</button>
            
        </div>
    )
}

export default FindUsers
