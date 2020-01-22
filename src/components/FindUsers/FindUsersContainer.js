import { connect } from 'react-redux';
import { followFriendsActionCreator, unfollowFriendsActionCreator, loadFriendsActionCreator, clickOnPageActionCreator, loaderActionCreator } from '../../redux/findUsers-reducer';
import { Component } from 'react';
import * as axios from 'axios';
import React from 'react';
import FindUsers from './FindUsers';


class findUsersAPIContainer extends Component {
    componentDidMount() {
        if (this.props.usersData.length === 0) {
            this.props.loader(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${this.props.currentPage}`,{
                withCredentials: true
            }).then(response => {
                this.props.loader(false);
                this.props.loadFriends(response.data.items);
            });
        }
    }

    clickOnPage = (i) => {
        this.props.clickOnPage(i);
        this.props.loader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}&page=${i}`,{
            withCredentials:true
        }).then(response => {
            this.props.loader(false);
            this.props.loadFriends(response.data.items);
        });
    }

    render() {
        return (
            <FindUsers usersData={this.props.usersData}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                loader={this.props.loaderState}
                totalCountPerson={this.props.totalCountPerson}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                clickOnPage={this.clickOnPage}
                loadFriends={this.props.loadFriends}
                preloader={this.props.loader}
                />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.findUsersPage.usersData,
        loaderState: state.findUsersPage.loaderState,
        currentPage: state.findUsersPage.currentPage,
        pageSize: state.findUsersPage.pageSize,
        totalCountPerson: state.findUsersPage.totalCountPerson

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow(id) {
            dispatch(followFriendsActionCreator(id))
        },
        unfollow(id) {
            dispatch(unfollowFriendsActionCreator(id))
        },
        loadFriends(users) {
            dispatch(loadFriendsActionCreator(users))
        },
        clickOnPage(id) {
            dispatch(clickOnPageActionCreator(id))
        },
        loader(loader) {
            dispatch(loaderActionCreator(loader))
        },

    }
}

let FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(findUsersAPIContainer)
export default FindUsersContainer
