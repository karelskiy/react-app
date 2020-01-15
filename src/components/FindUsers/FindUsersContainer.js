import { connect } from 'react-redux';
import FindUsers from './FindUsers';
import { findUsersActionCreator, loadFriendsActionCreator } from '../../redux/findUsers-reducer';

let mapStateToProps = (state) => {
    return {
        usersData: state.findUsersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow(id){
            dispatch(findUsersActionCreator(id))
        },
        loadFriends(users){
            dispatch(loadFriendsActionCreator(users))
        }
    }
}

let FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers) 
export default FindUsersContainer
