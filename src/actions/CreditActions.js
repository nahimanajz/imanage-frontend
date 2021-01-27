import { headers } from '../helpers/userInfo';
import { toast } from 'react-toastify';
import axios from 'axios';
import * as route from '../serverRoutes/index';
import * as cc from "../constants/CreditConstants";


const saveCredit = (creditData) =>async(dispatch)=> {

    dispatch({type: cc.CREDIT_SAVE_REQUEST, payload: creditData });
    try {
        const { data } = await axios.post(route.URL_INDEX+"/credits", creditData, {headers: headers});
        dispatch({type: cc.CREDIT_SAVE_SUCCESS, payload: data});      
        toast.success(data.message);
    } catch (error) {
        dispatch({type: cc.CREDIT_SAVE_FAIL, payload: error.message }); 
        toast.error("message"+error.response.status);
    }
}
const listCredits = () => async(dispatch) =>{
    dispatch({type: cc.CREDIT_LIST_REQUEST});
    try {
        const { data } = await axios.get(route.URL_INDEX+"/credits", {headers:headers});
        dispatch({type:cc.CREDIT_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type:cc.CREDIT_LIST_REQUEST, payload: error.message});
    }
}
const saveCreditPayment = (paymentData) => async(dispatch) =>{
      
    dispatch({type: cc.CREDIT_PAY_REQUEST});
    try {
        const { data } = await axios.post(route.URL_INDEX+"/pay/credit", paymentData, {headers:headers});
        dispatch({type:cc.CREDIT_PAY_SUCCESS, payload: data});
        toast.success(data.message);
    } catch (error) {
        dispatch({type:cc.CREDIT_PAY_FAIL, payload: error.message});
        toast.error(error.message);
        console.log(error.message);
    }
}

export {saveCredit, listCredits, saveCreditPayment};