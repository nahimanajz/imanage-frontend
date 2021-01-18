
import axios from 'axios';
import * as uc from '../constants/UserConstants';
import * as route from '../serverRoutes';
import { toast } from 'react-toastify';
import { message } from '../helpers/popups';

const register = (name, email, phone, balance, password, password_confirmation) =>async(dispatch)=>{
    dispatch({type: uc.USER_REGISTER_REQUEST, payload:{name, email, phone, balance, password, password_confirmation} });
    try{
       const {data} = await axios.post(route.URL_INDEX+"/users",{name, email, phone, balance, password, password_confirmation});       
       const errors = Object.entries(data.message); 
      return message(data, errors);         
    } catch(error){       
        dispatch({type: uc.USER_REGISTER_FAIL, payload: error.message});
    }
}
const login = (email, password) => async(dispatch) => {
    dispatch({type: uc.USER_LOGIN_REQUEST, payload:{email, password}});
    try {
        const { data } = await axios.post(route.URL_INDEX+"/auth/user", {email, password});        
        if(data.error){
            toast.error(data.message);
        }else {
         localStorage.setItem('userInfo', JSON.stringify(data));   
         localStorage.setItem('user', JSON.stringify(data.user));      
       
         dispatch({type:uc.USER_LOGIN_SUCCESS, payload: data.user});
        }
    }catch(error){
        toast.error(error.message);
    }
}
export {register, login};