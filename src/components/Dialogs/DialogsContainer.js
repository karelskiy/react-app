import React from 'react';
import { textUpdateActionCreator, clickActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer >
            {
                (store) => {

                    const click = () => {
                        store.dispatch(clickActionCreator())
                    };

                    const textUpdate = (text) => {
                        store.dispatch(textUpdateActionCreator(text))
                    }

                    return (
                        <Dialogs
                            dialogs={store.getState().dialogPage.DialogsData}
                            messages={store.getState().dialogPage.MessageData}
                            newText={store.getState().dialogPage.newText}
                            click={click}
                            textUpdate={textUpdate} />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}



export default DialogsContainer;

