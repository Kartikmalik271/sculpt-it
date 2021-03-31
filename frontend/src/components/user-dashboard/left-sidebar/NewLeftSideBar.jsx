import React, { useEffect } from 'react';
import './new-left-side-bar-style.css';

import { Link } from 'react-router-dom';

import DashBoardSVG from './DashboardSVG';
import FavoriteSVG from './FavoriteSVG';
import ProfileSVG from './ProfileSVG';
import SettingSVG from './SettingSVG';

import UpdateApp from './UpdateApp';

const NewLeftSideBar = () => {
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
          <div className="sidebar-header ">
            <p className="text--cstm " style={{textAlign:'center'}}>
              sculpt it
            </p>
          </div>

          <ul className="nav-items-dashboard align-self-center d-flex flex-column justify-content-start">
            <Link to="/dashboard" className="collapse-sidebar-on-click">
              <li className="d-flex align-items-center mb-4 justify-content-start">
                <span>
                  <DashBoardSVG
                    fill="#b1b1b1"
                    className="dashboard-svg mr-2 mr-md-3"
                  />
                </span>
                <h6 className="text--cstm-m-0  db-nav-color--secondary ">
                  Dashboard
                </h6>
              </li>
            </Link>
            <Link
              to="/dashboard/favorite"
              className="collapse-sidebar-on-click"
            >
              <li className="d-flex align-items-center mb-4 justify-content-start">
                <span>
                  <FavoriteSVG
                    fill="#b1b1b1"
                    className="dashboard-svg mr-2 mr-md-3"
                  />
                </span>

                <h6 className="text--cstm-m-0 db-nav-color--secondary ">
                  Favorite
                </h6>
              </li>
            </Link>
            <Link to="/dashboard/profile" className="collapse-sidebar-on-click">
              <li className="d-flex align-items-center mb-4  justify-content-start">
                <span>
                  <ProfileSVG
                    fill="#b1b1b1"
                    className="dashboard-svg mr-2 mr-md-3"
                  />
                </span>
                <h6 className="text--cstm-m-0 db-nav-color--secondary ">
                  Profile
                </h6>
              </li>
            </Link>
            <Link
              to="/dashboard/settings"
              className="collapse-sidebar-on-click"
            >
              <li className="d-flex align-items-center mb-4  justify-content-start">
                <span>
                  <SettingSVG
                    fill="#b1b1b1"
                    className="dashboard-svg mr-2 mr-md-3"
                  />
                </span>
                <h6 className="text--cstm-m-0 db-nav-color--secondary ">
                  Settings
                </h6>
              </li>
            </Link>
          </ul>
         
        </nav>
        <div id="content" className="d-md-block d-lg-none">
          <nav
            id="new-navbar-left--cstm"
            className="main-dash-navbar  navbar-expand-lg navbar-light bg-light rounded-circle"
          >
            <div className="container-fluid">
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

export default NewLeftSideBar;
