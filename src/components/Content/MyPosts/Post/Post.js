import React from 'react';
import classes from './Post.module.css';

function Post(props){
    return (
        <div className={classes}>
            <img alt='' className={classes.img} src='https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png' />
            <span className={classes.span1}>{props.message}</span>
            <p>Likes {props.likes}</p>
        </div>
    )
}

export default Post
