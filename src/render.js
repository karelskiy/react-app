import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPosts, updateText, textUpdate, click} from './redux/state';



export const reRender = (state) => {
    ReactDOM.render(<App state={state} click={click} addPosts={addPosts} updateText={updateText} textUpdate={textUpdate} />, document.getElementById('root'));
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
