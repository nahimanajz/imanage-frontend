import { useEffect, useState } from "react";
import{openModal, closeModal} from '../helpers/popups';
import { useDispatch, useSelector } from "react-redux";
import {saveExpense, getExpenses} from '../actions/ExpenseActions';
import { headers, userInfo, user_id } from "../helpers/userInfo";
import moment from "moment";
import { FaWindowClose } from 'react-icons/fa';


function ExpensePage(props) {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const allExpenses = useSelector(state => state.expenses);
    const {loading, error, expenses, expenseLoading, expensesError } = allExpenses;
   
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
     e.preventDefault();     
     dispatch(saveExpense(amount, category, user_id));
    }
    useEffect(()=>  {      
        dispatch(getExpenses());
    } , []);
    console.log(allExpenses);
    let count = 0;
    return (
        <main>
            <ul className="aside sidemenu white-box">
                <li> Expenditures</li>          
                <li onClick={openModal}>Add expenditure</li>            
                {/* <li> New expense category</li>             */}                
            </ul>
            <ul className="container">
                {loading && <div>Still loading</div>}
                {error && <div>{error}</div> }               
                  
                    <table className="f-w white-box mr-3 purple">
                    <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                               
                    <tbody>
                       {  expenses && expenses.length > 0 &&                 
                          expenses.map(expense => {
                          return (
                            <tr key={expense.id}>
                                <td> {++count} </td>
                                <td>{moment(expense.date).format("dddd, MMMM Do YYYY, h:mm:ss a") || expense.created_At } </td>
                                <td>{expense.category}  </td>
                                <td>{expense.amount}  </td>
                                
                           </tr>   
                          )  
                         })  
                        }                        
                    </tbody>
                </table>
              
               
            </ul>
            <div className="modal-bg">
                <div className="modal white-box">

                    <div className="bg-primary p-1">
                        <span onClick={closeModal} className="close"> <FaWindowClose /></span>
                        <h2 className="text-center">Record Expense</h2>
                    </div>                   
                    {expenseLoading && <div className="warning">expenseLoading</div>}
                    {expensesError && <div className="warning"> {expensesError}</div>}             
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