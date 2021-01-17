function ExpensePage(props) {
    const openModal = () => document.querySelector('.modal').classList.add("open");
    const closeModal = () => document.querySelector('.modal-bg').classList.remove("open");
       
    return (
        <main>
            <ul className="aside sidemenu white-box">
                <li> Expenditures</li>          
                <li onClick={openModal}>Add expenditure</li>            
                {/* <li> New expense category</li>             */}                
            </ul>
            <div className="container">
                1. list of expenses
                2.form of adding other expenses
                3. Modal of recording new payment on debits and credits
                <table className="f-w white-box mr-3">
                    <tr>
                        <th>No</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                    <tbody>
                            
                        <tr>
                            <td>1</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr> <tr>
                            <td>4</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr> <tr>
                            <td>4</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr> <tr>
                            <td>4</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr> <tr>
                            <td>4</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr> <tr>
                            <td>4</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr> <tr>
                            <td>4</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr> <tr>
                            <td>4</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr> <tr>
                            <td>4</td>
                            <td>leisures</td>
                            <td>12/Jan/2020</td>
                            <td>10000 Rwf</td>
                        </tr> <tr>
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
                    <button onClick={closeModal}>X</button>
                </div>
            </div>
           
        </main>    
    )
}
export default ExpensePage;