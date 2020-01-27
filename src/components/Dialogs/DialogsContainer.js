import { textUpdateActionCreator, clickActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.DialogsData,
        messages: state.dialogPage.MessageData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        click(data){
            dispatch(clickActionCreator(data))
        },
    }
}



export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)


