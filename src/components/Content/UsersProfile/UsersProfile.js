import React, { useState } from 'react'
import classes from './UsersProfile.module.css'
import Status from '../Status/Status'
import UsersForm from './UsersForm'



let UsersProfile = (props) => {
    let [editMode, setEditMode] = useState(false)

    const enterToEditMode = () => {
        setEditMode(true);
    }

    const cancelEditMode = () => {
        setEditMode(false);
    }

    const choosePhoto = (e) => {
        if (e.target.files.length > 0) {
            props.loadPhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <img className={classes.avaImg} src={props.currentProfile.photos.large || 'https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg'} />
            {!props.id ? <input onChange={choosePhoto} type='file' /> : null}
            {!editMode ? <div>
                {!props.id ? <div><button onClick={enterToEditMode}>Edit mode</button></div> : null}
                <b>Full Name</b><span>{props.currentProfile.fullName}</span><br />
                <b>Status: </b><Status id={props.id} setStatus={props.setStatus} status={props.status} />
                <b>About me: </b><span>{props.currentProfile.aboutMe}</span><br />
                <b>Looking for a job: </b><span>{props.currentProfile.lookingForAJob ? 'yes' : 'no'}</span><br />
                {props.currentProfile.lookingForAJob && <><b>Job description: </b> <span>{props.currentProfile.lookingForAJobDescription}</span> <br /></>}
                <div>
                    <b>Contacts:</b>
                    {Object.keys(props.currentProfile.contacts).map(i => {
                        return <Contacts key={i} contactKey={i} contactValue={props.currentProfile.contacts[i]} />
                    })}
                </div>
            </div> : <UsersForm editProfile={props.editProfile} currentProfile={props.currentProfile} initialValues={props.currentProfile} />}
        </div>
    )
}



const Contacts = ({ contactKey, contactValue }) => {
    return <div className={classes.contactsInfo}><b>{contactKey}</b><span>{`${contactValue}`}</span></div>
}

export default UsersProfile