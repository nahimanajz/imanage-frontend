import React, { useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { login } from "../actions/UserActions";

function LoginPage(props){
    const [email, setEmail ] =  useState('');
    const [password, setPassword ] = useState('');
    
    const redirect = props.location.search? props.location.search.split["="][1]:'/expenses';
    const dispatch = useDispatch();
    
    const submitHandler = (e)=> {
        e.preventDefault();
        dispatch(login(email, password));
    } 
  
    return ( 
        <main>
            <div className="aside">            
                <img src="../images/loginImage.jpg" alt="login image" className="img64x64"/>             
            </div>
            <form onSubmit={submitHandler} className="container">
            <ul className="form-container">
                <li>
                    <h2>Login</h2>
                </li>
                <li>                        
                {/* { error && <div> { error } </div> } */}
                
                </li>
                <li>
                    <label htmlFor="email">  Email </label>                          
                    <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
                </li>
                <li>
                    <button className="button primary" type="submit"> Sign in</button>
                </li>
                <li> New to iManage? </li>
                <li>
                    <Link to='/register'>
                        Signup
                    </Link>
                </li>
            </ul>
        </form>
        </main>
           
            
    )
}
export default LoginPage;