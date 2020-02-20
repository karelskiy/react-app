import { connect } from "react-redux"
import React, { Component } from 'react'
import Login from "./Login"
import { putLoginTunkCreator } from "../../redux/auth-reducer"
import { Redirect } from "react-router-dom"

class LoginContainer extends Component {

    render() {
        if(this.props.isAuth) return <Redirect to='/profile'/>
        return (
            <div>
                <Login putLogin={this.props.putLogin} captcha={this.props.captcha} /> 
            </div>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}

let mapDispatchToProps = dispatch => {
    return {
        putLogin(email, password, rememberMe, captcha){
            dispatch(putLoginTunkCreator(email, password, rememberMe,captcha))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)