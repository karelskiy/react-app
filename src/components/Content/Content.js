import React from 'react';
import classes from './Content.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import UsersProfile from './UsersProfile/UsersProfile';
import Preloader from '../Preloader/Preloader';



function Content(props){
    if(!props.currentProfile){
        return <Preloader />
    }

    return (
        <div className={classes.content}>
            <UsersProfile loadPhoto={props.loadPhoto} editProfile={props.editProfile} currentProfile={props.currentProfile} id={props.id} setStatus={props.setStatus} status={props.status} />     
            <MyPostsContainer />
        </div>
    )
}


export default Content;
