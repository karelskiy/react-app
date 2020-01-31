import React from 'react';
import { render } from '@testing-library/react';
import contentReducer, { addPostsActionCreator, deletePostActionCreator } from './content-reducer';

let state = {
    PostsData: [
        { likes: 23, id: 1, message: 'Hi, how you doing?' },
        { likes: 17, id: 2, message: 'I have very bad day...' },
        { likes: 6, id: 3, message: 'Sorry, but i`m late' }
    ],
}

test('new post should be added', () => {
    // 1. test data
    let action = addPostsActionCreator('shut up bitch');
   
    // 2. action
    let newState = contentReducer(state, action);

    // 3. expectation
    expect(newState.PostsData.length).toBe(4);
});



test('length of PostsData should be 2', () => {
    let action = deletePostActionCreator(1);
    
    let newState = contentReducer(state, action);

    expect(newState.PostsData.length).toBe(2)
})