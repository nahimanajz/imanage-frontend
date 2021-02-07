import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveIncome } from "../actions/DepositAction";
import { user_id } from "../helpers/userInfo";
const DepositPage = () => {
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState("Rwf");
    const allDeposits = useSelector(state=> state.deposits);
    const { error, deposits } = allDeposits;
    const dispatch = useDispatch();

    const handleDeposit =(e) => {
        e.preventDefault();
        dispatch(saveIncome({ amount, currency,user_id}));
    }

 return(
    <> 
        <ul>
            { error && <div> {error}</div>}
        </ul>
        <ul className="modal-content vh-center">
                <form className="form-container white-box" onSubmit={handleDeposit}>
                    <ul className="form ">                      
        
                        <li>
                            <label>Amount</label>
                            <input type="number" name="amount" onChange={(e) => setAmount(e.target.value)} required/>
                        </li>
                        <li>
                            <label>Currecy</label>
                            <input type="text" name="currency" value={currency} onChange={(e) => setCurrency(e.target.value)} required/>
                        </li>
                        <li>
                            <button className="btn-sm" type="submit">Record Income</button>
                        </li>
                    </ul>
                </form>
            </ul>
        

    </>
 )
}
export default DepositPage;