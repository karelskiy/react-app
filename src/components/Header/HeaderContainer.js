import React, { Component } from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { setUserDataActionCreator } from '../../redux/auth-reducer';
import { userAPI } from '../../axios/api';

class HeaderContainer extends Component {
    componentDidMount() {
        userAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                this.props.setUserData(id, login, email)
            }
        });
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUserData(...data) {
            dispatch(setUserDataActionCreator(...data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)