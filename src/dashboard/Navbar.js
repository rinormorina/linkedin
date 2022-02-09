import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Dashboard.css'
import Logo from '../images/LogoNav.svg'
import Network from '../images/users.svg'
import ChatImg from '../images/Vector.svg'
import Search from '../images/search.svg'
import Cookies from 'js-cookie'
import AuthApi from '../auth/AuthApi';

export default function Navbar() {
    const Auth = useContext(AuthApi)
  
    const handleLogOut= ()=>{
      Auth.setAuth(false)
      Cookies.remove("user")
    }
   return (
      <Router>
         <div>
            <nav>
               <ul className='ul-navbar'>
                  <li>
                     <Link to="/dashboard"><img src={Logo} alt='Linkedin'></img></Link>
                  </li>
                  <li>
                     <Link to="/dashboard/network"><img src={Network} alt='Linkedin'></img><span>Network</span></Link>
                  </li>
                  <li>
                     <Link to="/dashboard/chat"><img src={ChatImg} alt='Linkedin'></img><span>Chat</span></Link>
                  </li>
               </ul>
               <img src={Search}></img> <input type="search" id="site-search" placeholder="Search"name="linkedin-search"></input>
               <button onClick={handleLogOut}>Logout</button>
            </nav>

            <Switch>
               <Route path="/dashboard/network">
                  <About />
               </Route>
               <Route path="/dashboard/chat">
                  <Chat />
               </Route>
               <Route path="/">
                  <Home />
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

function Home() {
   return <h2>Home</h2>;
}

function About() {
   return <h2>About</h2>;
}

function Chat() {
   return <h2>Chat</h2>;
}