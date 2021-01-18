import { useState } from 'react';
import{openModal, closeModal, openPayModal} from '../helpers/popups';

function CreditPage(props) {
    const [creditor, setCreditor] = useState('');
    const [phone, setPhone] = useState('');
    const [timeToPay, setTimeToPay] = useState('');
    const [amount, setAmount] = useState('');

    //additionally user id has to be supplied on this post request
    const recordPayment = (id, paymentType) => {}
    
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
                        <tr>
                            <td>1</td>
                            <td>KASIM SOLEIMAN</td>
                            <td>+25078 xx-xx-xxx </td>
                            <td>1,0000,0000 RWF</td>
                            <td>4,0000 RWF</td>
                            <td class="text-danger"> Delayed 23 days</td>
                            {/* <td><button className="button-sm" onClick={recordPayment(1, 2)}>Edit</button></td> */}
                        </tr> 
                        <tr>
                            <td>2</td>
                            <td>Hassan</td>
                            <td>+25078 53 35</td>
                            <td>1,0000 RWF</td>
                            <td>0</td>

                            <td class="text-warning"> 2 days remaining</td>
                            <td><button className="button-sm" onClick={openPayModal}>Edit</button></td>

                        </tr>  
                        <tr>
                            <td>3</td>
                            <td>Someone's name</td>
                            <td>+25078 53 35</td>
                            <td>4,0000 RWF</td>
                            <td>4,00 RWF</td>

                            <td class="text-success"> remaining 2 days </td>
                            {/* <td><button className="button-sm" onClick={recordPayment(1, 2)}>Edit</button></td> */}

                        </tr>                   
                    </tbody>
                </table>
            </div>
            <div className="modal-bg">
                <div className="modal white-box">

                    <div className="bg-primary p-1">
                        <span onClick={closeModal} className="close">X</span>
                        <h2 className="text-center">Record Expense</h2>
                    </div>                    
                    <form className="container">
                        <ul className="form-container">
                        <li>
                            <label htmlFor="Creditor">  Creditor </label>                          
                            <input type="text" name="Creditor" id="Creditor" onChange={(e)=> setCreditor(e.target.value)} required/>
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
                            <button className="button bg-primary">SAVE Credit</button>
                        </li>

                        </ul>
                    </form>
                </div>
            </div>
            <div className="modal-sm">
            {/* <div className="modal-content"> */}
                   <form className="form-container white-box">
                       <ul className="form">
                           <li>
                               <label>Amount</label>
                               <input type="text"/>
                           </li>
                           <li>
                               <button className="btn-sm">Pay</button>
                           </li>
                       </ul>
                   </form>
               {/* </div> */}
            </div>
               
           
        </main>    
    )
}
export default CreditPage;