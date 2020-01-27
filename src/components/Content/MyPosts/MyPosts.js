import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';


function MyPosts(props) {
    const posts = props.posts.map(el => <Post key={el.id} message={el.message} likes={el.likes} />);

    const onSubmit = (text) => {
        props.addPost(text.textarea)
    }

    return (
        <div>
            <h3>My Posts</h3>
            <MyPostsReduxForm onSubmit={onSubmit} />
            {posts}
        </div>
    )
}

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='textarea' placeholder='Say hello :)'/>
            <br />
            <button>Add Posts</button>
        </form>
    )
}

let MyPostsReduxForm = reduxForm({form: 'profileForm'})(MyPostsForm)

export default MyPosts;
