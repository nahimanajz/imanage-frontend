const { act } = require("react-dom/test-utils")

const initDeposit = {loading: false, deposits:[], error:null}
const DepositReducer =( state = initDeposit, action) => {
    switch(action.type) {
        case "INCOME_SAVE_SUCCESS":
            return { loading:false, deposits:[...state.deposits, action.payload] };

        case "INCOME_SAVE_FAIL":
            return { loading:false, error: action.payload};
        default: 
            return state;
    }
}
export default DepositReducer;