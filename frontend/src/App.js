import React,{ useState, useEffect } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './page/homepage/homepage';
import './App.css'
import Dashboard from './page/DashBoard/Dashboard';
import { render } from 'react-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import {provider, Provider} from 'react-redux'
import store from './store'
import Layout from './hocs/layout'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import PrivateRoute from './hocs/PrivateRoute'

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
 const [loading, setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },8000)
  },[])

  return (
    <div className="App">
      { !loading ? (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          
          <Router>
              <Layout>

                <Route exact path="/" component={Homepage} />
                <PrivateRoute  path="/dashboard" component={Dashboard}/>
                
              </Layout>
          </Router>
        </AlertProvider>
      </Provider>
      ):(<div className="main-loading col-12"><div className="row justify-content-center align-items-center"><div className="main-spinner"><ClimbingBoxLoader color={'white'} loading={loading}  size={20} /></div></div></div> )}
    <h1 className="scroll-top bg-transparent" onClick={scrollTop}><i className="fa fa-chevron-circle-up fa-xl"/></h1>
    </div>
    
  );
}



export default App;
