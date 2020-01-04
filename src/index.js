// import state, { subscribe } from './redux/state'
import store from './redux/store';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {addPosts, updateText, textUpdate, click} from './redux/state';



const reRender = (state) => {
    ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
}
reRender(store.getState());

store.subscribe(reRender)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

