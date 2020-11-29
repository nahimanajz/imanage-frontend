import Cookie from 'js-cookie';
import axios from 'axios';
import * as uc from '../constants/UserConstants';
import * as route from '../serverRoutes';

const register = (name, email, phone, balance, password, password_confirmation) =>async(dispatch)=>{
    dispatch({type: uc.USER_REGISTER_REQUEST, payload:{name, email, phone, balance, password, password_confirmation} });
    try{
        const {data} = await axios.post(route.URL_INDEX+"/users",{name, email, phone, balance, password, password_confirmation});
        dispatch({type: uc.USER_REGISTER_SUCCESS, payload: data})       
        console.log(data.message);
    } catch(error){
        dispatch({type: uc.USER_REGISTER_FAIL, payload: error.message});
    }
}
export {register};