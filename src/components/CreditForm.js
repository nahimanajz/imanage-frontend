import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveCredit } from "../actions/CreditActions";
import { closeModal, formatDate } from "../helpers/popups";
import { user_id } from '../helpers/userInfo';
import { FaWindowClose } from 'react-icons/fa';


const CreditForm = ()=> {
    const [creditor, setCreditor] = useState('');
    const [phone, setPhone] = useState('');
    const [timeToPay, setTimeToPay] = useState('');
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();
    

    const submitCredit = (e) => {
        e.preventDefault();    
        const data = { creditor, phone, timeToPay:formatDate(timeToPay), amount, user_id };
        dispatch(saveCredit(data));
    };
    return (
    <div className="modal-bg">
        <div className="modal white-box">

            <div className="bg-primary p-1">
                <span onClick={closeModal} className="close"><FaWindowClose /></span>
                <h2 className="text-center">Record Credits</h2>
            </div>                    
            <form className="container" onSubmit={submitCredit}>
                <ul className="form-container">
                <li>
                    <label htmlFor="Creditor">  Creditor </label>                          
                    <input type="text" name="creditor" id="creditor" onChange={(e)=> setCreditor(e.target.value)} required/>
                </li>
                <li>
                    <label htmlFor="phone">  Phone </label>                          
                    <input type="phone" name="phone" id="phone" onChange={(e)=> setPhone(e.target.value)} required/>
                </li>
                <li>
                    <label htmlFor="amount"> Amount </label>                          
                    <input type="number" name="amount" id="amount" onChange={(e)=> setAmount(e.target.value)} required/>
                </li>
                <li>
                    <label htmlFor="timeToPay"> Payment Date </label>                          
                    <input type="date" name="timeToPay" id="timeToPay" onChange={(e)=> setTimeToPay(e.target.value)} required/>
                </li>                       
                
                <li>
                    <button className="button bg-primary" type="submit">SAVE Credit</button>
                </li>

                </ul>
            </form>
        </div>
    </div>
    )
}
export { CreditForm };