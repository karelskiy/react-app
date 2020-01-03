import React from 'react';
import classes from './Content.module.css';
import MyPosts from './MyPosts/MyPosts'

function Content(props){
    return (
        <div className={classes.content}>
            <img src= 'https://pics.freeartbackgrounds.com/fullhd/Beach_Background-1001.jpg' />
            <MyPosts text={props.text} updateText={props.updateText} addPosts={props.addPosts} postsData={props.postsData} />
        </div>
    )
}


export default Content;
