import { createStore, combineReducers } from "redux";
import contentReducer from "./content-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    contentPage: contentReducer,
    dialogPage: dialogReducer,
    sidebarPage: sidebarReducer
})
let store = createStore(reducers);

export default store;
