import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listDebits, saveDebit, saveDebitPayment } from '../actions/DebitActions';
import {user_id} from "../helpers/userInfo"
import{openModal, closeModal, togglePayModal, formatDate, payedAmount, closePayModal} from '../helpers/popups';

import { Loading } from '../helpers/Loading';
import { FaWindowClose } from 'react-icons/fa';
import {Pagination, makePages } from '../components/Pagination';


function DebitPage(props) {
    const [debitor, setDebitor] = useState('');
    const [phone, setPhone] = useState('');
    const [timeToPay, setTimeToPay] = useState('');
    const [amount, setAmount] = useState('');
    const [amoutToPay, setAmountToPay] = useState('');
    const [debitId, setDebitId] = useState(0);

    const debitsList = useSelector((state)=>state.debits);
    const { debits, isLoading, error, debitsLoading, debitsError } = debitsList;
    const dispatch = useDispatch();

    const eventHandler = (e) => {
        e.preventDefault();    
        const data = { debitor, phone, timeToPay:formatDate(timeToPay), amount, user_id };
        dispatch(saveDebit(data));
    };
    const getDebitId = (debit) => togglePayModal()? setDebitId(debit.id) : togglePayModal(); 
 
    const handlerDebitPay = (e) => { 
        closePayModal();
        e.preventDefault();
        const debit = { debit_id: debitId, amount: amoutToPay };
        dispatch(saveDebitPayment(debit));
    }
    useEffect(()=> dispatch(listDebits()), []);

    let count = 0;
     // pagingation
     function pagination(){

     }
    const [currentPage, setCurrentPage] =  useState(1);
    const [debitsPerPage] = useState(7);

     const paginate = pageNumber => setCurrentPage(pageNumber);
            

    if(debitsLoading) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <ul className="aside sidemenu white-box">
                <li> Debits</li>          
                <li onClick={openModal}>Add debits</li>            
                {/* <li> New expense category</li>             */}                
            </ul>
            <ul className="container white-box">               
                
                {debitsError && <div>{debitsError}</div>}
                <table className="f-w" id="example">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Debitor</th>
                            <th>phone</th>
                            <th>Amount</th>
                            <th>Current Payment</th>
                            <th>Remaining Days To pay</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    { debits && debits.length > 0 &&
                        makePages(debits, currentPage, debitsPerPage).map(debit => {
                            return (
                                <tr key={debit.id}>
                                    <td>{++count}</td>
                                    <td>{debit.debitor }</td>
                                    <td>{debit.phone } </td>
                                    <td>{debit.amount } </td>
                                    <td> { payedAmount(debit.payedAmount)}</td>                                  
                                    <td> { debit.remainingDays}</td>                                    
                                    <td><button className="button-sm" onClick={ () => getDebitId(debit)}>Edit</button></td>
                            </tr> 
                            )
                        })
                    }
                                            
                    </tbody>
                </table>

                <Pagination 
                  dataPerPage ={ debitsPerPage }
                  totalData = {debits.length} 
                  paginate={ paginate }                    
                />
            </ul>
            <div className="modal-bg">
                <div className="modal white-box">

                    <div className="bg-primary p-1">
                        <span onClick={closeModal} className="close"><FaWindowClose /></span>
                        <h2 className="text-center">Record A Debit</h2>
                    </div>         
                    <div>
                        {isLoading && <div>Loading ...</div>}
                    {error && <div> {error}</div>}
                       
                    </div>           
                    <form className="container" onSubmit={eventHandler}>
                        <ul className="form-container">
                        <li>
                            <label htmlFor="debitor">  Debitor </label>                          
                            <input type="text" name="debitor" id="debitor" onChange={(e)=> setDebitor(e.target.value)} required/>
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
                            <input type="datetime-local" name="timeToPay" id="timeToPay" onChange={(e)=> setTimeToPay(e.target.value)} required/>
                        </li>                       
                        
                        <li>
                            <button className="button bg-primary" type="submit">SAVE Debit</button>
                        </li>

                        </ul>
                    </form>
                </div>
            </div>
            <div className="modal-sm">
            {/* <div className="modal-content"> */}
                   <form className="form-container white-box" onSubmit={handlerDebitPay}>
                       <ul className="form">
                           <li>
                               <label>Amount</label>
                               <input type="text" name="AmountToPay" onChange={ (e) => setAmountToPay(e.target.value)} />
                           </li>
                           <li>
                               <button className="btn-sm">Pay</button>
                           </li>
                       </ul>
                   </form>
               {/* </div> */}
            </div> 
        </>    
    )
}
export default DebitPage;