// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension"

// import { userReducer } from "./redux/reducers/userReducer";

// const rootReducer = combineReducers({
//     userList:userReducer
// });

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

// using reduxjs toolkit configureStore

import { configureStore} from '@reduxjs/toolkit'
import {userReducer}  from "./redux/reducers/userReducer"
const Store = configureStore({reducer:{
    userList:userReducer}}
    )

export default Store;