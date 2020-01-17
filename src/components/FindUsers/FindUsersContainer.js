import { connect } from 'react-redux';
import FindUsers from './FindUsers';
import { findUsersActionCreator, loadFriendsActionCreator, clickOnPageActionCreator } from '../../redux/findUsers-reducer';
import { Component } from 'react';
import * as axios from 'axios';
import React from 'react';

class findUsersAPIContainer extends Component {
    constructor(props) {
        super(props);
        if (this.props.usersData.length === 0) {
            axios.get(`https://randomuser.me/api/?results=4&inc=name,location,phone,picture,gender,email&nat=us`).then(response => {
                this.props.loadFriends(response.data.results);
            });
        }
        this.handle = this.handle.bind(this);
    }

    handle() {
        axios.get(`https://randomuser.me/api/?results=4&inc=name,location,phone,picture,gender,email&nat=us`).then(response => {
            this.props.loadFriends(response.data.results);
        });
    }

    render() {  
        return (
            <FindUsers usersData={this.props.usersData}
                        follow={this.props.follow}
                        handle={this.handle}/>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.findUsersPage.usersData,
        pageSize: state.findUsersPage.pageSize,
        totalPageCount: state.findUsersPage.totalPageCount,
        choosedPage: state.findUsersPage.choosedPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow(id) {
            dispatch(findUsersActionCreator(id))
        },
        loadFriends(users) {
            dispatch(loadFriendsActionCreator(users))
        },
        clickOnPage(id) {
            dispatch(clickOnPageActionCreator(id))
        }
    }
}

let FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(findUsersAPIContainer)
export default FindUsersContainer
