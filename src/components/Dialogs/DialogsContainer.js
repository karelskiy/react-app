import React from 'react';
import { textUpdateActionCreator, clickActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    const click = () => {
        props.store.dispatch(clickActionCreator())
    };

    const textUpdate = (text) => {
        props.store.dispatch(textUpdateActionCreator(text))
    }

    return ( <Dialogs 
                    dialogs={props.store.getState().dialogPage.DialogsData} 
                    messages={props.store.getState().dialogPage.MessageData} 
                    newText={props.store.getState().dialogPage.newText} 
                    click={click} 
                    textUpdate={textUpdate} /> )
}



export default DialogsContainer;

