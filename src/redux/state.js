import {reRender} from './../render'; 

let state = {
    contentPage: {
        PostsData: [
            { likes: 23, id:1, message: 'Hi, how you doing?' },
            { likes: 17, id:2, message: 'I have very bad day...' },
            { likes: 6, id:3, message: 'Sorry, but i`m late' }
        ],
        textForArea: 'some words'
    },
    dialogsPage: {
        DialogsData: [
            { id: 1, name: 'Andrew' },
            { id: 2, name: 'Nikolzy' },
            { id: 3, name: 'Alina' },
            { id: 4, name: 'Denis' },
            { id: 5, name: 'Marina' },
        ],
        MessageData: [
            { message: 'Hi, how are you?)' },
            { message: 'How much it cost?' },
            { message: 'Sorry, but i can`t' },
        ],
        newText: 'kamasutra'
    }
}

// window.state = state;

export const addPosts = () => {

    let obj = {
        likes: 0,
        id: 4,
        message: state.contentPage.textForArea,
    }
    state.contentPage.PostsData.push(obj);
    state.contentPage.textForArea = '';
    reRender(state)
}

export const updateText = (newText) => {
    state.contentPage.textForArea = newText;
    reRender(state)
}
// ************************************************

export const textUpdate = (text) => {
    state.dialogsPage.newText = text;
    reRender(state);
}

export const click = () => {
    let obj = {
        message: state.dialogsPage.newText
    };

    state.dialogsPage.MessageData.push(obj);
    state.dialogsPage.newText= '';
    reRender(state);
}

// ************************************************

export default state;
