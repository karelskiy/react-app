import { connect } from "react-redux"
import React, { Component } from 'react'
import Login from "./Login"
import { putLoginTunkCreator } from "../../redux/auth-reducer"

class LoginContainer extends Component {

    render() {
        return (
            <div>
                <Login putLogin={this.props.putLogin} /> 
            </div>
        )
    }
}



let mapStateToProps = (state) => {
    return {

    }
}

let mapDispatchToProps = dispatch => {
    return {
        putLogin(email, password){
            dispatch(putLoginTunkCreator(email, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)