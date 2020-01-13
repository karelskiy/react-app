import React from 'react';
import classes from './Content.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Content(){
    return (
        <div className={classes.content}>
            <img src= 'https://pics.freeartbackgrounds.com/fullhd/Beach_Background-1001.jpg' />
            <MyPostsContainer />
        </div>
    )
}


export default Content;
