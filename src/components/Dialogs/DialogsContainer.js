import { textUpdateActionCreator, clickActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


// const DialogsContainer = () => {

//     return (
//         <StoreContext.Consumer >
//             {
//                 (store) => {

//                     const click = () => {
//                         store.dispatch(clickActionCreator())
//                     };

//                     const textUpdate = (text) => {
//                         store.dispatch(textUpdateActionCreator(text))
//                     }

//                     return (
//                         <Dialogs
//                             dialogs={store.getState().dialogPage.DialogsData}
//                             messages={store.getState().dialogPage.MessageData}
//                             newText={store.getState().dialogPage.newText}
//                             click={click}
//                             textUpdate={textUpdate} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.DialogsData,
        messages: state.dialogPage.MessageData,
        newText: state.dialogPage.newText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        click(){
            dispatch(clickActionCreator())
        },
        textUpdate(text){
            dispatch(textUpdateActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;

