import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from"./screens/HomePage";
import RegisterPage from "./screens/RegisterPage";
import LoginPage from "./screens/LoginPage";
import DebitPage from "./screens/DebitPage";
import ExpensePage from "./screens/ExpensePage";
 
import { BrowserRouter, Link,Route } from "react-router-dom";
import CreditPage from "./screens/CreditPage";
import { userInfo } from "./helpers/userInfo";
import { connect } from "react-redux";
import Menu from "./components/Menu";
import { FaUserCircle, FaWindowClose } from 'react-icons/fa';



const openSidebar = () => {
  document.querySelector('.sidebar').classList.toggle('open');
}
const closeSidebar =()=> {
  document.querySelector('.sidebar').classList.remove('open');
}
toast.configure();

function App() {
  return (
    <BrowserRouter>
        <div>
              <div className="header f-w bg-primary">
                    <ul className="logo">                
                      <Link to="/homepage" className="menu">iManage</Link>                   
                    </ul>                             
                       <Menu />                                  
                    <ul className="menu-item">
                       {userInfo()['user'].balance && <FaUserCircle onClick={openSidebar}/> }
                      
                    </ul>  
              </div>             
              <aside className="sidebar">                  
                  <FaWindowClose onClick={closeSidebar} size={32}/>                  
              </aside>
              
              <div className="footer bg-primary">
                  Developed By <a href="janvierdev.netlify.app"> 	&#169; Janvier</a>
              </div>
          </div>        
            <Route path="/homepage" component={HomePage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/debits" component={DebitPage} />
            <Route path="/credits" component={CreditPage} />
            <Route path="/expenses" component={ExpensePage} />
              
    </BrowserRouter>   
  );
}

export default App;
