import React from 'react';
import classes from './Content.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import UsersProfile from './UsersProfile/UsersProfile';

function Content(props){
    return (
        <div className={classes.content}>
            <img alt='' src= 'https://pics.freeartbackgrounds.com/fullhd/Beach_Background-1001.jpg' />
            {Object.keys(props.currentPerson).length == 0 ?  <MyPostsContainer /> :  <UsersProfile {...props.currentPerson}  />}
           
            
        </div>
    )
}


export default Content;
