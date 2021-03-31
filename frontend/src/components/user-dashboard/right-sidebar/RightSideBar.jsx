import React from 'react';
import Reminder from './Reminder';

import AvaatarSVG from './Avaatar';

import './right-side-bar-style.css';

const RightSideBar = () => {
  return (
    <div className="wrapper">
      <div className="row justify-content-center">
        <nav className="nav col-md-2 d-none d-lg-flex flex-column justify-content-around navbar-right--cstm position-fixed">
          {/* Right Side Bar Avaatar*/}
          <div className="d-flex flex-column align-items-center mt-3 header--cstm">
            <AvaatarSVG className="avatar-svg" />
            <p className="text--cstm-m-0">
              <strong>ANNA MORRISON</strong>{' '}
            </p>
            <p className="text--cstm-m-0 ">Student</p>
          </div>
          {/* Right Side Bar Reminder Notify*/}
          <Reminder />
        </nav>
      </div>
    </div>
  );
};

export default RightSideBar;
