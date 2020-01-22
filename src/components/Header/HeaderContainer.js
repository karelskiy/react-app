import React, { Component } from 'react'
import Header from './Header';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { setUserDataActionCreator } from '../../redux/auth-reducer';

class HeaderContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {

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