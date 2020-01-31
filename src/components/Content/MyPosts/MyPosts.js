import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from '../../../utilits/validators/validators';
import { Textarea } from '../../common/formsControl/FormsControl';


const MyPosts = React.memo((props) => {
    const posts = props.posts.map(el => <Post key={el.id} message={el.message} likes={el.likes} />);

    const onSubmit = (text) => {
        props.addPost(text.textarea)
    }
    console.log('RENDER')

    return (
        
        <div>
            <h3>My Posts</h3>
            <MyPostsReduxForm onSubmit={onSubmit} />
            {posts} 
        </div>
    )
})

let maxLength10 = maxLength(10);


const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='textarea' placeholder='Say hello :)' validate={[required, maxLength10]} />
            <br />
            <button>Add Posts</button>
        </form>
    )
}

let MyPostsReduxForm = reduxForm({ form: 'profileForm' })(MyPostsForm)

export default MyPosts;
