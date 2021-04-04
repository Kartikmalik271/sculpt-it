import React from 'react';

import { BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';
import Homepage from './page/homepage/homepage';
import './App.css'
import Dashboard from './page/DashBoard/Dashboard';
import { render } from 'react-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import {provider, Provider} from 'react-redux'
import store from './store'
import Layout from './hocs/layout'


function App() {
  const scrollTop = () =>{
    window.scrollTo({top:0, behavior:'smooth'});
};

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  
  // you can also just use 'scale'
  transition: transitions.SCALE
}
  
  return (
    <div className="App">
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          
          <Router>
              <Layout>

                <Route exact path="/" component={Homepage} />
                <Route  path="/dashboard" component={Dashboard}/>
                
              </Layout>
          </Router>
        </AlertProvider>
      </Provider>
      <h1 className="scroll-top bg-transparent" onClick={scrollTop}><i className="fa fa-chevron-circle-up fa-xl"/></h1>

    </div>
  );
}



export default App;
