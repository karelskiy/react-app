import React from 'react';
import Users from './Users/Users';

function FindUsers(props) {
   
    let users = props.usersData.map(el => (<Users key={el.id} id={el.id} follow={props.follow} src={el.src} name={el.name} status={el.status} desire={el.desire} country={el.location.country} city={el.location.city} />))
    return (
        <div>
            {users}
        </div>
    )
}

export default FindUsers
