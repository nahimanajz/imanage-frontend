import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCredits, saveCredit, saveCreditPayment } from '../actions/CreditActions';

import { user_id } from '../helpers/userInfo';
import{openModal, closeModal, openPayModal, formatDate, payedAmount} from '../helpers/popups';

function CreditPage(props) {
    const [creditor, setCreditor] = useState('');
    const [phone, setPhone] = useState('');
    const [timeToPay, setTimeToPay] = useState('');
    const [amount, setAmount] = useState('');
    const [credit_id, setCreditId] = useState(0);
    const [amoutToPay, setAmountToPay] = useState(0);

    const allCredits = useSelector((state)=>state.credits);
    const {credits} = allCredits;
    const dispatch = useDispatch();
    const getCreditId = (credit) => openPayModal()? setCreditId(credit.id) : openPayModal(); 
    const submitCredit = (e) => {
        e.preventDefault();    
        const data = { creditor, phone, timeToPay:formatDate(timeToPay), amount, user_id };
        dispatch(saveCredit(data));
    };
    const handlerCreditPay = (e) => {
            e.preventDefault();
            const credit = {
                credit_id: credit_id,
                amount: amoutToPay
            };
            dispatch(saveCreditPayment(credit));
        }
        useEffect(()=>{
            dispatch(listCredits());

        }, []);
        let count=0;
    return (
        <main>
            <ul className="aside sidemenu white-box">
                <li> Credits</li>          
                <li onClick={openModal}>Add Credits</li>            
                {/* <li> New expense category</li>             */}                
            </ul>
            <div className="container">
                1. list of debists
                2. add new Credit
                3. Modal of new payment based on id of Credit
                <table className="f-w white-box mr-3">
                    <tr>
                        <th>No</th>
                        <th>Creditor</th>
                        <th>phone</th>
                        <th>Amount</th>
                        <th>Current Payment</th>
                        <th>Remaining Days To pay</th>
                        <th>Actions</th>
                    </tr>
                    <tbody>                      
                    { credits && credits.length > 0 &&
                        credits.map(credit => {
                            return (
                                <tr key={credit.id}>
                                    <td>{++count}</td>
                                    <td>{credit.creditor }</td>
                                    <td>{credit.phone } </td>
                                    <td>{credit.amount } </td>
                                    <td> { payedAmount(credit.payedAmount)}</td>                                  
                                    <td> { credit.remainingDays}</td>                                    
                                    <td><button className="button-sm" onClick={ () => getCreditId(credit)}>Edit</button></td>
                            </tr> 
                            )
                        })
                    }             
                    </tbody>
                </table>
            </div>
            <div className="modal-bg">
                <div className="modal white-box">

                    <div className="bg-primary p-1">
                        <span onClick={closeModal} className="close">X</span>
                        <h2 className="text-center">Record Expense</h2>
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
            <div className="modal-sm">
            {/* <div className="modal-content"> */}
                   <form className="form-container white-box" onSubmit={handlerCreditPay}>
                       <ul className="form">
                           <li>
                               <label>Amount</label>
                               <input type="text" name="amountToPay" onChange={(e) => setAmountToPay(e.target.value)}/>
                           </li>
                           <li>
                               <button className="btn-sm" type="submit">Pay</button>
                           </li>
                       </ul>
                   </form>
               {/* </div> */}
            </div>
               
           
        </main>    
    )
}
export default CreditPage;