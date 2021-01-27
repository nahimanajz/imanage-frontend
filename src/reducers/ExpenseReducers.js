
import * as ec from '../constants/ExpenseConstants';

const initialExpenses = { expenses: [], loading:false, error:null, expenseLoading: false, expensesError: null};

export default (state = initialExpenses, action) => {
    switch(action.type) {
        case ec.FECTCH_EXPENSES_REQUEST :
            return {loading: true, expenses: [] };
        case ec.FECTCH_EXPENSES_SUCCESS :
            return {loading: false, expenses: action.payload};

        case ec.FECTCH_EXPENSES_FAIL:
            return {loading: false, error: action.payload};

        case ec.EXPENSE_REGISTER_REQUEST :
            return { expenseLoading: true };  

        case ec.EXPENSE_SUCCESS_REQUEST :
            console.log("data from reducer", action.payload);
              
            return { expenseLoading: false, expenses: [...state.expenses, action.payload] }; 
            
        case ec.EXPENSE_FAIL_REQUEST :
            
            return {expenseLoading: false, expensesError: action.payload };
        default: 
            return state;
    }
}
