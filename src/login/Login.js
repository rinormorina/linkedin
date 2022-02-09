import React, { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import AuthApi from '../auth/AuthApi';
import logo from '../images/Logo.svg';


function Login() {
    
    const Auth = useContext(AuthApi)
    const handleOnClick = () => {
      Auth.setAuth(true);
      Cookies.set('user', 'loginTrue');
    }
   console.log(Auth)

  
    return(
  
      <>
      
   <div className="App">
         <div className="linkedinHome">
           <img src={logo} alt="Linkedin"></img>
         </div>
           <div className="loginHome">
         <form>  
           <div className="form-wrap">   
              <label>Welcome</label>
               <input type="text" placeholder="Enter Username" name="username" required/>  
               <input type="password" placeholder="Enter Password" name="password" required/>  
               Forgot <a href="#"> password? </a> 
               <button onClick={handleOnClick} className="button-login">Login</button>
               <input type="checkbox" /> Remember me   
               <a>Have no account yet?</a>
               <button type="button" className="cancelbtn button-signup"> Register</button>   
               
           </div>   
       
       </form>   
       </div>
       </div>   
        
      </>
    )
  };


export default Login;
