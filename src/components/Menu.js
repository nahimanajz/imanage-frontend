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
        </ul>
        <ul className="menu-item">
             <Link to="expenses" class="menu"> <VscAccount onClick={toggleSidebar}/> </Link>  {/** here for signout */}
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
            <Link to="login" class="menu"> <AiOutlineLogin height='320px'/> </Link>  {/** here for signout */}

            </ul>
            </>
        )
    }
    
}
export default Menu;