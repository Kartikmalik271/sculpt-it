import React, { useEffect } from 'react';
import './new-left-side-bar-style.css';
import {Redirect} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import {logout} from '../../../actions/auth'
import {connect} from 'react-redux'
import logo from '../../../assets/user-dashboard-img/logo.png'


const NewLeftSideBar = ({logout,isAuthenticated}) => {
  const onClick = e => {
    e.preventDefault();
    logout();
    if (isAuthenticated)
      return null
    else
     return <Redirect to="/"/>;
};
  
  function handleSideNavBarHide() {
    document.getElementById('sidebar').classList.toggle('active');
    this.classList.toggle('active');
    console.log('inside1');
  }
  function handleSideNavBarHide2() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('sidebarCollapse').classList.toggle('active');
    console.log('inside1');
  }
  
    

  useEffect(() => {
    document
      .getElementById('sidebarCollapse')
      .addEventListener('click', handleSideNavBarHide);
    document
      .querySelectorAll('.collapse-sidebar-on-click')
      .forEach(function (el) {
        el.addEventListener('click', handleSideNavBarHide2);
      });

    //Remove eventlistner
    return () => {
      document.removeEventListener('click', handleSideNavBarHide);
      document.removeEventListener('click', handleSideNavBarHide2);
    };
  }, []);

  

  return (
    <div className="col-2">
      <div className="row justify-content-center">
        <nav
          className="col-8 col-sm-4 col-md-3 col-lg-2 d-flex flex-column justify-content-around"
          id="sidebar"
        >
          <div className="sidebar-header px-0">
            <img style={{height:'50',width:'50'}} src={logo} alt=""/>
          </div>

          <ul className="nav-items-dashboard align-self-center d-flex flex-column justify-content-start">
            <NavLink to="/dashboard" className="collapse-sidebar-on-click">
              <li className="d-flex align-items-center mb-4 justify-content-start">
                
                <h6 className="text--cstm-m-0  db-nav-color--secondary ">
                  <i className="fas fa-th fa-2x"/>  Dashboard
                </h6>
              </li>
            </NavLink>

            <NavLink
              to="/dashboard/favorite"
              className="collapse-sidebar-on-click" >
              <li className="d-flex align-items-center mb-4 justify-content-start">
                

                <h6 className="text--cstm-m-0 db-nav-color--secondary ">
                <i className="fa fa-pencil fa-2x"/> Add Post
                </h6>
              </li>
            </NavLink>
            <NavLink to="/dashboard/profile" className="collapse-sidebar-on-click" >
              <li className="d-flex align-items-center mb-4  justify-content-start">
                
                <h6 className="text--cstm-m-0 db-nav-color--secondary ">
                <i className="fas fa-user fa-2x"/>  Profile
                </h6>
              </li>
            </NavLink>
            
            <NavLink
              to="#"
              className="collapse-sidebar-on-click" >
              <li className="d-flex align-items-center mb-4  justify-content-start">
                
                <a onClick={e =>onClick(e)}><h6 className="text--cstm-m-0 db-nav-color--secondary ">
                <i className="fa fa-sign-out fa-2x"/>  Logout
                </h6></a>
              </li>
            </NavLink>
          </ul>
         
        </nav>
        <div id="content" className="d-md-block d-lg-none">
          <nav
            id="new-navbar-left--cstm"
            className="main-dash-navbar  navbar-expand-lg navbar-light bg-light rounded-circle"
          >
            <div className="container-fluid alignself-center">
              <button type="button" id="sidebarCollapse" className="navbar-btn">
                <span />
                <span />
                <span />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logout})(NewLeftSideBar);
