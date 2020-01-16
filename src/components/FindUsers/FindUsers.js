import React, { Component } from 'react';
import Users from './Users/Users';
import * as axios from 'axios';
import classes from './FindUsers.module.css';



class FindUsers extends Component {
    constructor(props) {
        super(props);
        if (props.usersData.length === 0) {
            this.handle();
        }
        this.handle = this.handle.bind(this)
    }

    handle() {
        axios.get('https://randomuser.me/api/?results=4&inc=name,location,phone,picture,gender,email&nat=us').then(response => {
            this.props.loadFriends(response.data.results);
        });
    }

    render() {
        let users = this.props.usersData.map(el => (<Users follow = {this.props.follow} id={el.id} key={el.id} status={el.gender} src={el.picture.large} name={el.name.first + ' ' + el.name.last} city={el.location.city} country={el.location.state} email={el.email} phone={el.phone} />))

        return (
            <div>
                {users}
                <button onClick={this.handle} className={classes.loadButton}>Load</button>
            </div>
        )
    }
}

export default FindUsers


    // props.loadFriends([
    //     { id: 1, src: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg', status: true, name: 'Svetlana D.', desire: 'I`m looking for a job right now...', location: { country: 'Belarus', city: 'Minsk' } },
    //     { id: 2, src: 'https://mdbootstrap.com/img/Photos/Avatars/img%20%289%29.jpg', status: false, name: 'Mihail I.', desire: 'I like football!!!', location: { country: 'Ukraine', city: 'Kiev' } },
    //     { id: 3, src: 'https://mdbootstrap.com/img/Photos/Avatars/img(30).jpg', status: false, name: 'Katarina St.', desire: 'Why do guys younger than me like me?', location: { country: 'England', city: 'London' } },
    // ]
