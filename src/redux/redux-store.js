import { createStore, combineReducers, applyMiddleware } from "redux";
import contentReducer from "./content-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import findUsersReducer from "./findUsers-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form"
import appReducer from './app-reducer'


let reducers = combineReducers({
    contentPage: contentReducer,
    dialogPage: dialogReducer,
    sidebarPage: sidebarReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})
let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;
