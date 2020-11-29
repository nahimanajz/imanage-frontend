import React from "react";
import HomePage from"./screens/HomePage";
import RegisterPage from "./screens/RegisterPage";
import { BrowserRouter, Link,Route } from "react-router-dom";
const openSidebar = () => {
  document.querySelector('.sidebar').classList.add('open');
}
const closeSidebar =()=> {
  document.querySelector('.sidebar').classList.remove('open');
} 
function App() {
  return (
    <BrowserRouter>
        <div className="pancake">
              <div className="header yellow f-w">
                  <div className="logo">iManage</div>
                  <div className="nav-menu">
                      <ul className="menu-item">
                          <li>
                            <Link to="/homepage">Homepage</Link>
                          </li>
                          <li>About</li>
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
              </div>
              <aside className="sidebar">
                  <button onClick={closeSidebar}>X</button>
              </aside>
              
              <div className="footer red f-w">
                  Developed by <a href="janvierdev.netlify.app">&copy Janvier</a>

              </div>
          </div>
    </BrowserRouter>   
  );
}

export default App;
