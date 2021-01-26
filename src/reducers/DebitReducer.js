import * as dc from '../constants/DebitConstants';
const debitInitState = { debits: [], isLoading:false, error:null,
     debitsLoading: false, debitsError: null, isPayLoading: false, payError: null};

export default (state = debitInitState, action) => {
    switch(action.type) { 
        // case dc.DEBIT_SAVE_REQUEST:            
        //     return {isLoading:true};
        case dc.DEBIT_SAVE_SUCCESS:            
            return {isLoading: false, debits: [...state.debits, action.payload.debit]};
        case dc.DEBIT_SAVE_FAIL:
            return {isLoading: false, error: action.payload};
        
        case dc.DEBITS_LIST_REQUEST :
            return {debitsLoading: true, debits: []};
        case dc.DEBITS_LIST_SUCCESS:
            return {debitsLoading: false, debits: action.payload};
        case dc.DEBITS_LIST_FAIL:
            return {debitsLoading: false, debitsError: action.payload};

        case dc.DEBIT_PAY_REQUEST :
            return {isPayLoading: true, debits: []};
        case dc.DEBIT_PAY_SUCCESS:
            return {isPayLoading: false, debits: action.payload};
        case dc.DEBIT_PAY_FAIL:
            return {isPayLoading: false, payError: action.payload};    
        default:
            return state;

    }

}