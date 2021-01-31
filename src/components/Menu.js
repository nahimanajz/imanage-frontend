import React from 'react';
import { Link } from 'react-router-dom';
import { name } from '../helpers/userInfo';
import { VscSignIn, VscAccount } from "react-icons/vsc";
import { AiOutlineLogin } from "react-icons/ai";
import { toggleSidebar } from '../helpers/popups';
const Menu = () => {  
    if(name !==null) {
      return (
          <>
        <ul className="menu-item">
            <li> <Link to="credits" class="menu"> Credits </Link> </li>  
            <li> <Link to="debits" class="menu"> Debits </Link>  </li>
            <li> <Link to="expenses" class="menu"> Expense </Link>  </li> 
            <li> <Link to="Income" class="menu"> Income </Link>  </li> 
        </ul>
        <ul className="menu-item">
            <li> <Link to="expenses"> <VscAccount onClick={toggleSidebar} className="menu"/> </Link> </li>
        </ul>
        </>
      )
    } else {
        return (
            <>
            <ul className="menu-item">                 
                <li> <Link to="/register" class="menu"> Join</Link>   </li>
            </ul>
            <ul className="menu-item"> {/** for signin */}
            <li>
                 <Link to="login" class="menu"> <AiOutlineLogin/> </Link>  {/** here for signout */}
            </li>
            </ul>
            </>
        )
    }
    
}
export default Menu;