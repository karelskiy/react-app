import { connect } from 'react-redux';
import FindUsers from './FindUsers';
import { followFriendsActionCreator,unfollowFriendsActionCreator, loadFriendsActionCreator, clickOnPageActionCreator, loaderActionCreator, getCurrentApiActionCreator} from '../../redux/findUsers-reducer';
import { Component } from 'react';
import * as axios from 'axios';
import React from 'react';

class findUsersAPIContainer extends Component {
    constructor(props) {
        super(props);
        if (this.props.usersData.length === 0) {
            this.props.loader(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
                this.props.loader(false);
                this.props.loadFriends(response.data.items);
            });
        }
        this.handle = this.handle.bind(this);
    }

    handle() {
        this.props.loader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
            this.props.loader(false);
            this.props.loadFriends(response.data.results);
        });
    }

    render() {  
        return (
            <FindUsers usersData={this.props.usersData}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        handle={this.handle}
                        loader={this.props.loaderState}
                        getCurrentApi={this.props.getCurrentApi}/>
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
        loader(loader){
            dispatch(loaderActionCreator(loader))
        },
        getCurrentApi(api){
            dispatch(getCurrentApiActionCreator(api))
        }
    }
}

let FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(findUsersAPIContainer)
export default FindUsersContainer
