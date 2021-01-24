import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCredits, saveCreditPayment } from '../actions/CreditActions';

import{openModal, closeModal, openPayModal, formatDate, payedAmount} from '../helpers/popups';
import { CreditForm } from '../components/CreditForm';
import Pagination from '../components/Pagination';

function CreditPage(props) {
    
    const [credit_id, setCreditId] = useState(0);
    const [amoutToPay, setAmountToPay] = useState(1);

    const [currentPage, setCurrentPage] =  useState(1);
    const [creditsPerPage] = useState(1);

    const allCredits = useSelector((state) => state.credits);
    const { credits } = allCredits;
    const dispatch = useDispatch();
    const getCreditId = (credit) => openPayModal()? setCreditId(credit.id) : openPayModal(); 
    
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

        //pagingation 
        const indexOfLastCredit = currentPage * creditsPerPage ;
        const indexOfFirstCredit = indexOfLastCredit - creditsPerPage;
        const currentCredit = credits.slice(indexOfFirstCredit, indexOfLastCredit);

        const paginate = pageNumber => setCurrentPage(pageNumber);
        
    return (
        <main>
            <ul className="aside sidemenu white-box">
                <li> Credits</li>          
                <li onClick={openModal}>Add Credits</li>            
                {/* <li> New expense category</li>             */}                
            </ul>
            <ul className="container mr-3">
                <table className="f-w white-box">
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
                        currentCredit.map(credit => {
                            return (
                                <tr key={credit.id}>
                                    <td> {++count} </td>
                                    <td>{credit.creditor } </td>
                                    <td>{credit.phone } </td>
                                    <td>{credit.amount } </td>
                                    <td> { payedAmount(credit.payedAmount)} </td>                                  
                                    <td> { credit.remainingDays} </td>                                    
                                    <td> <button className="button-sm" onClick={ () => getCreditId(credit)}>Edit</button> </td>
                            </tr> 
                            )
                        })   
                    }             
                    </tbody>
                </table>
                <Pagination 
                     creditsPerCredit ={ creditsPerPage }
                     totalCredits = {credits.length} 
                     paginate={ paginate }
                />

            </ul>
            <CreditForm />
            <div className="modal-sm">
            <div className="modal-content">
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
               </div>,
            </div>
        </main>    
    )
}
export default CreditPage;