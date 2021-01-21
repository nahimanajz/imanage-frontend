import axios from 'axios';
import * as route from '../serverRoutes/index';
import * as dc from "../constants/DebitConstants";
import { headers } from '../helpers/userInfo';
import { toast } from 'react-toastify';

const saveDebit = (debitData) => async(dispatch) => {
    
    dispatch({type: dc.DEBIT_SAVE_REQUEST, payload: debitData });
    try {
        const { data } = await axios.post(route.URL_INDEX+"/debits", debitData, {headers: headers});
        dispatch({type: dc.DEBIT_SAVE_SUCCESS, payload: data});      
        toast.success(data.message);
    } catch (error) {
        dispatch({type: dc.DEBIT_SAVE_FAIL, payload: error.message});
        toast.error(error.message);
    }
}
const listDebits = () => async(dispatch) =>{
    dispatch({type: dc.DEBITS_LIST_REQUEST});
    try {
        const { data } = await axios.get(route.URL_INDEX+"/debits", {headers:headers});
        dispatch({type:dc.DEBITS_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type:dc.DEBITS_LIST_REQUEST, payload: error.message});
    }
}
const saveDebitPayment = (paymentData) => async(dispatch) =>{
      
    dispatch({type: dc.DEBIT_PAY_REQUEST});
    try {
        const { data } = await axios.post(route.URL_INDEX+"/pay/debit", paymentData, {headers:headers});
        dispatch({type:dc.DEBIT_PAY_SUCCESS, payload: data});
        toast.success(data.message);
    } catch (error) {
        dispatch({type:dc.DEBIT_PAY_FAIL, payload: error.message});
        toast.error(error.message);
        console.log(error.message);
    }
}
export {saveDebit, listDebits, saveDebitPayment};