import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../common/formsControl/FormsControl'
import { required, maxLength } from '../../utilits/validators/validators'

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

let maxLength10 = maxLength(10)

class LoginForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
            
                    <Field placeholder={'login'} name={'login'} component={Input} validate={[required, maxLength10]} />
    
                    <Field placeholder={'password'} name={'password'} component={Input} validate={[required, maxLength10]} />            
                
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'} />remember me
                    <br/>
                    <input type={'submit'} />
                
            </form>
        )
    }
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
