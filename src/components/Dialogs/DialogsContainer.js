import { textUpdateActionCreator, clickActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.DialogsData,
        messages: state.dialogPage.MessageData,
        newText: state.dialogPage.newText,
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



export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)


