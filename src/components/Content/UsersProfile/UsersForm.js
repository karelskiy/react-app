import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/formsControl/FormsControl'
import { required } from '../../../utilits/validators/validators'
import classes from './UsersProfile.module.css';
import c from './../../../components/common/formsControl/FormsControl.module.css'
import { editProfileThunkCreator } from '../../../redux/content-reducer';


export default class UsersForm extends Component {

    onSubmit(dataForm) {
        editProfileThunkCreator(dataForm)
    //    this.props.editProfile(dataForm)
            .then(() => this.props.cancelEditMode())
    }

    render() {
        return (
            <div>
                <h3>EDIT MODE</h3>
                <UsersReduxForm initialValues={this.props.initialValues} onSubmit={this.onSubmit.bind(this)} />
            </div>
        )
    }
}

class UsersFormForEditMode extends Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <button>Save</button>
                {this.props.error && <div>
                    <span className={c.errorSpan}>{this.props.error}</span>
                </div>}
                <Field placeholder='full name' name='fullName' component={Input} validate={[required]} />
                <Field placeholder='about me' name='aboutMe' component={Textarea} validate={[required]} />
                <Field placeholder='looking for a job' name='lookingForAJob' type='checkbox' component={Input} validate={[required]} />
                <Field placeholder='job Description' name='lookingForAJobDescription' component={Textarea} validate={[required]} />
                <div>
                    {Object.keys(this.props.initialValues.contacts).map(i => {
                        return <div key={i}><b>{i}</b><Field placeholder={i} name={`contacts.${i}`} component={Input} /></div>
                    })}
                </div>



            </form>
        )
    }
}

const UsersReduxForm = reduxForm({ form: 'editMode' })(UsersFormForEditMode);

