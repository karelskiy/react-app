import { connect } from 'react-redux';
import FindUsers from './FindUsers';
import { findUsersActionCreator, loadFriendsActionCreator, clickOnPageActionCreator } from '../../redux/findUsers-reducer';

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
        follow(id){
            dispatch(findUsersActionCreator(id))
        },
        loadFriends(users){
            dispatch(loadFriendsActionCreator(users))
        },
        clickOnPage(id){
            dispatch(clickOnPageActionCreator(id))
        }
    }
}

let FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers) 
export default FindUsersContainer
