import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from"./screens/HomePage";
import RegisterPage from "./screens/RegisterPage";
import LoginPage from "./screens/LoginPage";
import DebitPage from "./screens/DebitPage";
import ExpensePage from "./screens/ExpensePage";

import { BrowserRouter, Link,Route } from "react-router-dom";

const openSidebar = () => {
  document.querySelector('.sidebar').classList.add('open');
}
const closeSidebar =()=> {
  document.querySelector('.sidebar').classList.remove('open');
}
toast.configure();
  
function App() {
  return (
    <BrowserRouter>
        <div className="pancake">
              <div className="header f-w">
                  <div className="logo">iManage</div>
                  <div className="nav-menu">
                      <ul className="menu-item">
                          <li>
                            <Link to="/homepage">Homepage</Link>
                          </li>                          
                          <li>
                              <Link to="/register">Account</Link>
                            
                            </li>
                      </ul>
                  </div> 
                  <div className="left-links">
                          <button className="open" onClick={openSidebar}> &#9776;</button>
                  </div>
                  
              </div>              
              <div className="main">
                <Route path="/homepage" component={HomePage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/debits" component={DebitPage} />
                <Route path="/expenses" component={ExpensePage} />
              </div>
              <aside className="sidebar">
                  <button onClick={closeSidebar}>X</button>
                  <ul className="side-menu-items">
                    <li><Link to="debits"> Debits </Link>  </li>
                    <li> <Link to="credits"> Credits </Link>  </li>             
                    <li> <Link to="expenses"> Expense </Link>  </li>                
                  </ul>
              </aside>
              
              <div className="footer red f-w">
                  Developed by <a href="janvierdev.netlify.app">&copy Janvier</a>

              </div>
          </div>
    </BrowserRouter>   
  );
}

export default App;
