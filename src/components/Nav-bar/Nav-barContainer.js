import { changeOurTextActionCreator, sayHiActionCreator } from '../../redux/sidebar-reducer';
import Nav from './Nav-bar';
import { connect } from 'react-redux';



// function NavContainer() {
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     const sayHi = (text) => {
//                         store.dispatch(sayHiActionCreator(text));
//                     }

//                     const changeOurText = (text) => {
//                         store.dispatch(changeOurTextActionCreator(text))
//                     }

//                     return (
//                         <Nav
//                             sayHi={sayHi}
//                             changeOurText={changeOurText}
//                             friends={store.getState().sidebarPage.friends}
//                             text={store.getState().sidebarPage.text} />
//                     )
//                 }

//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        friends: state.sidebarPage.friends,
        text: state.sidebarPage.text
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sayHi(text){
            dispatch(sayHiActionCreator(text))
        },
        changeOurText(text){
            dispatch(changeOurTextActionCreator(text))
        }
    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)

export default NavContainer;
