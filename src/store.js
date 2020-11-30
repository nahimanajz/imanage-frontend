import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {userRegister, userLogin}from './reducers/UserReducer';

const userInfo = JSON.parse(localStorage.getItem('userInfo'));
const initialState = { userLogin:userInfo };
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
    userRegister: userRegister,
    userLogin: userLogin,
   
});
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;