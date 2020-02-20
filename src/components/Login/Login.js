import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../common/formsControl/FormsControl'
import { required, maxLength } from '../../utilits/validators/validators'
import classes from './../common/formsControl/FormsControl.module.css'

export default class Login extends Component {

    onSubmit(dataForm){
        let { email, password, rememberMe, captcha } = dataForm
        this.props.putLogin(email, password, rememberMe, captcha)
    }

    render() {
        return (
            <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={this.onSubmit.bind(this)} captcha={this.props.captcha} />
            </div>
        )
    }
}

let maxLength10 = maxLength(20)

class LoginForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
            
                    <Field placeholder={'login'} name={'email'} component={Input} validate={[required, maxLength10]} />
    
                    <Field placeholder={'password'} name={'password'} type={'password'} component={Input} validate={[required, maxLength10]} />            
                
                    <Field type={'checkbox'} checked name={'rememberMe'} component={'input'} />remember me
                    <br/>
                    {this.props.captcha && <img src={this.props.captcha} />}
                    {this.props.captcha && <Field placeholder={'captcha'} name={'captcha'} component={Input} validate={[required]} />}
                    {this.props.error && <div>
                        <span  className={classes.errorSpan}>{this.props.error}</span>
                    </div>}
                   
                    <button>Submit</button>
                
            </form>
        )
    }
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
