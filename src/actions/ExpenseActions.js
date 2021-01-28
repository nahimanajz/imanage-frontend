import axios from 'axios';
import * as route from '../serverRoutes/index';
import * as ec from '../constants/ExpenseConstants';
import { headers, user_id} from '../helpers/userInfo';
import { toast } from 'react-toastify';
import { message } from '../helpers/popups';

const saveExpense = (amount,  category, user_id, description) => async(dispatch) => {
try {
    const { data} = await axios.post(`${route.URL_INDEX}/expenses`, { amount, category, user_id, description }, { headers: headers});    
    const errors = Object.entries(data.message);  
    if(data.error === true){
        return message(data, errors);
     }else {
        dispatch({ type: ec.EXPENSE_SUCCESS_REQUEST, payload: data.expense })
         toast.success(data.message);
     }  

} catch (error) {
    dispatch({type: ec.EXPENSE_FAIL_REQUEST, payload: error.message});
    toast.error(error.message);
}
}
const getExpenses = () => async (dispatch) => {
    dispatch({type: ec.FECTCH_EXPENSES_REQUEST});
    try {
        const { data } = await axios.get(`${route.URL_INDEX}/expenses`, { headers: headers });   
        dispatch({type:ec.FECTCH_EXPENSES_SUCCESS, payload: data});      
        
    } catch (error) {
        dispatch({type: ec.FECTCH_EXPENSES_FAIL, payload: error.message});
    }
}
export {saveExpense, getExpenses};