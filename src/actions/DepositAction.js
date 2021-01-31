import { message } from "../helpers/popups";
import { toast } from "react-toastify";
import axios from 'axios';
import { headers, user_id } from "../helpers/userInfo";
import  { URL_INDEX }   from "../serverRoutes";

const saveIncome= (depositData)=>async(dispatch)=> {
   
try {
    const { data } = await axios.post(`${URL_INDEX}/deposit`, depositData, { headers:headers });
    // toast.success(data.message);
    dispatch({type: " INCOME_SAVE_SUCCESS ", payload: data});
    return message(data, data.message);
} catch (error) {
    toast.error(error.message);
}
}
export { saveIncome };