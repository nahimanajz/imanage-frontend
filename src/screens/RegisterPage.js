import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link} from "react-router-dom";
import { saveUser } from "../actions/UserActions";
import { useForm } from 'react-hook-form';
import validationSchema from "../helpers/SignupSchema";
import { ErrorMessemail, Formik,Field, Form, useFormik,  } from "formik";
import { FormLoader } from "../helpers/Loading";


function RegisterPage(props){
    
    const userRegister = useSelector(state => state.userRegister);
    const { loading, error} = userRegister;
    
 const dispatch = useDispatch();
 const {handleSubmit, handleChange, values, errors} = useFormik({
     initialValues : {
         name: '',
         email: '',
         phone: '',
         balance: '',
         password:'',
         password_confirmation:''
     },
     validationSchema,
     onSubmit(values) {
    
         dispatch(saveUser(values))
        
     }

 });
 return (
    <main>
        <div className="aside">            
        <ul>
            { loading ? <FormLoader /> : '' }
                
        </ul>    
        </div>  
        <form onSubmit={handleSubmit} className="container">                
            <ul className="form-container">
                <li className="text-center title">Sign up </li>  
                <li> 
                    <label htmlFor="name">  name </label>                          
                    <input type="text" name="name" onChange={handleChange}  />
                    {errors.name &&<small> {errors.name}</small> }
                </li>  
                <li>
                    <label htmlFor="email">  Email </label>                          
                    <input type="email" name="email" id="email" onChange={handleChange} />
                    {errors.email &&<small> {errors.email}</small> }

                </li>
                <li>
                    <label htmlFor="phone">  Phone </label>                          
                    <input type="text" name="phone" id="phone" onChange={handleChange} />
                    {errors.phone &&<small> {errors.phone}</small> }

                </li>
                <li>
                    <label htmlFor="balance">  Balance </label>                          
                    <input type="text" name="balance" id="balance"  onChange={handleChange}/>
                    {errors.balance &&<small> {errors.balance}</small> }
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={handleChange}/>
                    {errors.password &&<small> {errors.password}</small> }

                </li>
                <li>
                    <label htmlFor="rePassword">confirm Password</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" onChange={handleChange}/>
                    {errors.password_confirmation &&<small> {errors.password_confirmation}</small> }

                </li>
                <li>
                    <button className="button primary" type="submit"> Sign Up</button>
                </li>
                <li>
                    <div className="flex-inline">
                        <label>Already has an Account ?</label> 
                        <label><Link to='/login' className="text-link">   Sign in </Link></label>
                    </div>
                </li>
                
            </ul>
       </form>
    </main>

 )
}
export default RegisterPage;