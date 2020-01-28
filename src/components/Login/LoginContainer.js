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
                <Login putLogin={this.props.putLogin} /> 
            </div>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = dispatch => {
    return {
        putLogin(email, password, rememberMe){
            dispatch(putLoginTunkCreator(email, password, rememberMe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)