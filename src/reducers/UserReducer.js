import * as uc from "../constants/UserConstants";
const userRegister = (state = {}, action) => {
    switch(action.type) {
        case uc.USER_REGISTER_REQUEST :
            return {loading: true}
        case uc.USER_REGISTER_SUCCESS:
            return {loading:false, userInfo: action.payload};
        case uc.USER_REGISTER_FAIL:
            return {loading:false, error: action.payload};  
        default:
            return state;  
    }
} 
const userLogin =(state= {}, action)=> {
    switch(action.type) {
        case uc.USER_LOGIN_REQUEST:
            return {loading: true};
        case uc.USER_LOGIN_SUCCESS:
            return {loading:false, userInfo: action.payload};
        case uc.USER_LOGIN_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export { userRegister , userLogin};
