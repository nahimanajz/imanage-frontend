import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { userRegister, userLogin } from './reducers/UserReducer';
import expenses from './reducers/ExpenseReducers';
import debits from './reducers/DebitReducer';
import credits from './reducers/CreditReducer';

//const userInfo = JSON.parse(localStorage.getItem('user'));
const initialState = { };

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
    userRegister,
    userLogin,
    expenses,
    debits,
    credits
});
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;