import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostsActionCreator, updateTextActionCreator } from '../../../redux/content-reducer';


function MyPosts(props) {

    const posts = props.postsData.map(el => <Post message={el.message} likes={el.likes} />);
    
    const addToState = () => {
        props.dispatch(addPostsActionCreator());
    }
    const onTextChange = (event) => {
        props.dispatch(updateTextActionCreator(event.target.value));
    }

    return (
        <div>
            <h3>My Posts</h3>
            <textarea onChange={onTextChange} value={props.text}></textarea>
            <br />
            <button className={classes.button} onClick={addToState}>Add Posts</button>
            {posts}
        </div>
    )
}

export default MyPosts;
