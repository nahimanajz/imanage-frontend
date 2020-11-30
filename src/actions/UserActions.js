
import axios from 'axios';
import * as uc from '../constants/UserConstants';
import * as route from '../serverRoutes';
import { toast } from 'react-toastify';

const register = (name, email, phone, balance, password, password_confirmation) =>async(dispatch)=>{
    dispatch({type: uc.USER_REGISTER_REQUEST, payload:{name, email, phone, balance, password, password_confirmation} });
    try{
        const {data} = await axios.post(route.URL_INDEX+"/users",{name, email, phone, balance, password, password_confirmation});       
       const errors = Object.entries(data.message);   
         
       if (errors.length >0) {           
            errors.forEach(error => {
           return toast.error(error[1]);            
            });   
        }else if(errors.length === 0) {
            toast.success(data.message);
        }    
    } catch(error){       
        toast.error(error.message);
    }
}
const login = (email, password) => async(dispatch) => {
    dispatch({type: uc.USER_LOGIN_REQUEST, payload:{email, password}});
    try {
        const {data} = await axios.post(route.URL_INDEX+"/auth/user", {email, password});        
        if(data.error){
            toast.error(data.message)
        }else {
         localStorage.setItem('userInfo', JSON.stringify(data));
         dispatch({type:uc.USER_LOGIN_SUCCESS, payload: data});
        }
    }catch(error){
        toast.error(error.message);
    }
}
export {register, login};