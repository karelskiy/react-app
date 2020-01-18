import { createStore, combineReducers } from "redux";
import contentReducer from "./content-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import findUsersReducer from "./findUsers-reducer";


let reducers = combineReducers({
    contentPage: contentReducer,
    dialogPage: dialogReducer,
    sidebarPage: sidebarReducer,
    findUsersPage: findUsersReducer
})
let store = createStore(reducers);
window.store = store;

export default store;
