import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

export default class Login extends Component {

    onSubmit(dataForm){
        let { login, password } = dataForm
        console.log(dataForm)
        this.props.putLogin({login, password})
    }

    render() {
        return (
            <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={this.onSubmit.bind(this)} />
            </div>
        )
    }
}


class LoginForm extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <Field placeholder={'login'} name={'login'} component={'input'} />
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} component={'input'} />
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'} />remember me
                </div>
                <div>
                    <input type={'submit'} />
                </div>
            </form>
        )
    }
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
