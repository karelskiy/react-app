import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts(props) {

    const posts = props.postsData.map(el => <Post message={el.message} likes={el.likes} />);

    const addNewElement = React.createRef();
    
    const addToState = () => {
        // let text = addNewElement.current.value;
        props.dispatch({type: 'ADD-POSTS'});
        // props.updateText('');
    }
    const onTextChange = () => {
        // console.log(addNewElement.current.value);
        props.dispatch({type: 'UPDATE-TEXT', newText: addNewElement.current.value});
        
        // updateText(addNewElement.current.value);
    }

    return (
        <div>
            <h3>My Posts</h3>
            <textarea ref={addNewElement} onChange={onTextChange} value={props.text}></textarea>
            <br />
            <button className={classes.button} onClick={addToState}>Add Posts</button>
            {posts}
        </div>
    )
}

export default MyPosts;
