import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import BiddingCartSlice from "./BiddingCartSlice";

/*
* The store of redux 
*/

const reducers = combineReducers({
  biddingCart : BiddingCartSlice.reducer
});

/*
* Used to persist the redux state to the local storage since this use a bidding cart
* The user might need to have of the biddings, when the user visit the site again
*/
const persistConfig = {
  key: "root",
  storage : storage,
};

const persistedReducer = persistReducer(persistConfig, reducers );

const store = configureStore({
    reducer : persistedReducer,
    middleware : [thunk]
});

export default store;