import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';
import Homepage from './page/homepage/homepage';
import './App.css'
import Dashboard from './page/DashBoard/Dashboard';

import {provider, Provider} from 'react-redux'
import store from './store'
import Layout from './hocs/layout'


function App() {
  const scrollTop = () =>{
    window.scrollTo({top:0, behavior:'smooth'});
};
  
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
            <Layout>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/dashboard" component={Dashboard}/>
            </Layout>
        </Router>
      </Provider>
      <h1 className="scroll-top bg-transparent" onClick={scrollTop}><i className="fa fa-chevron-circle-up fa-xl"/></h1>

    </div>
  );
}



export default App;
