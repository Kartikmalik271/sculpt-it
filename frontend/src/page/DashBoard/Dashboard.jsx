import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom"


// import LeftSideBar from './left-sidebar/LeftSideBar';
import NewLeftSideBar from '../../components/user-dashboard/left-sidebar/NewLeftSideBar';

import Profile from '../../components/user-dashboard/ProfileDashBoard';
import MainDashBoard from '../../components/user-dashboard/MainDashBoard';
import Settings from '../../components/user-dashboard/SettingsDashBoard';
import Favorite from '../../components/user-dashboard/FavoriteDashBoard';

import './dashboard-style.css';

const Dashboard = () => {
  const history = useHistory();
  return (
    <div className="background">
      <div className="col-12">
      <div className="row  ">
        <Router history= {history}>
          <NewLeftSideBar />
          <div id="main-content" className="col-12 col-lg-10 px-lg-5">
            <Switch>
              <Route exact path="/dashboard" component={MainDashBoard} />
              <Route  path="/dashboard/profile" component={Profile} />
              <Route  path="/dashboard/favorite" component={Favorite} />
              <Route  path="/dashboard/settings" component={Settings} />

            </Switch>
          </div>
        </Router>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
