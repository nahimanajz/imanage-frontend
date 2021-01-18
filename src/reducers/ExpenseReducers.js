import { useCallback } from 'react';
import * as ec from '../constants/ExpenseConstants';

const expenseRegister = (state = { expenses: []}, action)=>{
    switch(action.type) {
        case ec.EXPENSE_SUCCESS_REQUEST :
            return {expenseLoading: true, expenses: []};
        case ec.EXPENSE_SUCCESS_REQUEST :
            return {expenseLoading: false, expenses: action.payload };
        case ec.EXPENSE_FAIL_REQUEST :
            return {expenseLoading: false, expensesError: action.payload };
        default: 
            return state;
    }
}
export {expenseRegister};