import { connect } from 'react-redux';
import { isToggleActionCreator, followFriendsActionCreator, unfollowFriendsActionCreator, loadFriendsActionCreator, clickOnPageActionCreator, loaderActionCreator } from '../../redux/findUsers-reducer';
import { Component } from 'react';
import React from 'react';
import FindUsers from './FindUsers';
import { userAPI } from '../../axios/api';


class findUsersAPIContainer extends Component {
    componentDidMount() {
        if (this.props.usersData.length === 0) {
            this.props.loader(true);
            userAPI.getUsers(this.props.pageSize, this.props.currentPage).then(response => {
                this.props.loader(false);
                this.props.loadFriends(response.items);
            });
        }
    }

    clickOnPage = (i) => {
        this.props.clickOnPage(i);
        this.props.loader(true);
        userAPI.getUsers(this.props.pageSize, i).then(response => {
            this.props.loader(false);
            this.props.loadFriends(response.items);
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
                toggleButton={this.props.toggleButton}
                arrToggles={this.props.arrToggles}
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
        totalCountPerson: state.findUsersPage.totalCountPerson,
        arrToggles: state.findUsersPage.arrToggles

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
        toggleButton(state, id){
            dispatch(isToggleActionCreator(state, id))
        }

    }
}

let FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(findUsersAPIContainer)
export default FindUsersContainer
