import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';
import Homepage from './page/homepage/homepage';
import Dashboard from './page/dashboard/Dashboard';
import './App.css'


function App() {
  const scrollTop = () =>{
    window.scrollTo({top:0, behavior:'smooth'});
};
  
  return (
    <div className="App">
     
      <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Dashboard" component={Dashboard}/>
            
          </Switch>
      </Router>
      <h1 className="scroll-top bg-transparent" onClick={scrollTop}><i className="fa fa-chevron-circle-up fa-xl"/></h1>

    </div>
  );
}

  {/* const RouteRegistration = ({component:Component , ...rest}) =>{
    const authApi = React.useContext(AuthApi);
  return <Route {...rest} render={ props=> !authApi.auth ? (<Component {...props}/>) : (<Redirect to="/dashboard"/>) } />
  };
  const RouteProtected = ({component:Component , ...rest}) =>{
    const authApi = React.useContext(AuthApi);

    return <Route {...rest} render={ props=> authApi.auth ? (<Component {...props}/>) : (<Redirect to="/"/>) } />
  };*/}

export default App;
