
import axios from 'axios';
import * as uc from '../constants/UserConstants';
import * as route from '../serverRoutes';
import { toast } from 'react-toastify';
import { message } from '../helpers/popups';

const saveUser = ( userData ) =>async(dispatch)=>{
    dispatch({type: uc.USER_REGISTER_REQUEST, payload: userData });
    try{
       const {data} = await axios.post(route.URL_INDEX+"/users", userData);       
       const errors = Object.entries(data.message);  
       dispatch({type:uc.USER_REGISTER_SUCCESS, payload: data});      
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
         dispatch({type:uc.USER_LOGIN_SUCCESS, payload: data.user});
         window.location.assign("/expenses");
        }
    }catch(error){
        console.log(error.message);
        toast.error("Please provide email and password");
    }
}
export {saveUser, login};