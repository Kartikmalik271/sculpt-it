import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import LeftSideBar from './left-sidebar/LeftSideBar';
import RightSideBar from '../../components/user-dashboard/right-sidebar/RightSideBar';
import NewLeftSideBar from '../../components/user-dashboard/left-sidebar/NewLeftSideBar';

import Profile from '../../components/user-dashboard/ProfileDashBoard';
import MainDashBoard from '../../components/user-dashboard/MainDashBoard';
import Settings from '../../components/user-dashboard/SettingsDashBoard';
import Favorite from '../../components/user-dashboard/FavoriteDashBoard';

import './dashboard-style.css';

const Dashboard = () => {
  return (
    <div className="background">
      <div className="col-12">
      <div className="row  ">
        <Router>
          <NewLeftSideBar />
          <div id="main-content" className="col-8 px-5">
            <Switch>
              <Route exact path="/dashboard/" component={MainDashBoard} />
              <Route exact path="/dashboard/profile" component={Profile} />
              <Route exact path="/dashboard/favorite" component={Favorite} />
              <Route exact path="/dashboard/settings" component={Settings} />

            </Switch>
          </div>

          <RightSideBar />
        </Router>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
