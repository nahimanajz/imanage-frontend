import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link} from "react-router-dom";
import { register } from "../actions/UserActions";

function RegisterPage(props){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [balance, setBalance] = useState('');
    const[phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    //const [message, setMessage] = useState('');

    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
    const dispatch = useDispatch();
   const redirect = props.location.search ? props.location.search.split("=")[1]:'/register';
    useEffect(()=> {
        if(userInfo) {            
           props.history.push(redirect);

        }
 
    },[userInfo]) //if user state info change then useEffect() will executes it's code
    const submitHandler = (e) => {
        e.preventDefault();
       dispatch(register(name, email, phone, balance, password, password_confirmation));
    }
    console.log(userInfo);
  
    return ( 
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Create Account</h2>
                    </li>
                    <li>{ loading && <div>Please wait ...</div>}             
                        { error && <div>{ error } </div> }
                        
                    </li>
                    <li>
                        <label htmlFor="name">  name </label>                          
                        <input type="text" name="name" id="name" onChange={(e)=> setName(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="email">  Email </label>                          
                        <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="phone">  Phone </label>                          
                        <input type="text" name="phone" id="phone" onChange={(e)=> setPhone(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="phone">  Balance </label>                          
                        <input type="text" name="balance" id="balance" onChange={(e)=> setBalance(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="rePassword">confirm Password</label>
                        <input type="password" name="password_confirmation" id="password_confirmation" onChange={(e)=> setPassword_confirmation(e.target.value)}/>
                    </li>
                    <li>
                        <button className="button primary" type="submit"> Register</button>
                    </li>
                    <li> Already has an Account ?
                        <Link to='/login' className="button text-center secondary">
                            LOGIN
                        </Link>

                    </li>
                    
                </ul>
            </form>
        </div>
    )
} 
export default RegisterPage;