import * as cc from '../constants/CreditConstants';
const creditInitState = { credits: [], isLoading:false, error:null,
    creditsLoading: false, creditsError: null, isPayLoading: false, payError: null};

export default (state = creditInitState, action) => {
    switch(action.type) {
        // case cc.DEBIT_SAVE_REQUEST:            
        //     return {isLoading:true};
        case cc.CREDIT_SAVE_SUCCESS:           
            return {isLoading: false, credits: [...state.credits, action.payload.Credit]};
            
        case cc.CREDIT_SAVE_FAIL:            
            return {isLoading: false, error: action.payload};
        
        case cc.CREDIT_LIST_REQUEST :
            return {creditsLoading: true, credits: []};

        case cc.CREDIT_LIST_SUCCESS:            
            return {creditsLoading: false, credits: action.payload};

        case cc.CREDIT_LIST_FAIL:
            return {creditsLoading: false, creditsError: action.payload.message};

        case cc.CREDIT_PAY_REQUEST :
            return {isPayLoading: true, credits: []};

        case cc.CREDIT_PAY_SUCCESS:            
            return {isPayLoading: false, credits: state.credits}; /** state credits does not reload */

        case cc.CREDIT_PAY_FAIL:
            return {isPayLoading: false, payError: action.payload};    

        default:
            return state;

    }

}