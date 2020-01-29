import { connect } from 'react-redux';
import { clickOnPageActionCreator, getUsersThunkCreator, isFollowThunkCreator, isUnfollowThunkCreator } from '../../redux/findUsers-reducer';
import { Component } from 'react';
import React from 'react';
import FindUsers from './FindUsers';
import { compose } from 'redux';
import { getUsersData, getLoaderState, getCurrentPage, getPageSize, getTotalCountPerson, getArrToggles } from '../../redux/users-selector';


class findUsersAPIContainer extends Component {
    componentDidMount() {
        if (this.props.usersData.length === 0) {
            this.props.getUsers(this.props.pageSize, this.props.currentPage)
        }
    }

    clickOnPage = (i) => {
        this.props.clickOnPage(i);
        this.props.getUsers(this.props.pageSize, i)

    }

    render() {
        return (
            <FindUsers usersData={this.props.usersData}

                loader={this.props.loaderState}
                totalCountPerson={this.props.totalCountPerson}
                pageSize={this.props.pageSize}

                currentPage={this.props.currentPage}
                clickOnPage={this.clickOnPage}
                arrToggles={this.props.arrToggles}

                isFollow={this.props.isFollow}
                isUnfollow={this.props.isUnfollow}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        loaderState: getLoaderState(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalCountPerson: getTotalCountPerson(state),
        arrToggles: getArrToggles(state)

    }
}

let mapDispatchToProps = (dispatch) => {
    return {

        clickOnPage(id) {
            dispatch(clickOnPageActionCreator(id))
        },
        getUsers(pageSize, currentPage) {
            dispatch(getUsersThunkCreator(pageSize, currentPage))
        },
        isFollow(id) {
            dispatch(isFollowThunkCreator(id))
        },
        isUnfollow(id) {
            dispatch(isUnfollowThunkCreator(id))
        }

    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(findUsersAPIContainer)

