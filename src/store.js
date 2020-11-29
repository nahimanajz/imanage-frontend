import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {userRegister}from './reducers/UserReducer';

const successMessage = Cookie.getJSON('successMessage')
const initialState = { userRegister: { userRegister }, successMessage: {successMessage} };
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
    userRegister: userRegister 
});
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;