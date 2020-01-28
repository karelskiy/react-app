import React, { Component } from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { isLoginThunkCreator, deleteLoginThunkCreator } from '../../redux/auth-reducer';

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.isLogin()
    }

    render() {
        return (
            <Header {...this.props} deleteLogin={this.props.deleteLogin} />
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
        isLogin(){
            dispatch(isLoginThunkCreator())
        },
        deleteLogin(){
            dispatch(deleteLoginThunkCreator())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)