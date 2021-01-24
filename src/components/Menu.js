import React from 'react';
import { Link } from 'react-router-dom';
import { name } from '../helpers/userInfo';
const Menu = () => {  
    if(name !==undefined) {
      return (
        <ul className="menu-item">
            <li> <Link to="credits" class="menu"> Credits </Link> </li>  
            <li> <Link to="debits" class="menu"> Debits </Link>  </li>
            <li> <Link to="expenses" class="menu"> Expense </Link>  </li> 
        </ul>
      )
    } else {
        return (
            <ul className="menu-item">
                 <li> <Link to="/homepage" class="menu"> Homepage</Link>  </li>                    
                <li className="glass"> <Link to="/register" class="menu"> Account</Link>   </li>
            </ul>
        )
    }
    
}
export default Menu;