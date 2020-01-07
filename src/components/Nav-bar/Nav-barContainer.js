import React from 'react';
import { changeOurTextActionCreator, sayHiActionCreator } from '../../redux/sidebar-reducer';
import Nav from './Nav-bar';



function NavContainer(props) {

    const sayHi =(text) => {
        props.store.dispatch(sayHiActionCreator(text));
    }

    const changeOurText = (text) => {
        props.store.dispatch(changeOurTextActionCreator(text))
    }


    return (<Nav 
                sayHi={sayHi} 
                changeOurText={changeOurText} 
                friends={props.store.getState().sidebarPage.friends} 
                text={props.store.getState().sidebarPage.text}/>)
}

export default NavContainer;
