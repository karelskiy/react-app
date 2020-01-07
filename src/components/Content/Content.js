import React from 'react';
import classes from './Content.module.css';
import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Content(props){
    return (
        <div className={classes.content}>
            <img src= 'https://pics.freeartbackgrounds.com/fullhd/Beach_Background-1001.jpg' />
            <MyPostsContainer store={props.store} />
        </div>
    )
}


export default Content;
