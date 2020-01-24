import { createStore, combineReducers, applyMiddleware } from "redux";
import contentReducer from "./content-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import findUsersReducer from "./findUsers-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";


let reducers = combineReducers({
    contentPage: contentReducer,
    dialogPage: dialogReducer,
    sidebarPage: sidebarReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer
})
let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;
