import { useContext, useEffect, useState } from 'react';
import logo from './images/Logo.svg';
import {
  BrowserRouter as Router,
  // BrowserRouter,
  Route,
  Link,
  Switch,
  BrowserRouter,
  Redirect
} from "react-router-dom";
import './App.css';
import AuthApi from './auth/AuthApi';
import Cookies from 'js-cookie'
import Dashboard from './dashboard/Dashboard'
import Login from './login/Login'


function App() {
  
  const [auth, setAuth] = useState(false)

  const readCookie = () => {
    const user = Cookies.get("user");
    if(user){
      setAuth(true)
    }
  }

  useEffect(()=>{
    readCookie()
  },[])

  return (
    <AuthApi.Provider value={{auth, setAuth}}>
    <Router>
      <Routes/> 
    </Router>
    </AuthApi.Provider>
  );
}

const Routes = () =>{
  const Auth = useContext(AuthApi)
  return(
    <Switch>
    <ProtectedLogin path='/login' component = {Login} auth={Auth.auth}/>
    <ProtectedRoute path='/dashboard' auth={Auth.auth} component = {Dashboard}/>
    </Switch>
  )
}

const ProtectedRoute = ({auth,component:Component , ...rest}) =>{
  return(
    <Route {...rest} 
    render = {()=>auth? (
      <Component/>
    ):
    (
      <Redirect to="/login"></Redirect>
    )
    }
    >

    </Route>
  )
}


const ProtectedLogin = ({auth,component:Component , ...rest}) =>{
  return(
    <Route {...rest} 
    render = {()=>!auth? (
      <Component/>
    ):
    (
      <Redirect to="/dashboard"></Redirect>
    )
    }
    >

    </Route>
  )
}
export default App;

