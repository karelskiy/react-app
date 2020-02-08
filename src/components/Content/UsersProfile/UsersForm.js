import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/formsControl/FormsControl'
import { required } from '../../../utilits/validators/validators'


export default class UsersForm extends Component {

    onSubmit(dataForm){
        this.props.editProfile(dataForm)
    }

    render(){
        return (
            <div>
                <h3>EDIT MODE</h3>
                <UsersReduxForm initialValues={this.props.initialValues} save={this.props.save} onSubmit={this.onSubmit.bind(this)}/>
            </div>
        )
    }
}

class UsersFormForEditMode extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <button>Save</button>
                <Field placeholder='full name' name='fullName' component={Input} validate={[required]} />
                <Field placeholder='about me' name='aboutMe' component={Textarea} validate={[required]} />
                <Field placeholder='looking for a job' name='lookingForAJob' type='checkbox' component={Input} validate={[required]} />
                <Field placeholder='job Description' name='lookingForAJobDescription' component={Textarea} validate={[required]} />
               
            </form>
        )
    }
}

const UsersReduxForm = reduxForm({form: 'editMode'})(UsersFormForEditMode);

