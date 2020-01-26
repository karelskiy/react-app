import React from 'react';
import classes from './Content.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import UsersProfile from './UsersProfile/UsersProfile';
import Preloader from '../Preloader/Preloader';
import Status from './Status/Status';


function Content(props){
    
    if(!props.currentProfile){
        return <Preloader />
    }

    return (
        <div className={classes.content}>
            {/* <img alt='' src= 'https://pics.freeartbackgrounds.com/fullhd/Beach_Background-1001.jpg' /> */}
            <UsersProfile currentProfile={props.currentProfile} />
            <Status /> 
            <MyPostsContainer />
        </div>
    )
}


export default Content;
