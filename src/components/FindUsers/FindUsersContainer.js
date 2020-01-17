import { connect } from 'react-redux';
import FindUsers from './FindUsers';
import { findUsersActionCreator, loadFriendsActionCreator, clickOnPageActionCreator, loaderActionCreator } from '../../redux/findUsers-reducer';
import { Component } from 'react';
import * as axios from 'axios';
import React from 'react';

class findUsersAPIContainer extends Component {
    constructor(props) {
        super(props);
        if (this.props.usersData.length === 0) {
            this.props.loader(true);
            axios.get(`https://randomuser.me/api/?results=4&inc=name,location,phone,picture,gender,email&nat=us`).then(response => {
                this.props.loader(false);
                this.props.loadFriends(response.data.results);
            });
        }
        this.handle = this.handle.bind(this);
    }

    handle() {
        this.props.loader(true);
        axios.get(`https://randomuser.me/api/?results=4&inc=name,location,phone,picture,gender,email&nat=us`).then(response => {
            this.props.loader(false);
            this.props.loadFriends(response.data.results);
        });
    }

    render() {  
        return (
            <FindUsers usersData={this.props.usersData}
                        follow={this.props.follow}
                        handle={this.handle}
                        loader={this.props.loaderState}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.findUsersPage.usersData,
        pageSize: state.findUsersPage.pageSize,
        totalPageCount: state.findUsersPage.totalPageCount,
        choosedPage: state.findUsersPage.choosedPage,
        loaderState: state.findUsersPage.loaderState
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
        },
        loader(loader){
            dispatch(loaderActionCreator(loader))
        }
    }
}

let FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(findUsersAPIContainer)
export default FindUsersContainer
