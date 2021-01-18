import { useState } from "react";
import{openModal, closeModal} from '../helpers/popups';
import { useDispatch, useSelector } from "react-redux";
import {saveExpense} from '../actions/ExpenseActions';
import { headers, userInfo, user_id } from "../helpers/userInfo";

function ExpensePage(props) {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const expenseRegister = useSelector(state => state.expenseRegister);
    const { expenseLoading, expensesError, expenses } = expenseRegister;
    const data = {
        amount,
        category,
        user_id
    };
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
     e.preventDefault();     
     dispatch(saveExpense(amount, category, user_id));
  
  
    }
    return (
        <main>
            <ul className="aside sidemenu white-box">
                <li> Expenditures</li>          
                <li onClick={openModal}>Add expenditure</li>            
                {/* <li> New expense category</li>             */}                
            </ul>
            <div className="container">
               {expenseLoading && <div className="warning">expenseLoading</div>}
               {expensesError && <div className="warning"> {expensesError}</div>}

                <table className="f-w white-box mr-3">
                    <tr>
                        <th>No</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                    <tbody>
                            
                      
                       <tr>
                            <td>4</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
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
                    <form className="container" onSubmit={handleSubmit}>
                        <ul className="form-container">
                        <li>
                            <label htmlFor="amount"> Amount </label>                          
                            <input type="text" name="amount" id="amount" onChange={(e)=> setAmount(e.target.value)} required/>
                        </li>
                        
                        <li>
                            <label htmlFor="category">  Category </label>                          
                            <input type="text" name="category" id="category" onChange={(e)=> setCategory(e.target.value)} required/>
                        </li>
                        <li>
                            <button type="submit" className="button bg-primary">SAVE</button>
                        </li>

                        </ul>
                    </form>
                </div>
            </div>
           
        </main>    
    )
}
export default ExpensePage;