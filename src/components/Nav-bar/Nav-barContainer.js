import React from 'react';
import { changeOurTextActionCreator, sayHiActionCreator } from '../../redux/sidebar-reducer';
import Nav from './Nav-bar';
import StoreContext from '../../StoreContext';



function NavContainer() {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const sayHi = (text) => {
                        store.dispatch(sayHiActionCreator(text));
                    }

                    const changeOurText = (text) => {
                        store.dispatch(changeOurTextActionCreator(text))
                    }

                    return (
                        <Nav
                            sayHi={sayHi}
                            changeOurText={changeOurText}
                            friends={store.getState().sidebarPage.friends}
                            text={store.getState().sidebarPage.text} />
                    )
                }

            }
        </StoreContext.Consumer>
    )
}

export default NavContainer;
