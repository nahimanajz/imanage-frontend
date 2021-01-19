import axios from 'axios';
import * as route from '../serverRoutes/index';
import * as ec from '../constants/ExpenseConstants';
import { headers, user_id} from '../helpers/userInfo';
import { toast } from 'react-toastify';

const saveExpense = (amount,  category, user_id ) => async(dispatch) => {
dispatch({type: ec.EXPENSE_REGISTER_REQUEST, payload:{ amount,  category, user_id}});
try {
    const { data } = await axios.post(route.URL_INDEX+"/expenses", {amount, category, user_id}, { headers: headers});
   console.log('these are ', data);
    dispatch({type: ec.EXPENSE_SUCCESS_REQUEST, payload: data.expense});
   
    console.log(JSON.stringify(data.message));
    toast.error(data.message);
} catch (error) {
    console.error(error);
    dispatch({type: ec.EXPENSE_FAIL_REQUEST, payload: error.message});
    toast.error(error.message);
}
}
const getExpenses = () => async (dispatch) => {
    dispatch({type: ec.FECTCH_EXPENSES_REQUEST});
    try {
        const { data } = await axios.get(route.URL_INDEX+"/expenses", { headers: headers });   
        dispatch({type:ec.FECTCH_EXPENSES_SUCCESS, payload: data});
       
        
    } catch (error) {
        dispatch({type: ec.FECTCH_EXPENSES_FAIL, payload: error.message});
    }
}
export {saveExpense, getExpenses};