import { headers } from '../helpers/userInfo';
import { toast } from 'react-toastify';
import axios from 'axios';
import * as route from '../serverRoutes/index';
import * as cc from "../constants/CreditConstants";
import { message } from '../helpers/popups';


const saveCredit = (creditData) =>async(dispatch)=> {

    //dispatch({type: cc.CREDIT_SAVE_REQUEST, payload: creditData });
    try {
        const { data } = await axios.post(route.URL_INDEX+"/credits", creditData, {headers: headers});
        const errors = Object.entries(data.message);
        if(data.error === true){
           return message(data, errors);
        }else if(data.status === 400){
            toast.warning(data.message);
        }else{
            dispatch({type: cc.CREDIT_SAVE_SUCCESS, payload: data});
            toast.success(data.message);
        }  
       
    } catch (error) {
        dispatch({type: cc.CREDIT_SAVE_FAIL, payload: error.message }); 
        toast.error("message", error.message);
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
      
    //dispatch({type: cc.CREDIT_PAY_REQUEST});
    try {
        const { data } = await axios.post(route.URL_INDEX+"/pay/credit", paymentData, {headers:headers});
        dispatch({type:cc.CREDIT_PAY_SUCCESS, payload: data});
        toast.success(data.message);
    } catch (error) {
        dispatch({type:cc.CREDIT_PAY_FAIL, payload: error.message});
        toast.error(error.message);
        
    }
}

export {saveCredit, listCredits, saveCreditPayment};